const express = require('express');
const Usuario = require('../models/Usuario');
const app = express();
const router = express.Router();


router.get( "/", (req, res) => {
    res.json([]);
})

router.get("/:id", (req, res) => {
    res.json({ id: req.params.id, name: "producto"})
})

router.post("/", (req, res) => {
    const yo = {nombre: "Juan", apellido: "Perez", edad: 24};
    let nuevo_usuario = new Usuario(yo)
    nuevo_usuario.save();
    res.json(nuevo_usuario);
})

module.exports = router;