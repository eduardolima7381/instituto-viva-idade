# Instituto Viva Idade

Site institucional de uma ONG fictícia que cuida de idosos, desenvolvido como projeto prático do curso de Análise e Desenvolvimento de Sistemas (Cruzeiro do Sul).

## Funcionalidades

- Navegação entre páginas sem recarregar (SPA com JavaScript)
- Menu responsivo com dropdown e hambúrguer
- Formulário de cadastro com máscaras e validação (telefone, CPF e CEP)
- Lista de cadastros salva no navegador (localStorage)
- Componentes de feedback: alertas, toasts, modais e badges

## Tecnologias

HTML5 semântico, CSS3 (variáveis, Grid e Flexbox), JavaScript com ES6 Modules e a biblioteca Day.js.

## Estrutura do projeto

- `index.html`: página inicial
- `html/`: demais páginas
- `css/`: estilos
- `js/`: módulos JavaScript
- `imagens/`: imagens e logo

## Como instalar e executar

1. Clone o repositório: `git clone https://github.com/eduardolima7381/instituto-viva-idade.git`
2. Abra a pasta no VS Code.
3. Execute com a extensão Live Server (clique em "Go Live"). Os módulos ES6 precisam de um servidor local e não funcionam abrindo o arquivo direto.

## Como utilizar

Navegue pelo menu entre Início, Projetos e Cadastro. No cadastro, preencha os campos obrigatórios; os dados enviados aparecem na lista da própria tela.

## Manutenção

O fluxo de trabalho segue o GitFlow: novas funcionalidades em `feature/`, integração na `develop`, versões estáveis na `main` e correções urgentes em `hotfix/`. Os commits seguem o padrão semântico (`feat:`, `fix:`, `docs:`, `chore:`).

## Autor

Carlos Eduardo Lima