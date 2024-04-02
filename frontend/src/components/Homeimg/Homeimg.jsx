import './Homeimg.css';
import { Link } from 'react-router-dom';
export default function Homeimg(prop){
    return (<>
         <div className="home">
            <div className='text'>
            <p>Fresh and delicious</p>
            <h1>RESTAURANT</h1>
             <br></br>
            <button> <Link  to="/order">My Order</Link></button>
            </div>
         </div>
    </>);
}