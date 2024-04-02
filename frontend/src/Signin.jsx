import Navbar from "./components/Navbar/Navbar"
import "./Signin.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams , Navigate} from "react-router-dom";
export default function Signin(){

  var [user,setuser]=useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      var  data  = await axios.post(`http://localhost:3000/login?name=${formData.username}&password=${formData.password}`, { withCredential: true });
      setuser(true);
      console.log(data);
    }
    catch (err) {
      alert(err.response.data.msg);
      console.log(err);
    }

    // console.log(formData);
  };

    return (<>
    {user && (
      <Navigate to="/" replace={true} />
    )}
     <Navbar/>
     <div className="signup">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label><br></br>
          <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="password">Password:</label><br></br>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required/>
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
    </>)
}