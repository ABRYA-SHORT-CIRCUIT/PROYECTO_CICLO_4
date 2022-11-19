const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/errors");
const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser')

var cors = require('cors');

const products = require('./routes/productsRoutes');
const productAdmin = require("./routes/adminProduct");
const clients = require('./routes/clientsRoutes');
//const orders = require('./routes/ordersRoutes');


app.use(express.json({ limit: "50MB" })); //Restringe el tamaño de archivos a la BD
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

//app.use('/api', products);
app.use('/api', clients);
/*app.use('/products', productAdmin)
app.use('/admin', clients);
app.use('/clients/:id', orders);
app.use('/admin', orders);*/

app.use(cors(), productAdmin);
//app.use(cors(), clients);

//MiddleWares para manejar errores
app.use(errorMiddleware);

module.exports = app;

//PENDIENTE1: Validar permisos de acceso según parámetros de ruta.
//PENDIENTE2: Verificar que esqueda de productos permita su consulta abierta