
// Importacion de mongoose para conectar mongo con node
const mongoose = require('mongoose');

//Importacion color para ver a colores la respuesta en la consola
require('colors');

// Funcion para iniciar conexion en base de datos
const dbConecction = async () =>{

   // Intenta hacer la conexion a base de datos
    try {
        await mongoose.connect(process.env.URLDB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        // Se muestra en consola conexion exitosa
        console.log('DB ONLINE'.green);

      // Si ocurre un error se muestra en consola  
    } catch (error) {
        console.log(error);
        throw new Error('Error al iniciar la Base de Datos');
    }



}

// Exportar la conexión a base de datos
module.exports = dbConecction;