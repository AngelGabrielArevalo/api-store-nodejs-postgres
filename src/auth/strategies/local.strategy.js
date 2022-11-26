const { Strategy } = require('passport-local');
const UserService = require('../../services/user.service');
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');

const userService = new UserService();

const LocalStartegy = new Strategy({
    usernameField: 'email',
    passwordField: 'password'
  }, async (email, password, done) => {
    try {
        const user = await userService.findByEmail(email);
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            done(boom.unauthorized(), false);
        }
        
        delete user.dataValues.password;
        done(null, user);
    } catch (error) {
        done(error, false);
    }
});

module.exports = LocalStartegy;
