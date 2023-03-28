//Importando o módulo de conexão com o banco de dados de desenvolvimento
const connection = require('../db/connection');

module.exports = {
    //Recebendo os dados de login do usuário
    async create(request, response){ 
        const { matricula, senha } = request.body;

        const usuario = await connection('usuarios')
            .where(
            {
                matricula: matricula,
                senha: senha
            
            })
            .select('nome', 'perfil')
            .first();   
        
        //Verificando se o usuário existe e retornando status 400 caso não exista
        if(!usuario){
            return response.status(400).json({ error: "Usuário não encontrado" });
        }

        return response.json(usuario);
    }

}