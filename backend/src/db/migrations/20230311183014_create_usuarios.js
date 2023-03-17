/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('usuarios', function(table){
        table.string('matricula').primary();
        table.string('nome').notNullable();
        table.string('funcao').notNullable();
        table.string('perfil').notNullable();
        table.string('senha').notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('usuarios');
};
