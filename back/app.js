const express = require("express");
const app = express();

app.use(express.json());

const productAdmin = require("./routes/adminProduct");

app.use('/admin', productAdmin)

module.exports=app

