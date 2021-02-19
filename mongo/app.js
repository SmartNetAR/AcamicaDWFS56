const express = require('express')
require('dotenv').config();
const app = express();
const conn = require("./db/mongo");

app.use( express.json());

conn.then((mongo)=> {

  console.log("connected")
})

const Router = require('./Router');

const port = process.env.PORT || 3000;


Router( app );

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})







