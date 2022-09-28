import { createHash } from 'crypto';

class Usuario {
    constructor(nome, senha) {
        this.nome = nome;
        this.hash = this.criaHash(senha);
    }

    criaHash(senha) {
        return createHash('sha256').update(senha).digest('hex')
    }

    autentica(nome, senha) {
        if(nome === this.nome && this.hash === this.criaHash(senha)) {
            console.log("Usuario autenticado com sucesso")
            return true;
        } 
        return false;
    }
}

const usuario = new Usuario('yasmim', 'senha123')

for (let senhaTeste = 0; senhaTeste < 1000; senhaTeste++) {
    if(usuario.autentica("yasmim", senhaTeste.toString())) {
        console.log(`A senha do usuario eh ${senhaTeste}`)
    }
}