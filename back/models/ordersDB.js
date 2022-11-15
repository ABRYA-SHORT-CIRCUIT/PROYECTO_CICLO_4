const mongoose = require('mongoose');
const Client = mongoose.model('clientsDB');
const Product = mongoose.model('productsDB');

const ordersSchema = mongoose.Schema({
    order: {
        type: String,
        required: [true, 'Indicar el número de orden'],
        maxLength: [12, 'El número de orden no debe tener más de 12 caractéres']
    },
    date: {
        type: Date,
        default: Date.now,
    },
    client: {
        type: mongoose.Schema.ObjectId,
        ref: Client,
        required: [true, 'Indicar el cliente.'],
    },
    items: [
        {
            product: {
                type: mongoose.Schema.ObjectId,
                ref: Product,
                required: [true, 'Indicar la referencia del producto.']
            },
            quantity: {
                type: Number,
                required: [true, 'Indicar la cantidad de artículos a comprar.'],
                default: 0
            },
            reviews: {
                date: {
                    type: Date,
                    default: Date.now
                },
                title: {
                    type: String,
                    required: [true, 'Por favor escribir un título'],
                    maxLenght: [30, 'Máximo 30 caractéres']
                },
                rating: {
                    type: Number,
                    required: [true, 'Por favor selecciona tu valoración'],
                    enum: {
                        values: [0, 1, 2, 3, 4, 5]
                    }
                },
                review: {
                    type: String,
                    required: [true, 'Por favor escribe una opinión.']
                }
            }
        }
    ],
    destination: {
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
    },
    status: {
        type: String,
        required: [true, 'Seleccionar el estado actual de la orden'],
        enum: {
            values: [
                'confirmada',
                'pendiente',     //En caso de una solicitud de cancelación de la OC
                'canceleda',
                'enviada',
                'entregada'
            ]
        }
    }
}, { versionKey: false }); //Para eliminar el campo _vs adicional que se crea

module.exports = mongoose.model('ordersDB', ordersSchema, 'orders');
//El último parámetro establece el nombre en BD, mongoose por defecto, agrega una s al final