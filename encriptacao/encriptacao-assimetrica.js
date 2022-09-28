import { generateKeyPairSync, publicEncrypt, privateDecrypt } from "crypto"; 

const { privateKey, publicKey } = generateKeyPairSync(
    'rsa', {
        modulusLength: 2048,
        publicKeyEncoding: {
            type: 'spki',
            format: 'pem', 
        },
        privateKeyEncoding: {
            type: 'pkcs8',
            format: 'pem'
        }
    }
)

const dadosCriptografados = publicKey(
    publicKey,
    Buffer.from("Mensagem super secreta")
)
console.log(dadosCriptografados.toString());
const dadosDecifrados = privateKey(
    privateKey,
    dadosCriptografados
)

console.log(`Dados decifrados: ${dadosDecifrados}`);