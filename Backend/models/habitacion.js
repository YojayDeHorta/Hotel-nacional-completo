const mongoose = require('mongoose');

const habitacionSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3,
        max: 255
    },
    tipo_habitacion: {
        type: String,
        required: true,
        min: 3,
        max: 255
    },
    servicio: {
        type: String,
        required: true,
        min: 3,
        max: 255
    },
    precio: {
        type: Number,
        required: true,
    },
    personas: {
        type: Number,
        required: true,
    },
    estado: {
        type: String,
        default: 'Disponible',
        required: true,
    },
    start: {
        type: String
    },
    end: {
        type: String
    },
    usuario: {
        name: {
            type: String,
            min: 3,
            max: 255
        },
        email: {
            type: String,
            min: 3,
            max: 255
        },
        phone: {
            type: String,
            min: 3,
            max: 255
        },
        dias_reservados: {
            type: Number,
        },
        total_reservacion: {
            type: Number,
        },
    },
    fechaCreacion: {
        type: Date,
        default: Date.now
    }
},{collection:'habitaciones',versionKey: false })

module.exports = mongoose.model('Habitacion', habitacionSchema);