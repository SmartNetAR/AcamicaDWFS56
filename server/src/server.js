const express = require("express");
const morgan = require("morgan");


const server = express();


server.use(morgan("dev"));
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

/* const midLog = (req, res, next) =>{
    console.log(req.method, req.url, req.path);
    next();
}

server.use(midLog) */;


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