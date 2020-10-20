// Importacion necesaria de conexion de node con mongo
const mongoose = require('mongoose');

// Se declara un esquema, el cual es como una clase que define las caracteristicas que tendra el objeto cliente y sus atributos en BD
let Schema = mongoose.Schema;

// Se define el schema cliente en clienteSchema como un objeto con atributos
let clienteSchema = new Schema({

// Se enlistan todos sus atributos con sus respectivos tipados

  //ESTO ES LO QUE SE TIENE QUE MODIFICAR
    nombre: {
        type: String
    },
    apellido: {
        type: String
    },
    email: {
        type: String
    },
    cuenta: {
        type: String
    },
    tarjeta: {
        type: String
    },
    deuda: {
        type: String
    },
    saldo: {
        type: String
    },
    buro: {
        type: String
    },
    solicitudPrestamo: {
        type: String
    },
    prestamo: {
        type: String,
        default: '  '
    },
    password: {
        type: String
    },
    telefono: {
        type: String
    }
});


// Exportar el schema y conectarlo con mongo para crear la coleccion
module.exports = mongoose.model('Cliente', clienteSchema);