import { templates } from './templates.js';

const app = document.getElementById('app');

function renderizar(rota) {
    const template = templates[rota] || templates.naoEncontrada;
    app.innerHTML = template();
}

function rotaAtual() {
    return location.hash.replace('#/', '') || 'inicio';
}

function navegar(rota) {
    history.pushState(null, '', '#/' + rota);
    renderizar(rota);
}

export function iniciarRoteador() {
    document.addEventListener('click', (e) => {
        const link = e.target.closest('[data-link]');
        if (!link) return;
        e.preventDefault();
        navegar(link.dataset.link);
        document.getElementById('menu-toggle').checked = false;
    });

    window.addEventListener('popstate', () => renderizar(rotaAtual()));

    renderizar(rotaAtual());
}