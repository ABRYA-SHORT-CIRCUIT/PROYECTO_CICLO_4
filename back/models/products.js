const mongoose = require('mongoose');

const prodSchema = mongoose.Schema({
    SKU: {
        type: String,
        unique: true,
        required: [true, 'Por favor ingresar el SKU del producto nuevo.'],
        trim: true,    //Eliminar espacios vacíos
        maxLenght: [13, 'El campo SKU debe contener 13 dígitos.'],
        default: '0000000000000'
    },
    brand: {
        type: String,
        required: [true, 'Por favor ingresar la marca del producto nuevo.'],
        trim: true,
        maxLenght: [20, 'La marca no debe tener más de 20 caractéres.'],
        default: 'Fabricante',
    },
    model: {
        type: String,
        required: [true, 'Por favor indicar el modelo del producto nuevo.'],
        trim: true,
        maxLenght: [20, 'La marca no debe tener más de 20 caractéres.'],
        default: 'Mod TV',
    },
    price: {
        type: Number,
        required: [true, 'Por favor indicar el precio del producto nuevo.'],
        maxLenght: [8, 'El precio máximo no supera $99.999.999.'],
        default: 0
    },
    size: {
        type: Number,
        required: [true, 'Por favor indicar el tamaño de la pantalla del producto nuevo.'],
        default: 100
    },
    technology: {
        type: String,
        required: [true, 'Por favor indicar el tipo de tecnología del producto nuevo.'],
        default: 'LED'
    },
    resolution: {
        type: String,
        required: [true, 'Por favor indicar la resolución del producto nuevo.'],
        default: '1080 FHD'
    },
    description: {
        type: String,
        required: [true, 'Por favor indicar la descripción del producto nuevo.'],
        default: 'SmarthTV.',
    },
    image: {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    stock: {
        type: Number,
        required: [true, 'Por favor indicar la cantidad de existencias en inventario del producto nuevo.'],
        maxLenght: [3, 'La cantidad máxima en inventario no supera 999 unidades.'],
        default: 0,
    }
}, { versionKey: false }); //Para eliminar el campo _vs adicional que se crea

module.exports = mongoose.model('products', prodSchema, 'products');
//El último valor es el nombre en BD, mongoose por defecto, agrega una s al final