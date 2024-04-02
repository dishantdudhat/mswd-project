const express = require('express');
const router = express.Router();
const Food = require('../models/food');


router.get('/food', async (req, res) => {
    try {
        const foods = await Food.find();
        res.json(foods);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


router.post('/food', async (req, res) => {
    const { food_name, category, price } = req.headers;
    try {
        const newFood = new Food({
            food_name,
            category,
            price
        });
        const food = await newFood.save();
        res.json(food);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
