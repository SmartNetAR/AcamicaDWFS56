// //Hola Mundo 
// console.log("Hola Mundo");

const {despedirse} = require("./modulos/user/saludar");

// //Creamos un array de frutas
// const Lang = ['Pera', 'Banana', 'Limones'];

// //muestro las frutas
// console.log(Lang)

// //verificamos cuantos items tiene el array 
// const cant = Lang.length
// console.log(cant)


// //Buscamos la fruta que esta antes de Banana
// const found = Lang.find(element => element > 'Banana');
// console.log(found)


const alumnos = [
    {
        name: "maria",
        edad: 13
    },
    {
        name: "paola",
        edad: 18
    },
    {
        name: "martin",
        edad: 46
    },
    {
        name: "juan",
        edad: 22
    }
];

const mayorEdad = alumnos.find( (alumno) => alumno.edad >= 18 );

console.log(mayorEdad);

// funcionesSaludo.saludar(mayorEdad.name);
// funcionesSaludo.despedirse(mayorEdad.name);

despedirse(mayorEdad.name);