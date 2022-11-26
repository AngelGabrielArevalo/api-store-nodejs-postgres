const passport = require('passport');
const JwtStrategy = require('./strategies/jwt.strategy');
const LocalStartegy = require('./strategies/local.strategy');


passport.use(LocalStartegy);
passport.use(JwtStrategy);