

// Funcion recibe un objeto de tipo cliente con todos sus atributos
const obtenerCamposVacios = (cliente) =>{

    // Se inicializa un objeto para actualizar con los campos vacios
    let campos = {
        numero: 0,
        nombre: ''
    };
    
    // Con la funcion regex de javascript podemos verificar que el atributo no tenga espacios vacios
     const regEx = new RegExp(' ', 'g');

     // Una vez que se tiene la expresion regex se compara con cada uno de los attrributos del cliente para poder realizar el conteo de campos vacios

     const idCliente = cliente.idCliente.replace(regEx, '');     
     const nombre = cliente.nombre.replace(regEx, '');     
     const apellidoPaterno = cliente.apellidoPaterno.replace(regEx, '');     
     const apellidoMaterno = cliente.apellidoMaterno.replace(regEx, '');     
     const fechaNacimiento = cliente.fechaNacimiento.replace(regEx, '');     
     const sexo = cliente.sexo.replace(regEx, '');     
     const segmento = cliente.segmento.replace(regEx, '');     
     const nacionalidad = cliente.nacionalidad.replace(regEx, '');     
     const rfc = cliente.rfc.replace(regEx, '');     
     const tipoID = cliente.tipoID.replace(regEx, '');     
     const numeroID = cliente.numeroID.replace(regEx, '');     
     const cuenta = cliente.cuenta.replace(regEx, '');     
     const email = cliente.email.replace(regEx, '');     


       // si el atributo viene en blanco se actualiza el objeto de campos vacios
       //ESTO ES LO QUE SE TIENE QUE MODIFICAR
        if(idCliente == ''){
        campos.numero += 1;
        campos.nombre += 'idCliente, '
        }
        // si el atributo viene en blanco se actualiza el objeto de campos vacios
        //ESTO ES LO QUE SE TIENE QUE MODIFICAR
        if(nombre == ''){
        campos.numero += 1;
        campos.nombre += 'nombre, '
        }
        // si el atributo viene en blanco se actualiza el objeto de campos vacios
        //ESTO ES LO QUE SE TIENE QUE MODIFICAR ...ETC
        if(apellidoPaterno == ''){
        campos.numero += 1;
        campos.nombre += 'apellidoPaterno, '
        }
        // si el atributo viene en blanco se actualiza el objeto de campos vacios
        if(apellidoMaterno == ''){
        campos.numero += 1;
        campos.nombre += 'apellidoMaterno, '
        }
        // si el atributo viene en blanco se actualiza el objeto de campos vacios
        if(fechaNacimiento == ''){
        campos.numero += 1;
        campos.nombre += 'fechaNacimiento, '
        }
        // si el atributo viene en blanco se actualiza el objeto de campos vacios
        if(sexo == ''){
        campos.numero += 1;
        campos.nombre += 'sexo, '
        }
        // si el atributo viene en blanco se actualiza el objeto de campos vacios
        if(segmento == ''){
        campos.numero += 1;
        campos.nombre += 'segmento, '
        }
        // si el atributo viene en blanco se actualiza el objeto de campos vacios
        if(nacionalidad == ''){
        campos.numero += 1;
        campos.nombre += 'nacionalidad, '
        }
        // si el atributo viene en blanco se actualiza el objeto de campos vacios
        if(rfc == ''){
        campos.numero += 1;
        campos.nombre += 'rfc, '
        }
        // si el atributo viene en blanco se actualiza el objeto de campos vacios
        if(tipoID == ''){
        campos.numero += 1;
        campos.nombre += 'tipoID, '
        }
        // si el atributo viene en blanco se actualiza el objeto de campos vacios
        if(numeroID == ''){
        campos.numero += 1;
        campos.nombre += 'numeroID, '
        }
        // si el atributo viene en blanco se actualiza el objeto de campos vacios
        if(cuenta == ''){
        campos.numero += 1;
        campos.nombre += 'cuenta, '
        }
        // si el atributo viene en blanco se actualiza el objeto de campos vacios
        if(email == ''){
        campos.numero += 1;
        campos.nombre += 'email, '
        }
        
        // Una vez realizadas las comparaciones se regresa un objeto con el conteo
        return campos;

}


module.exports = {
    obtenerCamposVacios
};