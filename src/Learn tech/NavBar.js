import "./test.css"
import { Link } from "react-router-dom"

export const Navbar = () =>{
    return(
        <div className="navbar">
            
                <Link id="link" to="/"><h2 id="title">Learn Tech</h2></Link>

            <div className="ul">
                <Link id="link" to="/"><h6 id="nav">Home</h6></Link>
                <Link id="link" to="/aboutus"><h6 id="nav">About us</h6></Link>
                <Link id="link" to="/courses"><h6 id="nav">Courses</h6></Link>
                <Link id="link" to="/enroll"><button className="enrollbtn" id="enrollbtnnav">Enroll Now</button></Link>
            </div>
    </div>
    )
}