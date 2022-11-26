const { Router } = require('express');
const passport = require('passport');
const signTokenController = require('../auth/utils/controllers');

const authRouter = Router();

authRouter.get(
    '/login',
    passport.authenticate('local', {session: false}),
    signTokenController
);

module.exports = authRouter;
