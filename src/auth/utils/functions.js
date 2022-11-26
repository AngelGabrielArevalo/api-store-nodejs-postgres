const jwt = require('jsonwebtoken');
const environment = require('../../configuration/environment');

function signToken(user) {
    const secret = environment.secretJwt;
    const payload = {
        sub: user.id,
        role: user.role
    };

    const token = jwt.sign(payload,secret);
    
    return {
        token, 
        user
    };
}

module.exports = signToken;