const mongoose = require('mongoose')

const {Schema} = mongoose;

const OrderSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    food_name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ['cold-drink', 'Burger','Pizza'], 
        required: true
    },
    price: {
        type: Number,
        required: true
    }

});

module.exports = mongoose.model('order', OrderSchema);