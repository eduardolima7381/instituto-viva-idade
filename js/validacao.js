function cpfValido(valor) {
    const n = valor.replace(/\D/g, '');
    if (n.length !== 11 || /^(\d)\1{10}$/.test(n)) return false;
    for (let t = 9; t < 11; t++) {
        let soma = 0;
        for (let i = 0; i < t; i++) soma += Number(n[i]) * (t + 1 - i);
        const digito = ((soma * 10) % 11) % 10;
        if (digito !== Number(n[t])) return false;
    }
    return true;
}

function nascimentoValido(valor) {
    const data = new Date(valor);
    return data <= new Date() && data.getFullYear() >= 1900;
}

export function mensagemDeErro(campo) {
    const v = campo.validity;
    if (v.valueMissing) return 'Este campo é obrigatório.';
    if (v.typeMismatch) return 'Formato inválido. Confira o valor digitado.';
    if (v.patternMismatch) {
        return campo.placeholder ? `Formato inválido. Exemplo: ${campo.placeholder}` : 'Formato inválido.';
    }
    if (campo.id === 'cpf' && !cpfValido(campo.value)) return 'CPF inválido. Confira os números.';
    if (campo.id === 'nascimento' && !nascimentoValido(campo.value)) return 'Data de nascimento inválida.';
    return '';
}