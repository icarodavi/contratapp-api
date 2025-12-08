import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

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
