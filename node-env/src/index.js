require('dotenv').config();
const moment = require('moment'); // require

const apiKey = process.env.GIFY_API_KEY;

console.log("Api Key Gify:", apiKey);

const hoy = moment( new Date() );

const utc = moment( new Date() ).utc();
console.log("hoy", hoy);
console.log("utc", utc);

console.log("diff", utc.diff(hoy));
