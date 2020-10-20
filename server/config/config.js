

/* Puerto */
process.env.PORT = process.env.PORT || 3000;

/* Vencimiento Del Token
 */
process.env.TOKEN_LIFE = '1d';

// Semilla para el token
process.env.SEED = process.env.SEED || 'clave-secreta-bbva';


/* Base de Datos */
// const urlDB = process.env.MONGO_URI;

const urlDB = 'mongodb+srv://user_back:BwnrNEcod2Qynotr@cluster0.sqpta.mongodb.net/hackatonbbva'

process.env.URLDB = urlDB;

