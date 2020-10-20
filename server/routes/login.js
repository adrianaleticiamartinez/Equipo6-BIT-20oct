// Se importa expres
const express = require('express');

// Inicializacion de express
const app = express();


// Declaracion de la ruta que responde al endpoint /login
app.post('/login',(req, res) =>{
   
   // Se guarda en la variable body los atributos enviados por el usuario
   let body = req.body;

   res.json({
       body
   })

})




module.exports = app;