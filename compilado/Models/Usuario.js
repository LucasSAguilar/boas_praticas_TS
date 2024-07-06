class Usuario {
    constructor(nome, senha) {
        this.nome = nome;
        this.senha = senha;
        this.logado = false;
    }
    validarSenha(senha) {
        return senha === this.senha;
    }
    validarNome(nome) {
        return nome === this.nome;
    }
    fazerLogin(nome, senha) {
        if (this.validarNome(nome) && this.validarSenha(senha)) {
            this.logado = true;
            return {
                sucesso: true,
                mensagem: "Login realizado com sucesso",
            };
        }
        return {
            sucesso: false,
            mensagem: "Não foi possível realizar o login",
        };
    }
    fazerLogout() {
        this.logado = false;
        return {
            sucesso: true,
            mensagem: "Usuário desconectado com sucesso",
        };
    }
}
export default Usuario;
