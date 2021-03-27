
exports.up = function(knex) {
    return knex.schema.createTable('navers', table=>{
        table.integer('id');
        table.integer('user_id').unsigned().notNullable();
        table.string('name').notNullable();
        table.date('birthdate').notNullable();
        table.date('admission_date').notNullable();
        table.string('job_role').notNullable();
        table.primary(['id', 'user_id']);
        table.unique(['id', 'user_id']);
        table.foreign('user_id').references('id').inTable('users');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('navers');
  };
  