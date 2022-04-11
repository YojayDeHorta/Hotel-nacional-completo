const mongoose = require('mongoose');

const statusSchema = mongoose.Schema({
    status: {
        type: Boolean,
        required: true,
    },

})

module.exports = mongoose.model('Status', statusSchema);