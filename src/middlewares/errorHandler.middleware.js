const { StatusCodes } = require('http-status-codes');
const { ValidationError } = require('sequelize');

// eslint-disable-next-line no-unused-vars
function errorHandler(error, req, res, next) {
    console.error(error);
    
    if (error.isBoom) {
        const { output } = error;
        return res.status(output.statusCode).json(output.payload);
    }

    if (error instanceof ValidationError) {
        return res.status(StatusCodes.CONFLICT).json({
            statusCode: StatusCodes.CONFLICT,
            message: error.name,
            errors: error.errors,
        });
    }

    if(error.parent.code === '23503') {
        return res.status(StatusCodes.BAD_REQUEST).json({
            statusCode: StatusCodes.BAD_REQUEST,
            message: error.parent.detail,
            error: error.name,
        });
    }

    res.status(500).json({
        message: error.message,
        stack: error.stack,
    });
}

module.exports = { errorHandler };
