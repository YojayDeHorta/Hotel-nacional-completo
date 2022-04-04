const express= require("express")
const app= express()
const mongoose = require('mongoose');

//capturar el body
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// cors
const cors = require('cors');
var corsOptions = {
    origin: '*', // Reemplazar con dominio
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));

//variables de entorno
require('dotenv').config()



// import routes
const authRoutes = require('./routes/route');
const configRoutes = require('./routes/config');
const roomRoutes = require('./routes/rooms');
const checkoutRoutes = require('./routes/checkout');

// Conexión a Base de datos
const uri = process.env.DB_URL;
mongoose.connect(uri,
    { useNewUrlParser: true, useUnifiedTopology: true }
)
.then(() => console.log('Base de datos conectada'))
.catch(e => console.log('error db:', e));

// route middlewares
app.use('/api/user', authRoutes)
app.use('/api/config', configRoutes)
app.use('/api/habitaciones', roomRoutes)
app.use('/api/checkout', checkoutRoutes)


//modo history de vue
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(__dirname + "/public"));

//configurando el puerto para heroku
const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
    console.log(`servidor andando en: ${PORT}`)
})