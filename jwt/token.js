import jwt from 'jsonwebtoken';

const chaveSecreta = "chaveSecreta";

const token = jwt.sign(
    {
        apelido: "yas",
        curso: "rxjs"
    }, chaveSecreta
)

console.log(token)

const tokenDecodificado = jwt.verify(token, chaveSecreta)
console.log(tokenDecodificado)