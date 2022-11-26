const boom = require("@hapi/boom");

function checkRole(roles){
    return (req, res, next) => {
        const role = req.user.role;

        if(roles.includes(role)){
            return next();
        }
        
        next(boom.unauthorized());
    }
}

module.exports = checkRole;