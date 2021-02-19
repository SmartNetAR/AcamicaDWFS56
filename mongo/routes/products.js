const express = require('express');
const app = express();
const router = express.Router();

// list of products
router.get( "/", (req, res) => {
    res.json([]);
})

// get product by id
router.get("/:id", (req, res) => {
    res.json({ id: req.params.id, name: "producto"})
})

module.exports = router;