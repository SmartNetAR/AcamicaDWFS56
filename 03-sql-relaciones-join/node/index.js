const sequelize = require('./conexion.js');


async function findAllRows() {
    let sql = 'SELECT eventos.id, eventos.nombre as evento, inscriptos.nombre, inscriptos.email, '+
    'inscriptos.telefono FROM eventos inner join inscriptos '+
    'on inscriptos.evento_id = eventos.id '+
    'order by inscriptos.nombre asc '+
    'LIMIT 5';

    sequelize.query( sql, { type: sequelize.QueryTypes.SELECT })
        .then(function (eventos) {
            console.log(eventos);
        })
}

findAllRows();
