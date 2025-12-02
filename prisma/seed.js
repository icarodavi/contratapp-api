const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();

async function main() {
    const sqlPath = path.join(__dirname, '..', 'database-seed.sql');
    const sql = fs.readFileSync(sqlPath, 'utf-8');

    console.log('Cleaning database...');
    try {
        // Disable foreign key checks to allow truncation
        // For PostgreSQL:
        const tablenames = await prisma.$queryRaw`SELECT tablename FROM pg_tables WHERE schemaname='public'`;

        const tables = tablenames
            .map(({ tablename }) => tablename)
            .filter((name) => name !== '_prisma_migrations')
            .map((name) => `"public"."${name}"`)
            .join(', ');

        if (tables.length > 0) {
            await prisma.$executeRawUnsafe(`TRUNCATE TABLE ${tables} CASCADE;`);
        }
        console.log('Database cleaned.');

        console.log('Executing seed from database-seed.sql...');

        // Split by semicolon to execute statements one by one
        const statements = sql
            .split(';')
            .map(s => s.trim())
            .filter(s => s.length > 0);

        for (const statement of statements) {
            await prisma.$executeRawUnsafe(statement);
        }

        console.log('Seed executed successfully.');
    } catch (e) {
        console.error('Error executing seed:', e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
}

main();
