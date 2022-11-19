const mongoose = require("mongoose");

const connectDataBase = () => {
    mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(con => {
        console.log(`Base de datos mongo conectada con el servidor: ${con.connection.host}`)
    }).catch(con => {
        console.log(`No se logró conexion a la base de datos.`)
    })
}

module.exports = connectDataBase;