const { Model } = require('objection');
const knex = require('../database');
const User = require('./UserModel');

Model.knex(knex);

class Naver extends Model {
    static get tableName() {
        return 'navers';
    }

    static get idColumn() {
        return ['user_id', 'id'];
    }

    static relationMappings = {
        user: {
            relation: Model.BelongsToOneRelation,
            modelClass: User,
            join: {
                from: 'navers.user_id',
                to: 'users.id'
            }
        },
        projects: {
            relation: Model.HasManyRelation,
            modelClass: __dirname + '/ProjectModel',
            join: {
                from: ['navers.id', 'navers.user_id'],
                through: {
                    from: 'projects_navers.naver_id',
                    to: 'projects_navers.project_id'
                },
                to: ['projects.id', 'projects.user_id']
            }
        }
    }

    static async getNaver(id) {
        return await this.query().withGraphFetched("projects").findById(id);
    }

}

module.exports = Naver;