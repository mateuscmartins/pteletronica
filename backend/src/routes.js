//Importanto o pacote do express
const express = require('express');

//Importando os Controllers
const SessaoController = require('./controllers/SessaoController');
const UsuariosController = require('./controllers/UsuariosController');
const PTController = require('./controllers/PTController');

//Instanciando o módulo de rotas do express
const routes = express.Router();


//Rota de Login
routes.post('/sessao', SessaoController.create);

//Rota para cadastro de um novo usuário no banco de dados
routes.post('/suarios', UsuariosController.create);
//Rota para retornar todos os usuários
routes.get('/usuarios', UsuariosController.index);
//Rota para excluit usuário do banco de dados
routes.delete('/usuarios/:matricula', UsuariosController.delete)

routes.post('/permissao_trabalho', PTController.create);


//Exportando o modulo de rotas para ser utilizado por outros módulos
module.exports = routes;