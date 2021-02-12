const mongoose = require('./conexion.js');

const pelicula = mongoose.model('peliculas', {
    titulo: String,
    director: String,
    genero: String,
    ano: Date
});


pelicula.find().then(function (resultado) {

    console.log(resultado);
});