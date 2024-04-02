const express = require('express');
const router = express.Router();
const Order = require('../models/order');



router.get('/order', async (req, res) => {
    try {
        const foods = await Order.find();
        res.json(foods);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


router.post('/order', async (req, res) => {
    const { email, category , food_name, price } = req.query;
    try {
        const newFood = new Order({
            email,
            category,
            food_name,
            price
        });
        const food = await newFood.save();
        res.json(food);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.delete('/order',async (req,res)=>{
    const {id}=req.query;
    try{
        const order = await Order.deleteOne({_id:id});
        res.json(order)
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

module.exports = router;
