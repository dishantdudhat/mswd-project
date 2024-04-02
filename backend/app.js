const express = require("express");
const mongoose=require("mongoose");
const cors =require("cors");

const food = require("./routes/food");
const app=express();
app.use(cors())
const auth = require("./routes/authentication");
const order = require("./routes/order");

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/db');
}
main().then(()=>{
    console.log("connect succesfull");
}).catch(err => {console.error(err)});

app.get("/",(req,res)=>{
    res.send("hello");
})
app.use(food);
app.use(order);
app.use(auth);
app.listen(3000,()=>{
    console.log("backend start");
});