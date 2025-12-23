import { PrismaClient } from '../prisma/generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import * as dotenv from 'dotenv';

dotenv.config();

const connectionString = `${process.env.DATABASE_URL}`
console.log('DB URL:', connectionString ? 'Loaded' : 'Missing');
const adapter = new PrismaPg({ connectionString })
const prisma = new PrismaClient({ adapter });

async function main() {
    const userId = '550e8400-e29b-41d4-a716-446655440004'; // Carlos
    console.log(`Checking user ${userId}...`);

    const user = await prisma.usuario.findUnique({
        where: { id: userId },
        include: { licitante: true },
    });

    if (!user) {
        console.error('User not found!');
        return;
    }

    console.log('User found:', user.nome, user.email);
    console.log('Current Licitante:', user.licitante);

    if (!user.licitante) {
        console.log('User has no licitante. Creating/Linking one...');

        // Check if a licitante exists for this email/company
        const razaoSocial = 'Empresa 1 LTDA';
        const cnpj = '00.000.000/0001-01';

        let licitante = await prisma.licitante.findFirst({
            where: { cnpj }
        });

        if (licitante) {
            console.log('Found existing licitante by CNPJ:', licitante.id);
        } else {
            console.log('Creating new licitante...');
            licitante = await prisma.licitante.create({
                data: {
                    razaoSocial,
                    cnpj,
                    tipoEmpresa: 'ME',
                    email: user.email,
                    telefone: '11999999999',
                    endereco: 'Rua Teste, 123',
                    isMeEpp: true,
                }
            });
            console.log('Created licitante:', licitante.id);
        }

        // Link user to licitante. 
        // Need to check schema relation direction. 
        // Usuario model: licitante Licitante? @relation(fields: [licitanteId], references: [id])
        // So update User.

        await prisma.usuario.update({
            where: { id: userId },
            data: { licitanteId: licitante.id }
        });
        console.log('Linked User to Licitante successfully.');

        const updatedUser = await prisma.usuario.findUnique({
            where: { id: userId },
            include: { licitante: true }
        });
        console.log('Updated User Licitante:', updatedUser?.licitante);
    } else {
        console.log('User already has licitante.');
    }
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
