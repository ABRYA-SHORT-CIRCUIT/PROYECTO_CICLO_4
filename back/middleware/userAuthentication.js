
const usersDB = require("../models/clientsDB")
const jwt = require("jsonwebtoken")
const catchAsyncErrors = require("./catchAsyncErrors")
const errorHandler = require("../utils/ErrorHandler")

//Verificamos si estamos autenticados, (existencia y veracidad del token)
exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        return next(new errorHandler("Debe iniciar sesion para acceder a este recurso", 401)) //Hacer un desvío a página de loggin
    }

    const loginUser = jwt.decode(token, process.env.JWT_SECRET)
    req.user = await usersDB.findById(loginUser.id);

    next();

})

//Capturamos role
exports.authorizeRoles = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return next(new errorHandler(`Rol (${req.user.role}) no esta autorizado a entrar a esta area`, 403))
        }
        next()
    }
}