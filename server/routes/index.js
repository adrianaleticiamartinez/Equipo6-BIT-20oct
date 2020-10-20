// Se importa el servidor express
const express = require('express');
// Se inicializa el servidor express
const app = express();

// Importacion del archivo de las ruta de cliente
app.use(require('./cliente'));
// Importacion del archivo de las ruta de login
app.use(require('./login'));



// Exportacion de la configuracion
module.exports = app;