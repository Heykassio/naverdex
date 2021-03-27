const jwt = require('jsonwebtoken');

module.exports = {
    authentication(req, res, next) {
        const token = req.headers['token'];
        if(!token) {
            return res.status(401).json({
                message: 'Faça Login para acessar.'
            });
        }
        jwt.verify(token, process.env.SECRET_KEY, (error, decoded)=>{
            if(error) return res.status(401).json({message: 'Token inválido.'});
            next();
        });
    }
}