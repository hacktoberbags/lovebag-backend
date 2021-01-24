const mongoose = require('mongoose');
Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        require: true,
    },

    cart: [{
        type: Schema.Types.ObjectId,
        ref: 'Bag',
    }]
}, {
    timestamps: true,
});

module.exports = mongoose.model('User', UserSchema);