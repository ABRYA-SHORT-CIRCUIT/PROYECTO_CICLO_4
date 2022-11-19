const errorHandler = require('../utils/ErrorHandler')

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error"

    res.status(err.statusCode).json({
        success: false,
        message: err.stack
    })

    //Error de clave duplicada en mongoose
    if (err.code === 11000) {
        const message = `Clave duplicada ${Object.keys(err.keyValue)}`
        error = new errorHandler(message, 400)
    }

    //Error en JWT token
    if (err.name === "JsonWebTokenError") {
        const message = "Token de Json Web es invalido, intentalo de nuevo!"
        error = new errorHandler(message, 400)
    }

    //JWT token expirado
    if (err.name === "TokenExpiredError") {
        const message = "El token de JWT es vencido. Ya expiró. Intentalo de nuevo!"
        error = new errorHandler(message, 400)
    }
}