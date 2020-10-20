// Configuracion de Express
const express = require('express');
const app = express();

// Importacion de Modelo de Clientes
const Clientes = require('../models/cliente');

// Importacion de token para verificar Role
const {verificaToken} = require('../middlewares/auth');

// Importación de Funciones para El usuario Validador
const { obtenerCamposVacios } = require('../../funciones/camposVacios');
const { obtenerCamposRestringidos } = require('../../funciones/camposRestringidos');




// Obtener Clientes por ID
app.get('/clientes/:idCliente',[],(req, res) =>{

    // De los parametros de la busqueda /:idCliente recuperamos la información y lo guardamos en la variable
    let id = req.params.idCliente;

    res.json({
        id
    });

})

// Obtener Clientes por ID
app.get('/clientes/:idCliente', [verificaToken],(req, res) =>{

    // De los parametros de la busqueda /:idCliente recuperamos la información y lo guardamos en la variable
    let id = req.params.idCliente;


    // Si su Perfil es VALIDADOR Obtiene estos datos
    if(req.usuario.perfil === 'Validador'){

        // Metodo .find para buscar en base de datos de clientes
        Clientes.find({cuenta: idCliente})

            // metodo .exec para obtener error y arreglo de clientes según la consulta
           .exec( (err, clientes) => {
               
            // Si se encuentra un error responde en formato json con la info del error
            if(err){
                return res.status(400).json({
                    err
                })
            }

            // La respuesta a la busqueda en base de datos retorna un objeto con los clientes que cumplan la condicion
            // En ese caso si el tamaño del arreglo es igual a cero se responde en formato json las no concidencias
            if(clientes.length <= 0){
                 return res.status(400).json({
                    msg: 'No se han encontrado usuarios con ese ID'
                })
            }
              
            
             // Ocultar Información sensible
             const clienteRestringido = obtenerCamposRestringidos(clientes[0]);

             //Obtener Campos Vacios
             const campos = obtenerCamposVacios(clientes[0]);

              // Si todo sale bien se responde con la info del usuario que hace la solicitud y la información del cliente encontrado
             res.json({
                 usuario: req.usuario,
                 ok: true,
                 cliente: clienteRestringido
             });

         });

            
    }


 
// Funcion para exportar la configuracion de express, siempre va
module.exports = app;