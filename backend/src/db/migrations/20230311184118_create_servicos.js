/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('servicos', function(table){
        table.string('ordem_servico').primary();
        table.string('descricao').notNullable();
        table.string('disciplina').notNullable();
        table.string('incio').notNullable();
        table.string('termino_previsto').notNullable();
        table.string('termino_real');
        table.string('localidade').notNullable();
        table.boolean('dia_util').notNullable();
        table.string('tipo_mo').notNullable();
        table.boolean('area_restrita').notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('servicos');
};
