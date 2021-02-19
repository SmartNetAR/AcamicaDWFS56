const express = require('express');
const app = express();
const router = express.Router();

const jwt = require('jsonwebtoken');
const firma = process.env.JWT_SIGN;

router.get( "/register", (req, res) => {
    res.send('register')
})

router.post("/login", (req, res) => {

    const { email, password } = req.body;


    if ( password !== 'secret') {
        return res.status(403).json({ msg: "usuario o password incorrectos."})
    }

    const user = {
        id: 12,
        email: email,
        name: "Edu",
        role: "admin"
    }

    const token = jwt.sign( user , firma);

    res.status(201).json({ user, token });
})

router.get( "/logout", (req, res) => {
    res.send('bye bye')
})

router.get("/me", (req, res) => {

    const { authorization } = req.headers;

    const token = authorization.split(" ")[1];

    jwt.verify(token, firma, function(err, decoded) {

        if ( err ) {
            return res.status(403).json({msg: "token inválido"})
        }
        res.json(
            {
                msg: "acceso correcto",
                user: decoded
            })

    });
})
module.exports = router;