const clientModel = require('../models/clientsDB');
const errorHandler = require('../utils/ErrorHandler');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const sentToken = require('../utils/jwtToken');
const crypto = require("crypto");

//Crear un nuevo usuario/cliente en la BD
exports.createUser = catchAsyncErrors(async (req, res, next) => {
    const { name, email, password, _status } = req.body;

    const newUser = await clientModel.create({
        name,
        email,
        password,
        _status     //Este valor se asignaría por defecto en 'activo'
    });

    sentToken(newUser, 201, res)
});

//Iniciar Sesion - Login
exports.logInUser = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;

    //revisar si los campos estan completos
    if (!email || !password) {
        return next(new errorHandler("Por favor ingrese email & Contraseña", 400))
    }

    //Buscar al usuario en nuestra base de datos
    const user = await clientModel.findOne({ email }).select("+password");
    const passOK = await user.validatePass(password);
    if (!user || !passOK) {
        return next(new errorHandler("Email o contraseña invalidos", 401))
    }

    sentToken(user, 200, res)
})

//Cierre de sesión para cualquier tipo de usuario
exports.logOutUser = catchAsyncErrors(async (req, res, next) => {
    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })

    res.status(200).json({
        success: true,
        message: "Sesión Finalizada"
    })
})

//Consultar la información propia de usuario
exports.getSelfUser = catchAsyncErrors(async (req, res, next) => {
    console.log(req.user);
    const user = await clientModel.findById(req.user.id);


    res.status(200).json({
        success: true,
        user
    })
})

//Actualizar información personal de usuario
exports.updateProfile = catchAsyncErrors(async (req, res, next) => {
    const img_index = Math.round(21 * Math.random()) + 1;

    const newProfile = {
        name: req.body.name,
        email: req.body.email,
        avatar: {
            public_id: img_index,
            url: './assets/images/avatar-' + img_index + '.svg'
        }
    }

    const user = await clientModel.findByIdAndUpdate(req.user.id, newProfile, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true,
        user
    })
})

//Actualizar la contraseña de ingreso
exports.updatePassword = catchAsyncErrors(async (req, res, next) => {
    const user = await clientModel.findById(req.user.id).select("+password");

    //Revisamos si la contraseña vieja es igual a la nueva
    const isEqual = await user.validatePass(req.body.oldPassword)

    if (!isEqual) {
        return next(new errorHandler("La nueva contraseña debe ser diferente a la anterior.", 401));
    }

    user.password = req.body.newPassword;
    await user.save();

    sentToken(user, 200, res)
})

//ACCIONES DE ADMIN Y/O SELLER

//Consultar todos los usuarios
exports.getAllUsers = catchAsyncErrors(async (req, res, next) => {
    const users = await clientModel.find();

    res.status(200).json({
        success: true,
        users
    })
})

//Consultar un usuario cualquiera
exports.getAnyUser = catchAsyncErrors(async (req, res, next) => {
    const user = await clientModel.findById(req.params.id);

    if (!user) {
        return next(new errorHandler(`Usuario inexistente`))
    }

    res.status(200).json({
        success: true,
        user
    })
})

//Actualizar usuario (Solo puede cambiarle el rol y el status)
exports.updateAnyUser = catchAsyncErrors(async (req, res, next) => {
    const newInfo = {
        role: req.body.role,
        _status: req.body._status,
    }

    const user = await clientModel.findByIdAndUpdate(req.params.id, newInfo, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true,
        user
    })
})