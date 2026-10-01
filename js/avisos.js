export function mostrarErro(campo, texto) {
    campo.classList.add('campo-erro');
    campo.setAttribute('aria-invalid', 'true');

    let aviso = document.getElementById(`erro-${campo.id}`);
    if (!aviso) {
        aviso = document.createElement('span');
        aviso.id = `erro-${campo.id}`;
        aviso.className = 'mensagem-erro';
        campo.after(aviso);
        campo.setAttribute('aria-describedby', aviso.id);
    }
    aviso.textContent = texto;
}

export function limparErro(campo) {
    campo.classList.remove('campo-erro');
    campo.removeAttribute('aria-invalid');
    campo.removeAttribute('aria-describedby');
    document.getElementById(`erro-${campo.id}`)?.remove();
}

export function mostrarFeedback(form, tipo, texto) {
    let aviso = document.getElementById('aviso-form');
    if (!aviso) {
        aviso = document.createElement('div');
        aviso.id = 'aviso-form';
        form.before(aviso);
    }
    aviso.className = `alerta alerta-${tipo}`;
    aviso.setAttribute('role', tipo === 'erro' ? 'alert' : 'status');

    const p = document.createElement('p');
    p.textContent = texto;
    aviso.replaceChildren(p);
}