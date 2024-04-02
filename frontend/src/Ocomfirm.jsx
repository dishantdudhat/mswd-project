import Navbar from "./components/Navbar/Navbar";

import { useEffect, useState } from "react";
import axios from "axios";
import Item from "../src/components/Item/Item";
import { Link, useParams , Navigate} from "react-router-dom";

import pizzaimg from "./assets/pizza.jpg";
import burgerimg from "./assets/burger.jpg";
import drinnkimg from "./assets/drinks.jpg";
import './Ocomfirm.css'

export default function Ocomfirm() {
  var { id } = useParams();
  var [datafromapi, setdatafromapi] = useState([]);
  var [user,setuser]=useState(false);
  const productdata = async () => {
    try {
      var { data } = await axios.get("http://localhost:3000/food", { withCredential: true });
      setdatafromapi(data);
      // console.log(data);
    }
    catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    productdata();
  }, [])


  // for add in order data
const addproduct = async (event) =>{
 
  const adddata = datafromid.map((item, index) => (
    [item.food_name,
    item.category,
    item.price]
  ))
  var email= "abc1@123";
  var name = adddata[0][0];
  var cat = adddata[0][1];
  var price = adddata[0][2];
  try {
    var { data } = await axios.post(`http://localhost:3000/order?email=${email}&category=${cat}&food_name=${name}&price=${price}`, { withCredential: true });
    setuser(true);
    console.log(data);
  }
  catch (err) {
    console.log(err);
  }
}

  const datafromid = datafromapi.filter(item => item._id == id);
  // console.log("datafromapi"+datafromapi);
  // console.log("id"+id);
  return (<>

    {user && (
      <Navigate to="/order" replace={true} />
    )}
    <Navbar />
    <hr></hr>
    {/* <h1></h1> */}
    <section>
      <div>
        {datafromid.map((item, index) => (
          <div className="product">
            <div className="part1">
              <img src={item.category == "Pizza" ? pizzaimg : item.category == "Burger" ? burgerimg : drinnkimg} alt="produc" />
            </div>
            <div className="part2" >
              <h3>{item.food_name}</h3>
              <p>Category:{item.category}</p>
              <p>price:{item.price}</p>
              <p>address: vadodara</p>
              <button onClick={addproduct} >confirm</button>
            </div>
          </div>
        ))}

      </div>
    </section>
  </>);
}



