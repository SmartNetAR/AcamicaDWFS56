const diccionario = { arbol: "tree", casa: "house" }


function traducir(palabra) {

    let palabraTraducida;

    if (palabra == "arbol"){
        palabraTraducida = diccionario.arbol
    }

    if (palabra == "casa"){
        palabraTraducida = diccionario.casa
    }

    return palabraTraducida;
}


function traducir2(palabra) {

    if (palabra === undefined)
    {
        throw (new Error("El parámetro palabra debe ser un string"));
    }

    if (diccionario[palabra] === undefined)
    {
        throw (new Error("No se encuentra la palabra"));
    }

    let palabraTraducida = diccionario[palabra];

    return palabraTraducida;
}


try {
    console.log(traducir2("teclado"))
} catch (error) {
    alert(error.message)
}