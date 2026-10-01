function mascaraTelefone(valor) {
    const n = valor.replace(/\D/g, '').slice(0, 11);
    if (n.length === 0) return '';
    if (n.length <= 2) return `(${n}`;
    if (n.length <= 7) return `(${n.slice(0, 2)})${n.slice(2)}`;
    return `(${n.slice(0, 2)})${n.slice(2, 7)}-${n.slice(7)}`;
}

function mascaraCPF(valor) {
    const n = valor.replace(/\D/g, '').slice(0, 11);
    if (n.length <= 3) return n;
    if (n.length <= 6) return `${n.slice(0, 3)}.${n.slice(3)}`;
    if (n.length <= 9) return `${n.slice(0, 3)}.${n.slice(3, 6)}.${n.slice(6)}`;
    return `${n.slice(0, 3)}.${n.slice(3, 6)}.${n.slice(6, 9)}-${n.slice(9)}`;
}

function mascaraCEP(valor) {
    const n = valor.replace(/\D/g, '').slice(0, 8);
    if (n.length <= 5) return n;
    return `${n.slice(0, 5)}-${n.slice(5)}`;
}

const mascaras = { telefone: mascaraTelefone, cpf: mascaraCPF, cep: mascaraCEP };

export function aplicarMascara(campo) {
    const mascara = mascaras[campo.id];
    if (mascara) campo.value = mascara(campo.value);
}