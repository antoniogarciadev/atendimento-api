# Atendimentos API

**API** local criado com nodejs para consumir dados de um banco de dados.
<br/><br/>

## 💼 Principais  funcionalidades da API
A api possui as operções básicas de um __CRUD__ que são:
><br/>💾 Criar novos atendimentos<br/>
>📃 Mostrar os atendimentos<br/>
>📝 Atualizar os atendimentos<br/>
>🗑 Deletar os atendimentos<br/>
><br/>

<br/>

## 🔀 Rotas da API

A **AP** possui 4 rotas principais para poder funcionar. As rotas são as seguintes:

#### 1.  Buscar dados / READ
Rota principal usada para listar dados já resgistrados.<br/>
Método da rota: `GET`

```py
http://localhost:5000/atendimentos
```

#### 2.  Criar novo dado / CREATE
Rota usada para __criar__ novos registros de dados.<br/>
Método da rota: `POST`

```py
http://localhost:5000/atendimento
```

#### 3.  Atualizar um dado / UPDATE
Rota usada para __atualizar__ ou __alteral__ um dado registrado.<br/>
Método da rota: `PUT`

```py
http://localhost:5000/atendimento/:id
```

#### 4.  Deletar um dado / DELETE
Rota usada para __eliminar__ ou __deletar__ um dado registrado.<br/>
Método da rota: `DELETE`

```py
http://localhost:5000/atendimento/:id
```
<br/>

## 📖 Como executar a API

Para poder executar a API, é necessário seguir os seguintes passos:

#### 1.  Instalar as dependências 
>
> Dependecia | Comando
> --------- | ------- |
> expres | `npm install express`
> dotenv | `npm install dotenv --save`
> mysql2 | `npm install --save mysql2`

#### 2. Criar a base de dados

><br/>Executar o script da base de dados em um **`SGBD`** 
><br/>**(**_XAMPP/PHPMyAdmin, Workbench, etc._**)**
><br/>O script da base de dados esta guardado na pasta:
><br/>**`📁/src/assets/schema.sql📌`**
><br/><br/>

#### 3. Configurar as Variaveis de Ambiente

Criar o arquivo `📁/.env📌` na raiz do projeto, após criar, escrever as variáveis de ambiente de acordo com o teu `SGBD` ou servidor de base de dados local.
 
```js
.env 

Variaveis:

DB_HOST=localhost  // Nome do host
DB_USER=root       // Teu usuario da base de dados
DB_PASSWORD=       // Password da base de dados
DB_Name=loja       // Nome da base de dados
DB_PORT=3306       // Porta da base de dados
```

#### 4. Executar no terminal/bash

```js
npm run dev //executa no comando node --watch index.js
```

#### 5. Testar
Testar a API com as rotas acima mencionadas 👉 [ Rotas da API](https://github.com/antoniogarciadev/atendimento-api/master/README.md#rotas-da-api)
>A api pode ser testada em uma ferramenta de cliente REST como `INSOMNIA`, `POSTMAN`, etc.

<br/>

## 🥇🎯Créditos

Copyright (C) 2026 by António Ch. Garcia - N3h0<br/>
Meu GitHub [`antoniogarciadev`](https://github.com/antoniogarciadev/) - <https://github.com/antoniogarciadev/>

