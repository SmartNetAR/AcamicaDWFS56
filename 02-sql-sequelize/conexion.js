const Sequelize = require('sequelize');
const path = 'mysql://root:secret@localhost:3306/resto';
const sequelize = new Sequelize(path, { operatorsAliases: false });

sequelize.authenticate().then(() => {
    console.log('Conectado.');
}).catch(err => {
    console.error('Error de conexion:', err);
}).finally(() => {
    sequelize.close();
});

module.exports = sequelize;