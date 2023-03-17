//Importando o módulo de conexão com o banco de dados de desenvolvimento
const connection = require('../db/connection');

module.exports = {
    
    async index(request, response){
        
        //Buscando lista de usuarios no banco de dados
        const usuarios = await connection('usuarios').select('*');
    
        return response.json(usuarios);
            
    },

    async create(request, response) {

        //Buscando o perfil do usuario
        const perfilUsuario = request.headers.perfil;

        //Armazenando os dados enviados pela requisção POST
        const { matricula, nome, funcao, perfil, senha } = request.body;

        //Armazenando dados no banco de dados na tabela usuarios
        await connection('usuarios').insert({
            matricula,
            nome,
            funcao,
            perfil,
            senha
        })

        //Retornando a matricula do usuario para a aplicação
        return response.json({ matricula });
    },

    //Excluindo usuario do banco de dados
    async delete(request, response){
        
        //Recuperando a matricula enviada como parametro
        const { matricula } = request.params;
        console.log(matricula)
        await connection('usuarios').where('matricula', matricula).del();
        
        return response.status(204).send();
    
    },
}