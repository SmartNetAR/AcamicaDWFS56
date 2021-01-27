const express = require("express");
const server = express();
server.use(express.json());
const port = 5000;

const helados = [
    {
        sabor: "vainilla"
    },
    {
        sabor: "frutilla"
    },
    {
        sabor: "chocolate"
    }
];


server.get( "/helados", ( req, res ) => {

    res.status(200).json( helados );

} ); 

server.post( "/helados", ( req, res ) => {
    helados.push(req.body)
   res.status(201).end();
} );

server.use( "*", ( req, res ) => {

    console.log(`No se encuentra la ruta ${req.method} ${req.url}.`)
    res.status(404).json(
        {
            error: true,
            msg:  `No se encuentra la ruta.`
        }
    )
} );



server.listen(port, ()=>{ console.log("Servidor escuchando en el puerto "+port+"...")} );