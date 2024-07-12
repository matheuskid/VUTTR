# 🔨Very Usefull Tools To Remember API

## 🎯Sobre

### API feita em Node.js utilizando Express e integração com PostgresSQL

## 📌Sumário

* [Sobre](#sobre)
* [Endpoints](#endpoints)
* [Tecnologias](#️tecnologias)
* [Instalação e Configuração](#-instalação-e-configuração)
* [Documentação](#documentação)

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

🎯 Necessário ter o Docker instalado.

✔️ Clone o projeto, depois abra o terminal na pasta raiz do projeto e rode:

    docker run --network my-network --name postgresDB -e POSTGRES_PASSWORD=postgres -v pgdata:/var/lib/postgresql/data -p 5433:5432 -d postgres:16.3

➡️ Baixa a imagem do postgres, cria o volume "pgdata" para armazenar os dados localmente e executa o container na porta 5433;

❗ Se a porta 5433 já estiver sendo usada você pode trocar para outra.

✔️ Após o container subir, execute:

    type backup.sql | docker exec -i postgresDB psql -U postgres

➡️ Restaura o backup do servidor;

✔️ Na sequência, execute:

    docker build -t vuttr-1 .

➡️ Cria a imagem da aplicação node por meio do dockerfile;

✔️ Por fim, execute:

    docker run --network my-network --name vuttr -d -p 3000:3000 vuttr-1

➡️ Sobe o container da aplicação;

📌 Com isso a aplicação já esta funcional com os dois containers criados e executando.

✔️ Para executar os containers futuramente, use:

➡️ No powershell;

    docker start postgresDB; docker start vuttr

➡️ No CMD;

    docker start postgresDB && docker start vuttr

## 📄 Documentação

✔️ A documentação da API está disponível em [Swagger](http://localhost:3000/doc/)
