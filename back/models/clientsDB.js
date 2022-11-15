const mongoose = require('mongoose');

const clientSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Por favor indicar nombre completo.'],
        maxLenght: [50, 'El nombre no puede tener más de 50 caracteres.']
    },
    email: {
        type: String,
        required: [true, 'Por favor indicar correo electrónico.'],
        maxLenght: [50, 'El correo electrónico no puede tener más de 50 caracteres.']
    },
    state: {
        type: String,
        required: [true, 'Por favor indicar departamento.'],
        maxLenght: [60, 'El departamento no puede tener más de 60 caracteres.']
    },
    city: {
        type: String,
        required: [true, 'Por favor indicar la ciudad.'],
        maxLenght: [60, 'La ciudad no puede tener más de 60 caracteres.']
    },
    address: {
        type: String,
        required: [true, 'Por favor indicar la dirección.'],
        maxLenght: [100, 'La dirección no puede tener más de 100 caracteres.']
    },
    phone: {
        type: String,
        required: [true, 'Por favor indicar número de contacto sin espacios.'],
        maxLenght: [10, 'El número de contacto debe ser de 10 caracteres.']
    }
}, { versionKey: false }); //Para eliminar el campo _vs adicional que se crea

module.exports = mongoose.model('clientsDB', clientSchema, 'clients');
//El último parámetro establece el nombre en BD, mongoose por defecto, agrega una s al final