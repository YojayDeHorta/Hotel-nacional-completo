const mongoose = require('mongoose');

const cuponSchema = mongoose.Schema({
    nombreCupon: {
        type: String,
        required: true,
    },
    porcentaje: {
        type: Number,
        required: true,
    },
    usos: {
        type: Number,
        default:0
    },
    limite: {
        type: Number,
        required: true,
    },
    fechaCreacion: {
        type: Date,
        default: Date.now
    }
},{collection:'cupones',versionKey: false })

module.exports = mongoose.model('cupon', cuponSchema);