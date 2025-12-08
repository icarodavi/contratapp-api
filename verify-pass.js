const bcrypt = require('bcryptjs');

const hash = '$2b$10$rQZ8K9mN2pL3vX7yJ1hG4t';
const candidates = [
    '123456',
    'password',
    'admin',
    'contratapp',
    'senha123',
    'admin123',
    'pregoeiro',
    'licitante',
    'changeMe',
    '12345678'
];

async function check() {
    console.log('Checking passwords...');
    for (const pass of candidates) {
        try {
            const match = await bcrypt.compare(pass, hash);
            if (match) {
                console.log(`MATCH_FOUND: ${pass}`);
                return;
            }
        } catch (e) {
            console.error(e);
        }
    }
    console.log('NO_MATCH');
}

check();
