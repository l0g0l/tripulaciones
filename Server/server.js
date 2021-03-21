
//Este fichero reemplaza al original


const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');
const routes = require('./routes');


// crear el servidor
const app = express();


// Conectar a la base de datos
conectarDB();

// Habilitar Cors
const opcionesCors = {
    origin: process.env.FRONTEND_URL
}
app.use( cors(opcionesCors) );

// Puerto de la app
const port = process.env.PORT || 4000;

// Habilitar leer los valores de un body
app.use( express.json() );


// routes
//app.use('/', routes());
// Rutas de la app
app.use('/api/', require('./routes/newUser'));
app.use('/api/login', require('./routes/auth'));
//cambio a api/profile porque es la misma peticion, solo q cambia el tipo get a post
app.use('/api/profile', require('./routes/auth'));
app.use('/api/profile', require('./routes/auth'));
app.use('/api/profile/donation', require('./routes/donations'));

// ### Necesito una ruta por tipo de donacion?? o me vale con 1? todas las donaciones equivalen a 100 luzones

app.use('/api/profile/donation/onedonation', require('./routes/donations'));
// app.use('/api/profile/donations/percent', require('./routes/donations'));
// app.use('/api/profile/donations/roundup', require('./routes/donations'));
// app.use('/api/profile/donations/periodic', require('./routes/donations'));


// Arrancar la app
app.listen(port)
    console.log(`El servidor esta funcionando en el puerto ${port}`);
