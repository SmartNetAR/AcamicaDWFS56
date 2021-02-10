const express = require('express')
require('dotenv').config();
const app = express();

app.use( express.json());


const Router = require('./Router');

const port = process.env.PORT || 3000;


Router( app );

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})







