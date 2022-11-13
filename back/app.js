const express = require("express");
const app = express();



app.use(express.json());

const productAdmin = require("./routes/adminProduct");

// app.use('/admin', productAdmin)

var cors = require('cors');
app.use(cors(),productAdmin)

module.exports=app

