//Función genérica para atrapar errores generales del sistema
module.exports = func => (req, res, next) =>
    Promise.resolve(func(req, res, next))
        .catch(next)