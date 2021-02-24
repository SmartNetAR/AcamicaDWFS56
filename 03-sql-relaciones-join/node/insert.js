const sequelize = require('./conexion.js');

async function findAllRows() {

    let array_insert = ['La fiesta de pololin', '2020-12-01', '2020-07-22 00:00:00', '2020-07-22 00:00:00'];
    
    sequelize.query('INSERT INTO `eventos` (`nombre`, `fecha`, `create_at`, `update_at`) VALUES(?, ?, ?, ? )',
        { replacements: array_insert, type: sequelize.QueryTypes.SELECT }
    ).then(function (projects) {
        console.log(projects)
    })
}

findAllRows();
