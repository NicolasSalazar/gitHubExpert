//Instancia de librerias.....
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// Inicializacion de librerias...
const app = express();
require('./database');

//Settings...
app.set('port',process.env.PORT || 3030);

//Midlewars...
app.use(bodyParser.json());
app.use(cors());

//Routes...
app.use(require('./routes/productos.routes'))

//Listening port...
app.listen(app.get('port'), ()=>{
    console.log(`server on port ${app.get('port')}`);
})

