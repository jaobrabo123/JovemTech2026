import crypto from 'node:crypto';
import fs from 'fs/promises'

console.log(crypto.createHash('sha256').update('Joao').digest('hex'))

async function teste() {
    const content = await fs.readFile('package.json', 'utf-8')
    console.log(JSON.parse(content))
}

teste()