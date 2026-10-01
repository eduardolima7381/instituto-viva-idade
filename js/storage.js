const CHAVE_CADASTROS = 'vivaidade:cadastros';

export function lerCadastros() {
    try {
        return JSON.parse(localStorage.getItem(CHAVE_CADASTROS)) || [];
    } catch {
        return [];
    }
}

export function salvarCadastro(cadastro) {
    const lista = lerCadastros();
    lista.push(cadastro);
    localStorage.setItem(CHAVE_CADASTROS, JSON.stringify(lista));
}

export function limparCadastros() {
    localStorage.removeItem(CHAVE_CADASTROS);
}