const dayjsCarregado = typeof dayjs !== 'undefined'
    && typeof dayjs_plugin_relativeTime !== 'undefined';

if (dayjsCarregado) {
    dayjs.extend(dayjs_plugin_relativeTime);
    dayjs.locale('pt-br');
}

function formatarData(iso) {
    return dayjsCarregado
        ? dayjs(iso).format('DD/MM/YYYY HH:mm')
        : new Date(iso).toLocaleString('pt-BR');
}

function tempoRelativo(iso) {
    return dayjsCarregado ? dayjs(iso).fromNow() : '';
}

export function descricaoData(iso) {
    const relativo = tempoRelativo(iso);
    return relativo ? `${formatarData(iso)} (${relativo})` : formatarData(iso);
}