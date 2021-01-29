const express = require("express");
const morgan = require("morgan");


const server = express();


server.use(morgan("dev"));
server.use(express.json());
const port = 5000;


const helados = [
    {
        id: 1,
        sabor: "vainilla"
    },
    {
        id: 3,
        sabor: "frutilla"
    },
    {
        id: 5,
        sabor: "chocolate"
    }
];

/* const midLog = (req, res, next) =>{
    console.log(req.method, req.url, req.path);
    next();
}

server.use(midLog) */;

function validarId(req, res, next) {

    const id = req.params.id;

    const helado = helados.find( h => h.id === parseInt(id) );

    if (! helado )
    {
        res.status(404).json({ msg: `No se encuentra el recurso ${id}` });       
    }

    next();
}

server.get("/helados/:id", validarId, (req, res) =>{

    const id = req.params.id;

    const helado = helados.find( h => h.id === parseInt(id) );

    res.status(200).json( helado )
})

server.get("/helados", (req, res) => {

    res.status(200).json(helados);

});

const saborRequerido = (req, res, next) => {
    if (!req.body.sabor) {
        return res.status(422).json({ msg: "El sabor es requerido" })
    }
    next();
}

server.post("/helados", saborRequerido, (req, res) => {

    helados.push(req.body)
    res.status(201).end();
});

server.use("*", (req, res) => {

    console.log(`No se encuentra la ruta ${req.method} ${req.url}.`)
    res.status(404).json(
        {
            error: true,
            msg: `No se encuentra la ruta.`
        }
    )
});



server.listen(port, () => { console.log("Servidor escuchando en el puerto " + port + "...") });