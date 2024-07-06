import Usuario from "../projeto_ts/Models/Usuario.js";
import ListaUsuarios from "../projeto_ts/Models/ListaUsuarios.js";

const usuarioUm = new Usuario("Lucas", "12345");
const usuarioDois = new Usuario("Pedro", "6789");
const listaDeUsuariosUm = new ListaUsuarios();

listaDeUsuariosUm.registrarUsuario(usuarioUm);
listaDeUsuariosUm.registrarUsuario(usuarioDois);

const usuarios = listaDeUsuariosUm.retornarLista();
console.log("A lista de usuários é: ", usuarios);
