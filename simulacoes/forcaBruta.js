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
        console.log("Usuario ou senha incorretos")
        return false;
    }
}

const usuario = new Usuario('yasmim', 'senha123')
console.log(usuario)

// Caso de sucesso
usuario.autentica('yasmim', 'senha123')

// Caso de erro
usuario.autentica('yasmim1', 'senha123')