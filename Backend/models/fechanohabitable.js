const mongoose = require('mongoose');

const fechaNotAvitableSchema = mongoose.Schema({
    from: {
        type: Date,
        required: true,
    },
    to: {
        type: Date,
        required: true,
    },
    fechaCreacion: {
        type: Date,
        default: Date.now
    }
},{collection:'fechasNotAvitable',versionKey: false })

module.exports = mongoose.model('FechaNotAvitable', fechaNotAvitableSchema);