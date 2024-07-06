class Usuario {
  nome: String;
  senha: String;
  logado: boolean;

  constructor(nome: String, senha: String) {
    this.nome = nome;
    this.senha = senha;
    this.logado = false;
  }

  validarSenha(senha: String): boolean {
    return senha === this.senha;
  }
  validarNome(nome: String): boolean {
    return nome === this.nome;
  }

  fazerLogin(nome: String, senha: String): Object {
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

  fazerLogout(): Object {
    this.logado = false;
    return {
      sucesso: true,
      mensagem: "Usuário desconectado com sucesso",
    };
  }
}

export default Usuario;
