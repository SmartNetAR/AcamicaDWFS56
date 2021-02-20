const sequelize = require('./conexion.js');


async function findBy() {

    sequelize.query('SELECT * FROM restaurant WHERE nombre LIKE ?',
        { replacements: ['pastel%'], type: sequelize.QueryTypes.SELECT }
    ).then(function (rows) {
        rows.forEach( row =>
            console.log("Producto: ", row.nombre, ", precio:", row.precio)
    )
    })
}

findBy();