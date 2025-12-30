import { PrismaClient } from '@generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({
    url: process.env.DATABASE_URL,
});
const prisma = new PrismaClient({ adapter });

const newHash = '$2b$10$3QuZQYlq72kS435cGp6pFeYI4CsRBcrKLcZ0BIJoggIBxryR/Ih.e'; // senha123

async function main() {
    console.log('Updating user passwords...');
    try {
        const result = await prisma.usuario.updateMany({
            data: {
                senha: newHash
            }
        });
        console.log(`Successfully updated ${result.count} users.`);
    } catch (e) {
        console.error('Error updating passwords:', e);
    } finally {
        await prisma.$disconnect();
    }
}

main();
