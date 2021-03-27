const { Model } = require('objection');
const knex = require('../database');
const Naver = require('./NaverModel');
Model.knex(knex);

class User extends Model {
    static get tableName() {
        return 'users';
    }

    static relationMappings = {
        navers: {
            relation: Model.HasManyRelation,
            modelClass: Naver,
            join: {
                from: 'users.id',
                to: 'navers.user_id'
            }
        },

        projects: {
            relation: Model.HasManyRelation,
            modelClass: Project,
            join: {
                from: 'users.id',
                to: 'projects.user_id'
            }
        }
    }

}

module.exports = User;