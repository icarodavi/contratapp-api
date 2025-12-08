const bcrypt = require('bcryptjs');

const hash = '$2b$10$3QuZQYlq72kS435cGp6pFeYI4CsRBcrKLcZ0BIJoggIBxryR/Ih.e';
const pass = 'senha123';

async function check() {
    try {
        const match = await bcrypt.compare(pass, hash);
        if (match) {
            console.log(`MATCH_CONFIRMED: ${pass}`);
        } else {
            console.log('NO_MATCH_FOR_JOAO_HASH');
        }
    } catch (e) {
        console.error(e);
    }
}

check();
