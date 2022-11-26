const { Router } = require('express');
const passport = require('passport');
const PerfilController = require('../controllers/perfil.controller');

const perfilRouter = Router();
const perfilController = new PerfilController();

perfilRouter.get('/orders',
    passport.authenticate('jwt', {session: false}),
    (req, res, next) => perfilController.findOrders(req, res, next)
);

perfilRouter.post('/orders',
    passport.authenticate('jwt', {session: false}),
    (req, res, next) => perfilController.createOrder(req, res, next)
);

module.exports = perfilRouter;