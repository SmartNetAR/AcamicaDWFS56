const sequelize = require('./conexion.js');

async function editRow() {
    sequelize.query('UPDATE inscriptos SET email = "leonardo@smartnet.com.ar" WHERE id = ?',
        { replacements: [3]}
    ).then(function (result) {
        console.log(result)
    })
}

editRow();
