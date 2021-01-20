function saludar(nombre) {
    console.log("Hola " + nombre);
}

function despedirse(nombre) {
   console.log("Chau " + nombre); 
}


// module.exports = saludar; 

module.exports = {
    saludar: saludar,
    despedirse: despedirse
}