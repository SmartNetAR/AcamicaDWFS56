const mongoose = require("mongoose");

schema = {nombre: String, apellido: String, edad: Number};

exports.Usuario = mongoose.model("Usuario", schema);
