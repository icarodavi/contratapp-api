import * as fs from 'fs';
import { PrismaClient } from '@generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({
    url: process.env.DATABASE_URL,
});
const prisma = new PrismaClient({ adapter });

async function main() {
    console.log('Fetching users...');
    const users = await prisma.usuario.findMany({
        select: {
            id: true,
            nome: true,
            email: true,
            perfil: true,
            ativo: true
        }
    });

    if (users.length === 0) {
        console.log('No users found.');
        return;
    }

    fs.writeFileSync('users_output.json', JSON.stringify(users, null, 2));
    console.log('Users written to users_output.json');
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
