const express = require('express')
const app = express()
const port = 3030
const mainRouter = require('./routes/index');
const methodOverride = require('method-override');

// Argumento para usar put y delete //
app.use(methodOverride('_method'));

// levantando el servidor //
app.listen(process.env.POTR || port, () => {
    console.log(`Servidor inciado en puerto ${port}`)
})

// asignando la ruta para archivos publicos //
app.use(express.static('./public'));


// seteando el uso de plantillas ejs //
app.set('view engine', 'ejs');



// enlace principal home //
app.use('/', mainRouter);





