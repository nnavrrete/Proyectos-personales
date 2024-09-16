const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { connectdb } = require('./db/db');

const productos = require('./routes/productos');


const app = express();
const port = process.env.PORT || 5000;

connectdb();

app.use(cors());
app.use(express.json());

app.use(productos);


app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});