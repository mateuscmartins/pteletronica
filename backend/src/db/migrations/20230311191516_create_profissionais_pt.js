/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('profissionais_pt', function(table){
        table.integer('id_pt').notNullable();
        table.string('id_usuario').notNullable();
        table.boolean('ciente_usuario').defaultTo(false);
        table.string('data_ciente');
        table.string('observacao_usuario');


        table.foreign('id_pt').references('id').inTable('permissoes_de_trabalho');
        table.foreign('id_usuario').references('matricula').inTable('usuarios');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('profissionais_pt');
};
