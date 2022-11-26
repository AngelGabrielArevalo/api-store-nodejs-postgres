const {Strategy, ExtractJwt} = require('passport-jwt');
const environment = require('../../configuration/environment');

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: environment.secretJwt
};

const JwtStrategy = new Strategy(options, (payload, done) => {
    return done(null, payload);
});

module.exports = JwtStrategy;