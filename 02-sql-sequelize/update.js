const sequelize = require('./conexion.js');

function editProduct() {
    sequelize.query('UPDATE restaurant SET nombre = "empanada", precio = 18 WHERE id = ?',
        { replacements: [5]}
    ).then(function (result) {
        console.log(result)
    })
}

editProduct();