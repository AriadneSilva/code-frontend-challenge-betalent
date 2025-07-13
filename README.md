# BeMobile - Frontend Challenge

Desafio técnico desenvolvido por **Ariadne Silva** para o processo seletivo da vaga de Desenvolvedora Frontend Sênior - BeTalent.


## 📸 Layout Responsivo

| 💻 Desktop | 📱 Mobile |
|-----------|-----------|
| Tabela com colunas e cabeçalho | Cards com miniatura, nome, cargo e telefone |
| Campo de busca em destaque | Elementos ajustados para o mobile-first |

---

## 🚀 Funcionalidades

- 🔎 Pesquisa por **nome, cargo** e **telefone**
- 📅 Formatação de datas e telefones no front-end
- 🧱 Layout responsivo com `styled-components`
- 📁 Arquitetura baseada em componentes
- ✅ Testes automatizados com `Jest` e `Testing Library`

---

## 🛠️ Tecnologias Utilizadas

![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white&style=for-the-badge)
![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white&style=for-the-badge)
![Styled Components](https://img.shields.io/badge/-Styled--Components-db7093?logo=styled-components&logoColor=white&style=for-the-badge)
![Jest](https://img.shields.io/badge/-Jest-C21325?logo=jest&logoColor=white&style=for-the-badge)

---

## Mock de dados 
    - Este projeto usa os dados simulados do repositório fornecido pela BeMobile: https://github.com/BeMobile/teste-pratico-frontend, e a utilização segue descrita nos próximos passos


## 🚀 Como rodar

```bash
# Clone o repositório  do mock de dados em uma pasta separada (ex: mock-api)
git clone https://github.com/BeMobile/teste-pratico-frontend mock-api
cd mock-api

# Caso não tenha o json-server instalado, utilize o comando:
npm install json-server

# Depois de instalado, inicie o json-server
npx json-server db.json


```bash
# Clone o repositório  do projeto, no mesmo nível de pasta do mock acima
git clone https://github.com/AriadneSilva/code-frontend-challenge-betalent

# Instale as dependências
yarn


# Inicie o projeto
yarn start
```

O app será iniciado em http://localhost:3001/ e consumirá dados da API fake em http://localhost:3000/employees.

## 🧪 Rodando os testes

Os testes cobrem renderização dos principais componentes (List, Header, Thumbnail, DataTableBase), além de validar estrutura e dados.

```bash
yarn test
```
