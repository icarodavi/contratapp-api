const { Client } = require('pg');
const fs = require('fs');
const path = require('path');

function getConnectionString() {
    try {
        const envPath = path.join(__dirname, '..', '.env');
        const envContent = fs.readFileSync(envPath, 'utf8');
        const match = envContent.match(/DATABASE_URL="?(.*)"?/);
        if (match) return match[1];
    } catch (e) {
        console.error('Error reading .env', e);
    }
    return process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/contratapp';
}

const { crypto } = require('crypto');

async function main() {
    const connectionString = getConnectionString();
    if (!connectionString) {
        console.error('DATABASE_URL not found');
        process.exit(1);
    }
    console.log('Connecting to DB...');
    const client = new Client({ connectionString });
    await client.connect();

    try {
        // Diagnóstico de Colunas
        console.log('Checking columns of Usuario...');
        const resCols = await client.query("SELECT column_name FROM information_schema.columns WHERE table_name = 'Usuario'");
        const columns = resCols.rows.map(r => r.column_name);
        console.log('Usuario columns:', columns.join(', '));

        const hasLicitanteId = columns.includes('licitanteId');

        const userId = '550e8400-e29b-41d4-a716-446655440004';
        console.log(`Checking user ${userId}...`);

        const resUser = await client.query('SELECT * FROM "Usuario" WHERE id = $1', [userId]);
        if (resUser.rows.length === 0) {
            console.log('User not found');
            return;
        }
        const user = resUser.rows[0];
        console.log('User found:', user.email);

        if (hasLicitanteId && user.licitanteId) {
            console.log('User already has licitanteId:', user.licitanteId);
            // Verify if licitante exists
            const resLicCheck = await client.query('SELECT * FROM "Licitante" WHERE id = $1', [user.licitanteId]);
            if (resLicCheck.rows.length === 0) {
                console.log('But licitante ID does not exist in Licitante table! Broken link.');
                // clear it to fix
                // await client.query('UPDATE "Usuario" SET "licitanteId" = NULL WHERE id = $1', [userId]);
            } else {
                console.log('Link is valid.');
                return;
            }
        }

        console.log('Checking/Creating Licitante...');
        const cnpj = '00.000.000/0001-01';
        const resLic = await client.query('SELECT * FROM "Licitante" WHERE cnpj = $1', [cnpj]);

        let licitanteId;
        if (resLic.rows.length > 0) {
            licitanteId = resLic.rows[0].id;
            console.log('Found existing licitante:', licitanteId);
        } else {
            console.log('Creating licitante...');
            // Insert
            // Use crypto for UUID if Node 14.17+
            // Or use SQL gen_random_uuid if available.
            // Let's assume we can let DB generate or hardcode if needed.
            // But to be safe let's try to trust DB default (if id default uuid) or just pass it if schema requires.
            // Schema: id String @id @default(uuid()) -> DB handles it if we don't pass.

            const insertRes = await client.query(`
            INSERT INTO "Licitante" ("id", "razaoSocial", "cnpj", "tipoEmpresa", "email", "telefone", "endereco", "isMeEpp")
            VALUES (gen_random_uuid(), $1, $2, 'ME', $3, '11999999999', 'Rua demo, 123', true)
            RETURNING id
            `, ['Empresa 1 LTDA', cnpj, user.email]);
            licitanteId = insertRes.rows[0].id;
            console.log('Created licitante:', licitanteId);
        }

        if (hasLicitanteId) {
            await client.query('UPDATE "Usuario" SET "licitanteId" = $1 WHERE id = $2', [licitanteId, userId]);
            console.log('Updated Usuario.licitanteId');
        } else {
            console.log('Usuario table does not have licitanteId. Checking Licitante.usuarioId...');
            // Check if Licitante has usuarioId column
            const resLicCols = await client.query("SELECT column_name FROM information_schema.columns WHERE table_name = 'Licitante'");
            const licCols = resLicCols.rows.map(r => r.column_name);
            if (licCols.includes('usuarioId')) {
                await client.query('UPDATE "Licitante" SET "usuarioId" = $1 WHERE id = $2', [userId, licitanteId]);
                console.log('Updated Licitante.usuarioId');
            } else {
                console.error('Neither table has the FK column! Check schema.');
            }
        }

    } catch (e) {
        console.error('SQL Error:', e.message);
        if (e.detail) console.error('Detail:', e.detail);
    } finally {
        await client.end();
    }
}

main();
