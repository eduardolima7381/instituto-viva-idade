import { aplicarMascara } from './mascaras.js';
import { mensagemDeErro } from './validacao.js';
import { mostrarErro, limparErro, mostrarFeedback } from './avisos.js';
import { salvarCadastro, limparCadastros } from './storage.js';
import { listaCadastrosHTML } from './templates.js';

function validarCampo(campo) {
    const erro = mensagemDeErro(campo);
    if (erro) {
        mostrarErro(campo, erro);
        return false;
    }
    limparErro(campo);
    return true;
}

function atualizarListaCadastros() {
    const area = document.getElementById('lista-cadastros');
    if (area) area.innerHTML = listaCadastrosHTML();
}

function aoDigitar(e) {
    const campo = e.target;
    aplicarMascara(campo);
    if (campo.classList.contains('campo-erro')) validarCampo(campo);
}

function aoSairDoCampo(e) {
    if (e.target.matches('form input')) validarCampo(e.target);
}

function aoEnviar(e) {
    e.preventDefault();
    const form = e.target;
    const campos = [...form.querySelectorAll('input')];
    const invalidos = campos.filter(campo => !validarCampo(campo));

    if (invalidos.length > 0) {
        invalidos[0].focus();
        mostrarFeedback(form, 'erro', `Corrija ${invalidos.length} campo(s) antes de enviar.`);
        return;
    }

    const dados = Object.fromEntries(new FormData(form));
    dados.enviadoEm = new Date().toISOString();
    salvarCadastro(dados);
    atualizarListaCadastros();
    mostrarFeedback(form, 'sucesso', `Cadastro de ${dados.nome} enviado com sucesso!`);
    form.reset();
}

function aoClicar(e) {
    if (e.target.matches('[data-acao="limpar-cadastros"]')) {
        limparCadastros();
        atualizarListaCadastros();
    }
}

export function iniciarFormulario() {
    document.addEventListener('input', aoDigitar);
    document.addEventListener('focusout', aoSairDoCampo);
    document.addEventListener('submit', aoEnviar);
    document.addEventListener('click', aoClicar);
}