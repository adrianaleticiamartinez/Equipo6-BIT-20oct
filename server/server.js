// Importacion del servidor express
const express = require('express');
//Importacion del archivo de conexion a base de datos
const {dbConnection} = require('./database/config');
const path = require('path');
//Inicializacion de express
const app = express();

// Importacion del archivo que contiene las variables de entorno
require('./config/config');

// Importacion del body parser para obtener body de peticiones http
const bodyParser = require('body-parser');
const dbConecction = require('./database/config');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

//Habilitar la carpeta publica para interfaz grafica
app.use(express.static(path.resolve(__dirname, '../public')));

// Conexion a base de datos
dbConecction();

// Configuracion Global De Las Rutas
app.use(require('./routes/index'));


// Respuesta en consola de la inicializacion del servidor
app.listen(process.env.PORT, () =>{
    console.log(`Escuchando desde el puerto ${process.env.PORT}`);
})
