const User = require('../Models/UserModel');
const Validator = require('../validators/validator');
const md5 = require('md5');

module.exports = {
    async create(req, res) {
        const { email, password } = req.body;
        const validator = new Validator();
        validator.emptyValidate(email, 'Email não pode estar vázio.');
        validator.emptyValidate(password, 'Senha não pode estar vázia.');
        if (email) {
            validator.emailValidate(email, 'Email precisa ser válido');
        }
        if(validator.errors.length > 0) {
            return res.status(400).json({errors: validator.errors});
        }
        try {
            const isUnique = await User.query().findOne({email: email});
            if(isUnique) {
                return res.status(400).json({error: 'Email já cadastrado.'});
            }
            await User.query().insert({
                email,
                password: md5(password + process.env.SECRET_KEY)
            });

            return res.status(201).json({
                message: 'Usuário criado com sucesso.'
            });
            
        } catch (error) {
            return res.status(401).json({error});
        }
    }
}