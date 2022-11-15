const express = require("express");
var cors = require('cors');

const productAdmin = require("./routes/adminProduct");
const clients = require('./routes/clientsRoutes');
const orders = require('./routes/ordersRoutes');

const app = express();

app.use(express.json({ limit: "50MB" })); //Restringe el tamaño de archivos a la BD

// app.use('/admin', productAdmin)
app.use('/', clients);
app.use('/admin', clients);
app.use('/clients/:id', orders);
app.use('/admin', orders);

app.use(cors(), productAdmin)

module.exports = app

//PENDIENTE1: Validar permisos de acceso según parámetros de ruta.
//PENDIENTE2: Verificar que esqueda de productos permita su consulta abierta