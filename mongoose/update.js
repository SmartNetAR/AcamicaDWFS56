const mongoose = require('./conexion.js');

//Creamos el modelo

const pelicula = mongoose.model('peliculas', {
    titulo: String,
    director: String,
    genero: String,
    ano: Date
});

//Actualizamos los datos 
pelicula.findOne({_id:'5efa54e6beaaeb0474d496ef'}).then(function(resultado){
    resultado.titulo = 'Pesadilla en la calle del infierno';
    resultado.director = 'Wes Craven';
    resultado.genero = 'Terror';
    resultado.ano = '1984';
    resultado.save();
    console.log(resultado);
});