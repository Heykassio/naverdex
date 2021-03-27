const jwt = require('jsonwebtoken');

module.exports = {
    async generate(data) {
        return jwt.sign(data, process.env.SECRET_KEY, {expiresIn: '24h'});
    },

    async decode(token) {
        const data = await jwt.verify(token, process.env.SECRET_KEY);
        return data;
    }
}