
// Funcion recibe un objeto de tipo cliente con todos sus atributos
const obtenerCamposRestringidos = (cliente) =>{

    const regEx = new RegExp(' ', 'g');

   
    const apellidoPaterno = cliente.apellidoPaterno.replace(regEx, '');     
    const apellidoMaterno = cliente.apellidoMaterno.replace(regEx, '');     
    const fechaNacimiento = cliente.fechaNacimiento.replace(regEx, '');
    const numeroID = cliente.numeroID.replace(regEx, '');
    const tipoID = cliente.tipoID.replace(regEx, '');
    const rfc = cliente.rfc.replace(regEx, '');

   
    if(apellidoMaterno !== ''){
        cliente.apellidoMaterno = cliente.apellidoMaterno.substring(-1,3) + '*****';
    }
    if(apellidoPaterno !== ''){
        cliente.apellidoPaterno = cliente.apellidoPaterno.substring(-1,3) + '*****';
    }
    if(fechaNacimiento !== ''){
        cliente.fechaNacimiento = cliente.fechaNacimiento.substring(-1,3) + '*****';
    }
    if(numeroID !== ''){
        cliente.numeroID = cliente.numeroID.substring(-1,3) + '*****';
    }
    if( tipoID !== ''){
        cliente.tipoID = cliente.tipoID.substring(-1,3) + '*****';
    }
    if( rfc !== ''){
        cliente.tipoID = cliente.rfc.substring(-1,3) + '*****';
    }

    
    return cliente;


}



// apellidoPaterno, Me
// fecha nacio rfc tipoid numeroid email





module.exports = {
    obtenerCamposRestringidos
};