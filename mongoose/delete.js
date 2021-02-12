const mongoose = require('./conexion.js');

const pelicula = mongoose.model('peliculas', {
    titulo: String,
    director: String,
    genero: String,
    ano: Date
});


//Elimino  los datos del id 5efa54e6beaaeb0474d496ef
pelicula.deleteOne({ _id: '6025c30debb223631165f9cb' }).then(function (error,resp) {
    console.log(resp);
});