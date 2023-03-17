/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('permissoes_de_trabalho', function(table){
        table.increments('id').primary();
        table.string('status').defaultTo('Em andamento');
        table.string('id_servico').notNullable();

        table.foreign('id_servico').references('ordem_servico').inTable('servicos');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('permissoes_de_trabalho');
};
