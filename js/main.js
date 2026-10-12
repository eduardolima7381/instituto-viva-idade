import { iniciarRoteador } from './router.js';
import { iniciarFormulario } from './formulario.js';

iniciarRoteador();
iniciarFormulario();
document.querySelector(".pular-link").addEventListener("click", (evento) => {
    evento.preventDefault();
    document.getElementById("app").focus();
});