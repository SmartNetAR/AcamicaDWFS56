const sequelize = require('./conexion.js');

async function deleteProduct() {
    sequelize.query('DELETE FROM restaurant WHERE id = ?',
        { replacements: [3] }
    ).then(function (result) {
        console.log(result)
    })
}

deleteProduct();
