const signToken = require('./functions');

function signTokenController(req, res, next) {
    try {
        const user = req.user;
        const signUser = signToken(user);

        res.json(signUser);
    } catch (error) {
        next(error);
    }
}

module.exports = signTokenController;