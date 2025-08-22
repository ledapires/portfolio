# Portfolio - Testes Automatizados com Cypress, JavaScript e K6

## Introdução
Este projeto tem como objetivo criar o primeiro portfólio de testes automatizados, atividade proposta pela Mentoria 2.0 do Júlio de Lima. O foco está na automação de testes funcionais e de performance utilizando Cypress, JavaScript e K6, promovendo boas práticas e organização do código.

## Tecnologias Utilizadas
- **Cypress**: Automação de testes end-to-end para aplicações web.
- **JavaScript**: Linguagem principal para scripts de automação.
- **K6**: Ferramenta para testes de performance.
- **cypress-mochawesome-reporter**: Geração de relatórios dos testes automatizados.
- **http-server**: Servidor local para rodar a aplicação durante os testes.

## Estrutura do Repositório
```
├── cypress/
│   ├── e2e/                # Testes end-to-end
│   ├── support/            # Custom Commands e configurações de suporte
│   └── fixtures/           # Dados de teste (mocks)
├── tests/                  # Scripts de teste de performance
├── package.json            # Dependências e scripts do projeto
├── cypress.config.js       # Configuração do Cypress
├── README.md               # Documentação do projeto
```

## Objetivo de Cada Grupo de Arquivos
- **cypress/e2e/**: Contém os testes automatizados que validam funcionalidades da aplicação.
- **cypress/support/**: Inclui Custom Commands para reutilização de ações e configurações globais do Cypress.
- **cypress/fixtures/**: Armazena dados de teste utilizados nos scripts.
- **tets/**: Scripts para execução dos testes de performance com K6.
- **package.json**: Gerencia dependências e scripts de automação.
- **cypress.config.js**: Arquivo de configuração do Cypress.

## Instalação
1. Clone o repositório:
   ```bash
   git clone https://github.com/ledapires/portfolio.git
   cd portfolio
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor local para rodar a aplicação:
   ```bash
   npx http-server
   ```

## Execução dos Testes
### Testes Funcionais (Cypress)
1. Execute os testes:
   ```bash
   npx cypress run
   ```
2. Para gerar relatórios com o cypress-mochawesome-reporter:
   ```bash
   npx cypress run --reporter mochawesome
   ```

### Testes de Performance (K6)
1. Defina a variável de ambiente `BASE_URL` com a URL do servidor local:
   ```bash
   set BASE_URL=http://localhost:8080
   k6 run k6/seu-teste.js
   ```
   *(No Linux/Mac, use `export BASE_URL=http://localhost:8080`)*

2. Para acompanhar o relatório em tempo real e exportar em HTML:
   ```bash
   BASE_URL=http://localhost:8080
   K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_EXPORT=html-report.html k6 run k6/seu-teste.js
   ```

## Observações
- Os Custom Commands do Cypress estão documentados em `cypress/support/commands.js`.
- Os relatórios dos testes Cypress são gerados automaticamente na pasta `cypress/reports`.
- Certifique-se de que o servidor local está rodando antes de executar os testes.

---

Projeto desenvolvido para fins educacionais na Mentoria 2.0 do Júlio de Lima.
