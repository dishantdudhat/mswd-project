import { useEffect, useState } from "react";
import Item from "../Item/Item";
import axios from "axios";
import './Home.css';
import { Link } from "react-router-dom";
import pizzaimg from "../../assets/pizza.jpg";
import burgerimg from "../../assets/burger.jpg";
import drinnkimg from "../../assets/drinks.jpg";



export default function Home() {
  const [order, setorder] = useState();
  var [datafromapi, setdatafromapi] = useState([]);
 

  const productdata = async () => {
    try {
      var { data } = await axios.get("http://localhost:3000/food", { withCredential: true });
      setdatafromapi(data);
      //  console.log(datafromapi);
    }
    catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    productdata();
  }, [])

  const colddrink = datafromapi.filter(item => item.category == 'cold-drink');
  const pizza = datafromapi.filter(data => {
    return data.category == 'Pizza';
  });
  const Burger = datafromapi.filter(item => item.category == 'Burger');
  return (<>

    <section className="product-section">

      <section>
        <h1>Pizza </h1>
        <div className="product-list">
          {pizza.map((item, index) => (
            <div className="product-item"><Item img={pizzaimg} name={item.pizza} des={item.category} price={item.price} /><button value={item._id} >
             <Link to={"/confirm/"+item._id}>Order</Link>
          </button>
          </div>
          ))}
        </div>
      </section>

      <section>
        <h1>Burger </h1>
        <div className="product-list">
          {Burger.map((item, index) => (
            <div className="product-item"><Item img={burgerimg} name={item.pizza} des={item.category} price={item.price} /><button value={item._id} >
             <Link to={"/confirm/"+item._id}>Order</Link>
          </button>
          </div>
          ))}
        </div>
      </section>
      
      <section>
        <h1>colddrink </h1>
        <div className="product-list">
          {colddrink.map((item, index) => (
            <div className="product-item"><Item img={drinnkimg} name={item.pizza} des={item.category} price={item.price} /><button value={item._id}>
             <Link to={"/confirm/"+item._id}>Order</Link>
          </button>
          </div>
          ))}
        </div>
      </section>


    </section>
  </>);
}