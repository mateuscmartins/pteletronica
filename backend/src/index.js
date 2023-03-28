//Importanto o pacote do express
const express = require('express');
const app = express();

//Importanto o módulo de rotas
const routes = require('./routes');

//Utilizando o parser de JSON do express
app.use(express.json());

//Utilizando o módulo de rotas
app.use(routes);


//Definindo a porta HTTP da aplicação
app.listen(3333);
