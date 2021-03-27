const { Model } = require('objection');
const knex = require('../database');
const Naver = require('./NaversModel');
const Project = require('./ProjectsModel');
Model.knex(knex);

class ProjectNaver extends Model {
    static tableName() {
        return 'projects_navers'
    }

    static relationMappings = {
        navers: {
            relation: Model.HasOneRelation,
            modelClass: Naver,
            join:{
                from: ['projects_navers.naver_id', 'projects_navers.user_id'],
                to: ['navers.id', 'navers.user_id']
            }
        },
        projects: {
            relation: Model.HasOneRelation,
            modelClass: Project,
            join: {
                from: ['projects_navers.project_id', 'projects_navers.user_id'],
                to: ['projects.id', 'projects.user_id']
            }
        }
    }
};

module.exports = ProjectNaver;