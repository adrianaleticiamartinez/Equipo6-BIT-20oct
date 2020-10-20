// SE IMPORTA JWT VALIDAR TOKEN
const jwt = require('jsonwebtoken');

// Verificar Token

const verificaToken = (req, res, next) =>{

    // Con esta declaracion se guarda el parametro token en la peticion en una variable con el mismo nombre
    let token = req.get('token'); 

    // El metodo .verify verifica que sea un token valido
    jwt.verify(token, process.env.SEED, (err, decoded) =>{

        // Si ocurre un error devuelve la respuesta del error
        if(err){
            return res.status(401).json({
                msg: 'Para tener acceso a esta API debes Iniciar Sesion'
            });
        }

        // De la info del usuario desestructuramos solo los atributos que nos interesen, en este caso el email y el rol
        const {usuario, perfil} = decoded.usuario
        
        // Se crea un objeto final que contiene los atributos que queremos del usuario que hace la peticion
        const final = {
            usuario,
            perfil
        } 

        // se guarda el objeto en la variable req.usuario que puede ser utilizada en alguna ruta
        req.usuario= final;
        next();
    });


};


// Se exporta el uso de la funcion de verificar token
module.exports = {
    verificaToken
};