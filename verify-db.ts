import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    try {
        const admin = await prisma.usuario.findUnique({
            where: { email: 'admin@contratapp.com' }
        });

        console.log('Admin found:', admin ? 'YES' : 'NO');
        if (admin) {
            console.log('Has foto field:', admin.hasOwnProperty('foto'));
            console.log('Has preferencias field:', admin.hasOwnProperty('preferencias'));
            console.log('Password hash:', admin.senha.substring(0, 10) + '...');
        }
    } catch (e) {
        console.error('Error checking DB:', e);
    } finally {
        await prisma.$disconnect();
    }
}

main();
