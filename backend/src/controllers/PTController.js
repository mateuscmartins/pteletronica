//Importando o módulo de conexão com o banco de dados de desenvolvimento
const { response } = require('express');
const connection = require('../db/connection');


module.exports = {

    async create(request, response) {

        //Buscando o perfil do usuario
        const perfilUsuario = request.headers.perfil;

        const { 
            ordem_servico, 
            descricao, 
            disciplina, 
            incio, 
            termino_previsto,
            localidade,
            dia_util,
            tipo_mo,
            area_restrita,
            profissionais_pt,
            riscos,
            perigos,
            epi,
            medidas_preventivas

        } = request.body;
    
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

    
        await connection('permissoes_de_trabalho').insert({
            "id_servico": ordem_servico    
        });

        const idPT = await connection('permissoes_de_trabalho').select('id').max('id').first();

        let listaProfissionaisPT = [];

        for(var i in profissionais_pt){
            listaProfissionaisPT.push({
                id_pt: idPT.id,
                id_usuario: profissionais_pt[i]
            })
        };

        await connection('profissionais_pt').insert(listaProfissionaisPT);

        await connection('riscos').insert(riscos);

        await connection('perigos').insert(perigos);

        await connection('epi').insert(epi);

        await connection('medidas_preventivas').insert(medidas_preventivas);
           
        response.status(204).send()
    },

}