const sequelize = require('./conexion.js');

async function addProduct() {

    const result = await sequelize.query( "INSERT INTO`restaurant`(`nombre`, `precio`) VALUES( ?, ?)",
        {
            replacements: ['pastel', 45],
            type: sequelize.QueryTypes.INSERT
        }
    );
    console.log(result);
}

addProduct();
