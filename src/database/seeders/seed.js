const sequelize = require('../../lib/sequelize');
const fs = require('fs');
const boom = require('@hapi/boom');

const cargarBase = async (req, res, next) => {
    try {
        const query = await fs.promises.readFile(process.cwd() + '/sql/init.sql', 'utf8');
        await sequelize.query(query);
        res.json({
            message: 'BASE CARGADA',
        });
    } catch (err) {
        if(err.name === 'SequelizeUniqueConstraintError') {
                next(boom.conflict('LA BASE YA FUE CARGADA PREVIAMENTE'));
        }else {
                next(err);
        }
    }
};

module.exports = cargarBase;
