//Importando o módulo de conexão com o banco de dados de desenvolvimento
const { response } = require('express');
const connection = require('../db/connection');


module.exports = {

    async create(request, response) {

        //Buscando o perfil do usuario
        const perfilUsuario = request.headers.perfil;

        //Armazenando os dados enviados pela requisção POST
        numeroOS = createServico(request.body);
        console.log(numeroOS);

        response.status(204).send()
    },

}

async function createServico(dados){

    const { 
        ordem_servico, 
        descricao, 
        disciplina, 
        incio, 
        termino_previsto,
        localidade,
        dia_util,
        tipo_mo,
        area_restrita 
    } = dados;

    await connection('servicos').insert({
        ordem_servico, 
        descricao, 
        disciplina, 
        incio, 
        termino_previsto,
        localidade,
        dia_util,
        tipo_mo,
        area_restrita
    });

    return ordem_servico;
}

async function createPT(ordemServico){

    const id_servico = ordemServico;

    await connection('permissoes_de_trabalho').insert({
        id_servico    
    });

    const idPT = await connection('permissoes_de_trabalho').select('id').max('id').first();

    return idPT;
}