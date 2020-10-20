// Se importa expres
const express = require('express');
//Se importa jwt para uso del token
const jwt = require('jsonwebtoken');

// Se importa el modelo de usuario que permite realizar las consultas a la BD
const Usuario = require('../models/usuario');

// Inicializacion de express
const app = express();


// Declaracion de la ruta que responde al endpoint /login
app.post('/login',(req, res) =>{
   
   // Se guarda en la variable body los atributos enviados por el usuario
   let body = req.body;

   // Se uriliza el metodo findOne para buscar un ellemento en BD
   // en corchetes se establece el nombre del atributo a buscar seguido de el valor que mando el usuario en la peticion
   // email = atributo de usuario en base de datos
   // body.email el dato porporcionado por el usuario en la peticionm http
   // Esto responde un error o un arreglo de usuarios de DB segun sea el caso
   Usuario.findOne({usuario: body.usuario}, (err, usuarioDB) =>{

        // Si la peticion a la BD falla se muestra el error en formato JSON
       if(err){
           return res.status(500).json({
               ok:false,
               err
            });
        }
        
        // Si no se encuentra un usuario en la BD falla se muestra el error en formato JSON
        if(!usuarioDB){
            return res.status(400).json({
                ok:false,
                err: {
                    msg: 'Usuario o contraseña incorrectos'
                }
            });
        }

        // Si  se encuentra un usuario en la BD se comparan las contraseñas 
        //body.password es el pasword proporcionado en la peticion http
        //usuarioDB.password es la constraseña almacenada en la base de datos del usuario
        //Si no hace match la contraseña muestra el error en formato json
        if(body.auth !== usuarioDB.auth){
            return res.status(400).json({
                err: {
                    msg: 'Usuario o contraseña Incorrectos'
                }
            });
        }

        // Si todo sale bien se construye el token y se manda en la respuesta en formato JSON
       let token = jwt.sign({
           usuario: usuarioDB
       }, process.env.SEED, {expiresIn: process.env.TOKEN_LIFE})

        res.json({
            ok:true,
            token
        });

   })

})




module.exports = app;