const mongoose = require('mongoose');

const { Schema } = mongoose;

const FoodSchema = new Schema({
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

module.exports = mongoose.model('Food', FoodSchema);
