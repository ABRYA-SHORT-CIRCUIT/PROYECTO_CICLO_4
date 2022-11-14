const app  = require('./app');
const connectDataBase = require('./config/dataBase')

const dotenv = require('dotenv')
dotenv.config({path:'back/config/config.env'})

//Configurar base de datos
connectDataBase();

const server = app.listen(process.env.PORT, () => {
    console.log(`Servidor iniciado en el puerto: ${process.env.PORT} en modo ${process.env.NODE_ENV}`)
})