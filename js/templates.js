import { categoriasVoluntariado, itensDoacao } from './dados.js';
import { lerCadastros } from './storage.js';
import { descricaoData } from './datas.js';
function listaHTML(itens) {
    return `<ul>${itens.map(item => `<li>${item}</li>`).join('')}</ul>`;
}

function cartaoCategoria(categoria) {
    return `
        <div class="categoria">
            <h3>${categoria.titulo}</h3>
            ${listaHTML(categoria.funcoes)}
        </div>
    `;
}
function escapar(texto) {
    const div = document.createElement('div');
    div.textContent = texto;
    return div.innerHTML;
}
export function listaCadastrosHTML() {
  const cadastros = lerCadastros();
    if (cadastros.length === 0) {
        return '<h2>Cadastros enviados</h2><p>Nenhum cadastro enviado ainda.</p>';
    }
    return `
        <h2>Cadastros enviados (${cadastros.length})</h2>
        <ul>
                        ${cadastros.map(c => `<li>${escapar(c.nome)} - ${escapar(c.cidade)} <small>${descricaoData(c.enviadoEm)}</small></li>`).join('')}
        </ul>
        <button type="button" class="botao botao-secundario" data-acao="limpar-cadastros">Limpar lista</button>
    `;
}
export const templates = {
    inicio: () => `
        <section>
            <h2>Sobre o Instituto Viva Idade</h2>
            <div class="sobre-grid">
                <div class="sobre-texto">
                    <p>O Instituto Viva Idade é uma organização não governamental dedicada ao cuidado, acolhimento e valorização de pessoas idosas em situação de vulnerabilidade.</p>
                </div>
                <div class="sobre-imagem">
                    <img src="imagens/ong1.jpg" alt="Ícone do Instituto Viva Idade">
                </div>
            </div>
        </section>
        <section>
            <h2>Fale Conosco</h2>
            <address>
                <p>Rua Felisberto Martins, 658 - Catanduva, SP</p>
                <p>Telefone: <a href="tel:+5517915575244">(17) 91557-5244</a></p>
                <p>E-mail: <a href="mailto:contato@vivaidade.org.br">contato@vivaidade.org.br</a></p>
            </address>
        </section>
    `,

        projetos: () => `
        <section id="voluntariado">
            <h2>Voluntariado</h2>
            <p>Você pode contribuir com seu tempo em diferentes frentes de atuação.</p>
            <div class="categorias">
                ${categoriasVoluntariado.map(cartaoCategoria).join('')}
            </div>
        </section>
        <section class="doacoes" id="doacoes">
            <h2>Doações</h2>
            <p>Você também pode contribuir com recursos materiais ou financeiros.</p>
            ${listaHTML(itensDoacao)}
        </section>
    `,

    cadastro: () => `
        <form novalidate>
            <fieldset>
                <legend>Dados Pessoais</legend>
                <label for="nome">Nome Completo</label>
                <input type="text" id="nome" name="nome" required>
                <label for="email">E-mail</label>
                <input type="email" id="email" name="email" required>
                <label for="nascimento">Data de Nascimento</label>
                <input type="date" id="nascimento" name="nascimento" required>
            </fieldset>
            <fieldset>
                <legend>Endereço</legend>
                <label for="endereco">Endereço</label>
                <input type="text" id="endereco" name="endereco" required>
                <label for="cidade">Cidade</label>
                <input type="text" id="cidade" name="cidade" required>
                <label for="estado">UF</label>
                <input type="text" id="estado" name="estado" maxlength="2" pattern="[A-Za-z]{2}" placeholder="SP" required>
                <label for="cep">CEP</label>
                <input type="text" id="cep" name="cep" placeholder="00000-000" pattern="\\d{5}-\\d{3}" required>
            </fieldset>
            <fieldset>
                <legend>Telefone e CPF</legend>
                <label for="telefone">Telefone</label>
                <input type="tel" id="telefone" name="telefone" placeholder="(00)00000-0000" pattern="\\(\\d{2}\\)\\d{5}-\\d{4}" required>
                <label for="cpf">CPF</label>
                <input type="text" id="cpf" name="cpf" placeholder="000.000.000-00" pattern="\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}" required>
            </fieldset>
            <button type="submit">Enviar cadastro</button>
        </form>
        <section id="lista-cadastros">${listaCadastrosHTML()}</section>
    `,

    naoEncontrada: () => `
        <section>
            <h2>Página não encontrada</h2>
            <p>O endereço acessado não existe. Use o menu para voltar.</p>
        </section>
    `
};