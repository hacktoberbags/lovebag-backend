const mongoose = require('mongoose');
Schema = mongoose.Schema;

const BagSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    bio: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        require: true,
    },
    available_colors: [],
}, {
    timestamps: true,
});

module.exports = mongoose.model('Bag', BagSchema);