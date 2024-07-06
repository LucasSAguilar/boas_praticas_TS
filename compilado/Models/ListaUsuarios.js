class ListaUsuarios {
    constructor() {
        this.lista = [];
    }
    registrarUsuario(usuario) {
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
