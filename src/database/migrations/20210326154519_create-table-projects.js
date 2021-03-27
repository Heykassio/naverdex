
exports.up = function(knex) {
    return knex.schema.createTable('projects', table=>{
        table.integer('id').notNullable();
        table.integer('user_id').unsigned().notNullable();
        table.string('name').notNullable();
        table.primary(['id', 'user_id']);
        table.unique(['id', 'user_id']);
        table.foreign('user_id').references('id').inTable('users');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('projects');
  };
  