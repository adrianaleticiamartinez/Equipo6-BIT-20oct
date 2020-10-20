// Importacion necesaria de conexion de node con mongo
const mongoose = require('mongoose');

// Se declara un esquema, el cual es como una clase que define las caracteristicas que tendra el objeto usuario y sus atributos en BD
let Schema = mongoose.Schema;

// Se define el schema usuario en usuarioSchema como un objeto tipo Schema con atributos
let usuarioSchema = new Schema({

    // Se enlistan todos sus atributos con sus respectivos tipados 

    //ESTO ES LO QUE SE TIENE QUE MODIFICAR
    usuario: {
        type: String
    },
    auth: {
        type: String
    },
    nombreCompleto: {
        type: String
    },
    area: {
        type: String
    },
    ubicacion: {
        type: String
    },
    segmento: {
        type: String
    },
    perfil: {
        type: String
    }
});


 // Exportar el schema y conectarlo con mongo para crear la coleccion
module.exports = mongoose.model('Usuario', usuarioSchema);