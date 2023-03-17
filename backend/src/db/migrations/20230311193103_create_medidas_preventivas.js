/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('medidas_preventivas', function(table){
        table.string('id_servico').notNullable();
        table.string('medidas_preventivas').notNullable();

        table.foreign('id_servico').references('ordem_servico').inTable('servicos');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('medidas_preventivas')
};
