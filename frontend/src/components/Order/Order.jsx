import { useEffect, useState } from "react";
import axios from "axios";
import Item from "../Item/Item";
import { Link } from "react-router-dom";

import pizzaimg from "../../assets/pizza.jpg";
import burgerimg from "../../assets/burger.jpg";
import drinnkimg from "../../assets/drinks.jpg";

import './Order.css';
export default function Home() {
  var [datafromapi, setdatafromapi] = useState([]);
  var [deleteitme,setdeleteitem] =useState(true);
  const productdata = async () => {
    try {
      var { data } = await axios.get("http://localhost:3000/order", { withCredential: true });
      setdatafromapi(data);
      //  console.log(datafromapi);
    }
    catch (err) {
      console.log(err);
    }
  }

  
  const deleteitem= async (event)=>{
    // console.log(event.target.value);
    try {
      var { data } = await axios.delete(`http://localhost:3000/order?id=${event.target.value}`, { withCredential: true });
      setdeleteitem(!deleteitme);
      // console.log(data);
    }
    catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    productdata();
  }, [deleteitme])

  return (<>
    <section className="product-section">
      <h1>My order</h1>
      <div className="product-list">
        {datafromapi.map((item, index) => (
          
          <div className="product-item">
            <Item img={ item.category=="Pizza" ? pizzaimg : item.category=="Burger" ? burgerimg: drinnkimg} name={item.pizza} des={item.category} price={item.price} />
          <button  value={item._id} onClick={deleteitem}>
            Delete
          </button>
          </div>
        ))}
      </div>
    </section>
  </>);
}