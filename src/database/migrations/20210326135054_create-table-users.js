
exports.up = function(knex) {
    return knex.schema.createTable('users', table=>{
        table.increments('id').primary();
        table.string('email').notNullable();
        table.string('password').notNullable();
        table.integer('cont_naver').notNullable().defaultTo(0);
        table.integer('cont_project').notNullable().defaultTo(0);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('users');
  };
  