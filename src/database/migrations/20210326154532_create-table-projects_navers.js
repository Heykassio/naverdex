
exports.up = function (knex) {
    return knex.schema.createTable('projects_navers', table => {
        table.increments('id').primary();
        table.integer('project_id').unsigned().notNullable();
        table.integer('naver_id').unsigned().notNullable();
        table.integer('user_id').unsigned().notNullable();
        table.unique(['project_id', 'naver_id', 'user_id']);
        table.foreign(['project_id', 'user_id']).references(['id', 'user_id']).inTable('projects');
        table.foreign(['naver_id', 'user_id']).references(['id', 'user_id']).inTable('navers');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('projects_navers');
};
