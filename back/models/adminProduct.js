const mongoose = require("mongoose")

const productosSchema = mongoose.Schema({

    brand: {
        type: String,
        required: [true, "Por favor registra la marca del televisor."],
        trim: true,
        maxLength: [120, "La marca del televisor no debe exceder los 120 caracteres."]
    },
    model: {
        type: String,
        required: [true, "Por favor registra el modelo del televisor."],
        trim: true,
        maxLength: [120, "El modelo del televisor no debe exceder los 120 caracteres."]
    },
    price: {
        type: Number,
        required: [true, "Por favor registre el precio del televisor."],
        maxLength: [8, "El precio del televisor no puede estar por encima de 99'999.999"],
        default: 0.0
    },
    description: {
        type: String,
        required: [true, "Por favor registre una descripcion para el televisor."]
    },
    image: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
    stock: {
        type: Number,
        required: [true, "Por favor registre el stock del televisor"],
        maxLength: [5, "Cantidad maxima del stock no puede sobrepasar 99999"],
        default: 0
    },
    rating: {
        type: Number,
        default: 0
    },
    reviews: 
    [
        {
            customerID: {
                type: String,
                required: true
            },
            date: {
                type: Date,
                default: Date.now
            },
            rating: {
                type: Number,
                required: true
            },
            reviews: {
                type: String,
                required: true
            }
        }
    ]

})

module.exports = mongoose.model("adminProduct", productosSchema)