import "./Navbar.css"
import { Link } from "react-router-dom"
export default function Navbar(){
    return (<>
    <section>
        <div className="nav">
            <div className="item-first" >  <h1><Link  to="/">Home</Link></h1></div>            
            <div className="nav-button">
                <button> <Link  to="/sign-in">Sign in</Link></button>
                <button> <Link  to="/sign-up">Sign up</Link></button>
                {/* <button>Sign Up</button> */}
            </div>            
        </div>
    </section>
    </>)
}