// Importacion necesaria de conexion de node con mongo
const mongoose = require('mongoose');

// Se declara un esquema, el cual es como una clase que define las caracteristicas que tendra el objeto cliente y sus atributos en BD
let Schema = mongoose.Schema;

// Se define el schema cliente en clienteSchema como un objeto con atributos
let clienteSchema = new Schema({

// Se enlistan todos sus atributos con sus respectivos tipados

    idCliente: {
        type: String
    },
    nombre: {
        type: String
    },
    apellidoPaterno: {
        type: String
    },
    apellidoMaterno: {
        type: String
    },
    fechaNacimiento: {
        type: String
    },
    sexo: {
        type: String
    },
    segmento: {
        type: String
    },
    nacionalidad: {
        type: String
    },
    rfc: {
        type: String
    },
    tipoID: {
        type: String
    },
    numeroID: {
        type: String
    },
    cuenta: {
        type: String
    },
    email: {
        type: String
    }
});


// Exportar el schema y conectarlo con mongo para crear la coleccion
module.exports = mongoose.model('Cliente', clienteSchema);