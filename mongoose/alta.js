const mongoose = require('./conexion.js');

const Pelicula = mongoose.model('peliculas', {
    titulo: String,
    director: String,
    genero: String,
    ano: Date
} );


let nuevaPelicula = {
    titulo: 'Titanic', director: "Steven Spielberg",genero:"Documental",ano:"2000" 
}


const rsPelicula = new Pelicula(nuevaPelicula);


rsPelicula.save();    
