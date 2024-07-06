import Usuario from "./Models/Usuario";
import ListaUsuarios from "./Models/ListaUsuarios";

const usuarioUm = new Usuario("Lucas", "12345");
const listaDeUsuariosUm = new ListaUsuarios();



listaDeUsuariosUm.registrarUsuario(usuarioUm)

const usuarios = listaDeUsuariosUm.retornarLista();
console.log(usuarios);
