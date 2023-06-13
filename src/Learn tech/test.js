import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Aboutus } from "./Pages/aboutus";
import { Home } from "./Pages/home";
import { Courses } from "./Pages/courses";
import { Enroll } from "./Pages/enroll";
import { Navbar } from "./NavBar";
import "./test.css"
// import Pic from "./Images/pic.jpg"
// import { Course } from "./Component";
function Test () {

    return(
        <div className="App">
                <Router>
            <div className="header">
                <Navbar/>
               </div>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/aboutus" element={<Aboutus/>}/>
                        <Route path="/courses" element={<Courses/>}/>
                        <Route path="/enroll" element={<Enroll/>}/>
                        {/* <Route path="*" element={<h1> 404 PAGE NOT FOUND</h1>}/> */}
                    </Routes>
                </Router>
                {/* hghuh */}
        </div> 
   )

} ; 



export default Test