const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const img_index = Math.round(21 * Math.random()) + 1;
const clientSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Por favor indicar nombre completo.'],
        maxLenght: [50, 'El nombre no puede tener más de 50 caracteres.']
    },
    email: {
        type: String,
        required: [true, 'Por favor indicar correo electrónico.'],
        maxLenght: [50, 'El correo electrónico no puede tener más de 50 caracteres.'],
        unique: true,
        validate: [validator.isEmail, 'Por favor ingrese un correo electrónico válido']
    },
    password: {
        type: String,
        require: [true, 'Por favor ingrese una contraseña'],
        minLeght: [8, 'La contraseña debe tener mínimo 8 caracteres'],
        select: false
    },
    role: {
        type: String,
        required: false,
        enum: {
            values: ['admin', 'seller', 'client']
        },
        default: 'client',
    },
    avatar: {
        public_id: {
            type: String,
            required: false,
            default: img_index
        },
        url: {
            type: String,
            required: false,
            default: './assets/images/avatar-' + img_index + '.svg'
        }
    },
    _status: {
        type: String,
        required: [true, 'Por favor selecciona el estado del usuario'],
        enum: {
            values: ['activo', 'inactivo']
        }
    },
    created: {
        type: Date,
        required: false,
        default: Date.now
    },
    pass_token: String,
    pass_expire: Date
}, { versionKey: false }); //Para eliminar el campo _vs adicional que se crea

//Encriptamos contraseña antes de guardarla
clientSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
});

//Desencriptar contraseña y comparar
clientSchema.methods.validatePass = async function (loginPass) {
    return await bcrypt.compare(loginPass, this.password)
}

//Generar un token
clientSchema.methods.getJwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES })
}

module.exports = mongoose.model('clientsDB', clientSchema, 'clients');
//El último parámetro establece el nombre en BD, mongoose por defecto, agrega una s al final