const { Model } = require('objection');
const knex = require('../database');
Model.knex(knex);

class Project extends Model {
    static get tableName() {
        return 'projects';
    }

    static get idColumn() {
        return ['user_id', 'id'];
    }

    static relationMappings = {
        user: {
            relation: Model.BelongsToOneRelation,
            modelClass: User,
            join: {
                from: 'projects.user_id',
                to: 'users.id'
            }
        },
        
        navers: {
            relation: Model.ManyToManyRelation,
            modelClass: __dirname + '/NaversModel',
            join: {
                from: ['projects.id', 'projects.user_id'],
                through: {
                    from: ['projects_navers.project_id', 'projects_navers.project_user_id'],
                    to: ['projects_navers.naver_id', 'projects_navers.naver_user_id']
                },
                to: ['navers.id', 'navers.user_id']
            }
        }
    }

    static async getProject(id) {
        return await this.query().withGraphFetched("navers").findById(id);
    }
}

module.exports = Project;