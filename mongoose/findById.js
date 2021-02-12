const mongoose = require('./conexion.js');

const pelicula = mongoose.model('peliculas', {
    titulo: String,
    director: String,
    genero: String,
    ano: Date
});


pelicula.findOne({ titulo: "Hause" }).then(function (resultado) {
    console.log("La película encontrada es:")

    console.log(resultado)

});