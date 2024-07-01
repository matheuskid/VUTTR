# 🔨Very Usefull Tools To Remember API

## 🎯Sobre

### API feita em Node.js utilizando Express e integração com PostgresSQL

## 📌Sumário

* [Sobre](#sobre)
* [Endpoints](#endpoints)
* [Tecnologias](#️tecnologias)
* [Instalação e Configuração](#-instalação-e-configuração)

## 📭Endpoints

✔️ Buscar todas as ferramentas (GET)[vuttr/tools]<br>
✔️ Buscar ferramentas por tag (GET)[vuttr/tools?tag=tagex]<br>
✔️ Inserir ferramenta (POST)[vuttr/tools]<br>
✔️ Remover ferramenta (DELETE)[vuttr/tools/:id]


## 🛠️Tecnologias

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

## 🧰 Instalação e configuração

✔️ É necessário instalar o Node.js(20.11) e Postgres(16.4).

➡️ A instalação é padrão

✔️ Após instalar o Postgres, abra o terminal(CMD) e digite os comandos:

    psql -U postgres -h localhost

❗ Se o comando psql não for reconhecido, siga esse [tutorial](https://stackoverflow.com/a/68851621)

➡️ Digite a senha definida na instalação;

✔️ Se "postgres=#" estiver aparencendo na linha de comando, rode os próximos comandos:

    CREATE ROLE username WITH LOGIN PASSWORD 'password';
    ALTER ROLE username CREATEDB;

❕ Você pode substituir "username" por qualquer coisa

➡️ Depois rode `\q` para desconectar

✔️ Após se desconectar:

    psql -d postgres -U username

✔️ Digite a senha "password". Ser der certo, aparecerá `postgres=>` na linha de comando.

    CREATE DATABASE vuttr;
    \c vuttr

✔️ Estando conectado no banco, rode:

    CREATE TABLE tools (id SERIAL PRIMARY KEY, title VARCHAR(30), link VARCHAR(80), description VARCHAR(150), tags VARCHAR(20)[]);

    INSERT INTO tools (title, link, description, tags) VALUES ('Notion', 'https://notion.so', 'All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized.', '{"organization", "planning", "collaboration", "writing", "calendar"}');

    INSERT INTO tools (title, link, description, tags) VALUES ('json-server', 'https://github.com/typicode/json-server', 'Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.', '{"api", "json", "schema", "node", "github", "rest"}');
    
    INSERT INTO tools (title, link, description, tags) VALUES ('fastify', 'https://www.fastify.io/', 'Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.', '{"web", "framework", "node", "http2", "https", "localhost"}');

✔️ Pronto, o banco está configurado.

✔️ Clone o projeto, depois abra o terminal na pasta raiz do projeto e rode:

    npm install

✔️ Finalmente para iniciar a aplicação, rode:

    npm start

## 📄 Documentação

✔️ A documentação da API está disponível em [Swagger](localhost:3000/doc)