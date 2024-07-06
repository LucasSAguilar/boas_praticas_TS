import Usuario from "./Usuario";

class ListaUsuarios {
  lista: Array<Usuario>;

  constructor() {
    this.lista = [];
  }

  registrarUsuario(usuario: Usuario): Object {
    this.lista.push(usuario);
    return {
      sucesso: true,
      mensagem: "Usuário adicionado com sucesso",
    };
  }

  retornarLista() {
    return this.lista;
  }
}

export default ListaUsuarios;
