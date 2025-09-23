# trampos.co / areajobs.co – Job Board

Este repositório contém a solução para o desafio técnico de um job board, desenvolvido com React e Vite. Aqui você encontra as decisões técnicas, estrutura do projeto, principais funcionalidades e instruções para execução.

## Sumário

- [Sobre o Projeto](#sobre-o-projeto)
- [Principais Funcionalidades](#principais-funcionalidades)
- [Design e Layout](#design-e-layout)
- [Decisões Técnicas](#decisões-técnicas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Validação e Segurança](#validação-e-segurança)
- [Como Executar](#como-executar)
- [Screenshots](#screenshots)
- [Considerações Finais](#considerações-finais)

---

## Sobre o Projeto

O objetivo deste projeto é criar uma aplicação web para listagem e cadastro de vagas de emprego, utilizando React, Vite e Context API. O sistema permite visualizar, filtrar, pesquisar e cadastrar novas vagas, com dados persistidos em um arquivo JSON. O foco está em entregar uma solução funcional, clara, responsiva e de fácil manutenção.

## Principais Funcionalidades

- **Listagem de vagas:** Visualize vagas de emprego com detalhes como título, empresa, tipo de contratação, localidade, salário, responsável e descrição.
- **Busca e filtro:** Pesquise vagas por título ou empresa e filtre por localidade (On-site, Remote, Hybrid).
- **Cadastro de nova vaga:** Formulário completo para cadastrar uma nova vaga, com validação de campos obrigatórios e sanitização contra XSS.
- **Context API:** Centralização do estado das vagas, facilitando o compartilhamento de dados e funções entre componentes.
- **Interface responsiva:** Layout adaptado para diferentes tamanhos de tela, com design limpo e moderno.

## Design e Layout

O design da interface foi planejado previamente no Figma, com a criação de wireframes para todas as principais telas do sistema. O objetivo foi garantir uma experiência de usuário clara, intuitiva e responsiva, alinhada à proposta do projeto.

- **Wireframes:** Serviram como guia visual para a implementação dos componentes e fluxos de navegação.
- **Decisões visuais:** Paleta de cores, tipografia e espaçamentos definidos para um visual moderno e agradável.
- **Ferramenta utilizada:** [Figma](https://figma.com/) para prototipação e documentação visual.

[Wireframe no Figma](https://www.figma.com/design/t2RBtA2UQ22fbk0LdJs7yZ/areajobs.co?node-id=0-1&t=5u3zaTBjghkNfweB-1)  

## Decisões Técnicas

- **Stack:** React + Vite, CSS Modules para estilização, Context API para gerenciamento de estado.
- **Componentização:** Separação em componentes reutilizáveis (Navbar, Footer, JobList, JobDetails, CreateJob).
- **Carregamento e persistência de dados:** As vagas são carregadas do arquivo `public/data/jobs.json` e novas vagas são registradas no contexto global (simulação de persistência).
- **Validação e segurança:** Todos os campos do formulário de vaga possuem validação obrigatória e sanitização de entradas para evitar XSS.
- **Responsividade:** Layout adaptado para desktop e mobile, com uso de CSS moderno.

## Estrutura do Projeto

```
├── public/
│   └── data/
│       └── jobs.json         # Base de dados das vagas
├── src/
│   ├── assets/               # Imagens e assets estáticos
│   ├── components/
│   │   ├── Footer/           # Rodapé
│   │   ├── Jobs/             # Componentes relacionados a vagas
│   │   │   ├── context/      # Contexto global das vagas
|           ├── modules/      # Módulos de estilo CSS
│   │   ├── Navbar/           # Barra de navegação
│   ├── App.jsx               # Componente raiz
│   └── main.jsx              # Ponto de entrada
├── index.html                # HTML principal
├── package.json              # Dependências e scripts
└── README.md                 # Este arquivo
```

## Validação e Segurança

- **Validação de campos obrigatórios:** O formulário de cadastro de vaga impede o envio de campos vazios.
- **Sanitização contra XSS:** Todas as entradas do usuário são sanitizadas antes de serem processadas ou exibidas.
- **Feedback imediato:** Alertas são exibidos ao usuário em caso de erro ou sucesso no cadastro.

## Como Executar

1. **Pré-requisitos:**
	- Node.js (18+ recomendado)
	- pnpm, npm ou yarn

2. **Instalação:**
	```bash
	pnpm install
	# ou
	npm install
	# ou
	yarn
	```

3. **Execução em modo desenvolvimento:**
	```bash
	pnpm dev
	# ou
	npm run dev
	# ou
	yarn dev
	```
	Acesse [http://localhost:5173](http://localhost:5173) no navegador.
	```

## Screenshots

![Página de Listagem de Vagas](https://i.postimg.cc/KvZY0LWD/snapshot-areajobs-listjobs.png)  
![Página de Cadastro de Vaga](https://i.postimg.cc/8zczSGNF/snapshot-areajobs-createjob.png)

## Considerações Finais

Este projeto foi desenvolvido priorizando clareza, organização e experiência do usuário. O código está estruturado para facilitar manutenção e evolução. Sugestões e melhorias são bem-vindas!

---

**Autor:** João Leite  
**Blog:** [Astral Thoughts](https://astralfracture.bearblog.dev/)

---
