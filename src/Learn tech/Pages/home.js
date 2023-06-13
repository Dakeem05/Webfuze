import "../test.css"
import { useState, useEffect } from "react";
import Pic from "../Images/pic.jpg"
import { Course } from "../Component";
export const Home = () => {
    const [color, setColor] = useState("")

    function colorHandler (e){
        setColor(e.target.value)
        localStorage.setItem("bg", e.target.value)
    }
    useEffect(() => {
        const myColor =localStorage.getItem("bg");
        if (myColor){
            setColor(myColor)
        }
    }, [])
    return (
        <div className="home">
        <div style={{backgroundColor:color}} className="header" id="headerHome">
        <div  className="hero">
        <div className="text">
            <h1 id="grow">Want to advance in your tech career?</h1>
            <br/>
            <h6  id="build">Build Your Future With Our Quality Education.
             The Best And Largest All-In-One Online Tutoring Platform In The World.</h6>
            <br/>
            <button className="getstarted">Get Started Now</button>
            <button className="enrollbtn" id="enrollbtn2">Enroll Now</button>
            <br/>
            <div className="previews">
                <div className="circle" id="cir1"><img className="cirI" src={Pic} alt='hero' /></div>
                <div className="circle" id="cir2"><img className="cirI" src={Pic} alt='hero' /></div>
                <div className="circle" id="cir3"><img className="cirI" src={Pic} alt='hero' /></div>
                <div className="circle" id="cir4"><img className="cirI" src={Pic} alt='hero' /></div>
                <div className="circle" id="cir5"><img className="cirI" src={Pic} alt='hero' /></div>
                <span>
                    <h2 id="k">255k+</h2>
                    <h4 id="pre">Previews</h4>
                </span>
            </div>
        </div>
        <div className="heropicture">
        <img id="heropic" src={Pic} alt='hero' />
        </div>
    </div>
</div>
<ul className="platforms">
    <li>zoom</li>
    <li>stripe</li>
    <li>monday</li>
    <li>slack</li>
    <li>dropbox</li>
</ul>
<div className="hero2">
    <div className="text2">
        <h1 id="high">
            High quality, audio & live classes
        </h1>
        <br/>
        <h6 id="video">
            
            High-Definition Video is Video of Higher Resolution And Quality Than Standard Definition. While There's No Standard Meaning For High Definition , Generally Any Standard Video Image.
        </h6>
        <br/>
        <button id="view">View Courses</button>
        <br/>

        <input onChange={colorHandler} type="color" style={{marginTop:"1em",}}/>

        <div className="classes1">
            <div className="class" id="ac">Audio Classes</div>
            <div className="class" id="lc">Live Classes</div>
        </div>
        <div className="classes2">
            <div className="class" id="rc">Recorded Classes</div>
            <div className="class" id="notes">50+ Notes</div>
        </div>
    </div>

    <div className="hero2picture">
        <div className="students">
            <h4 id="ne">255k+ Enrolled Sudents</h4>
            <div id="div">
                <div className="circle" id="cir11"><img className="cir" src={Pic} alt='hero' /></div>
                <div className="circle" id="cir12"><img className="cir" src={Pic} alt='hero' /></div>
                <div className="circle" id="cir13"><img className="cir" src={Pic} alt='hero' /></div>
                <div className="circle" id="cir14"><img className="cir" src={Pic} alt='hero' /></div>
                <div className="circle" id="cir15"><img className="cir" src={Pic} alt='hero' /></div>
            </div>
        </div>
        <div id="big"><img className="big_img" src={Pic} alt='hero' /></div>
        <div id="small"><img className="small_img" src={Pic} alt='hero' /></div>
    </div>
</div>
<div className="hero3">
    <div className="text3">
        <h1 id="this">This Is Why We Are Best From Others</h1>
        <h6 id="underthis">High-Definition Video is Video of Higher Resolution And Quality Than Standard Definition. While There's No Standard Meaning For High Definition , Generally Any Standard Video Image.</h6>
        <div id="big"><img className="hero3img" src={Pic} alt='hero' /></div>
    </div>
    <div className="boxes">
    <div className="boxes1">
        <div className="box">
            <h2>Experienced Mentors</h2>
            <h6>High-Definition Video is Video of Higher Resolution And Quality Than Standard Definition. While There's No Standard Meaning For High Definition. Hight Definition Video Is A video Of Higher Resolution And Quality Than Standard Definition.</h6>
        </div>
        <div className="box">
            <h2>One-on-One Meetings</h2>
            <h6>High-Definition Video is Video of Higher Resolution And Quality Than Standard Definition. While There's No Standard Meaning For High Definition. Hight Definition Video Is A video Of Higher Resolution And Quality Than Standard Definition.</h6>
        </div>
    </div>
    <div className="boxes2">
        <div className="box">
            <h2>One-on-One Meetings</h2>
            <h6>High-Definition Video is Video of Higher Resolution And Quality Than Standard Definition. While There's No Standard Meaning For High Definition. Hight Definition Video Is A video Of Higher Resolution And Quality Than Standard Definition.</h6>
        </div>
        <div className="box">
            <h2>Affordable Prices</h2>
            <h6>High-Definition Video is Video of Higher Resolution And Quality Than Standard Definition. While There's No Standard Meaning For High Definition. Hight Definition Video Is A video Of Higher Resolution And Quality Than Standard Definition.</h6>
        </div>
    </div>
    </div>
</div>
<div className="courses">
    <div className="text4">
        <h1 id="browse">
            Browse Our Popular Courses
        </h1>
        <h6 id="high2">
            High-Definition Video is Video of Higher Resolution And Quality Than Standard Definition. While There's No Standard Meaning For High Definition , Generally Any Standard Video Image.
        </h6>
        <div className="btns">
            <button className="btn1">All Categories</button>
            <button className="btn1">Design</button>
            <button className="btn1">Development</button>
            <button className="btn1">Marketing</button>
        </div>
    </div>

    <div className="components">
        <Course 
        pic={Pic}
        category="Designs"
        rating="4.7k  (32.7k+)"
        intro="Introduction to user research in ux design"
        time="23hrs 50 mins"
        lesson="15 Lessons"
        tutor={Pic}
        tutorname="Leonard Victor"
        price="$15.00"
        />
        <Course 
        pic={Pic}
        id="marborder"
        category="Marketing"
        rating="4.7k  (8.7k+)"
        intro="Introduction to new marketing"
        time="22hrs 30 mins"
        lesson="22 Lessons"
        tutor={Pic}
        tutorname="Jeffrey Williams"
        price="$32.00"
        />
        <Course 
        pic={Pic}
        id="dev1border1"
        category="Development"
        rating="4.7k  (12.7k+)"
        intro="Introduction to HTML, CSS & Bootstrap"
        time="45hrs 50 mins"
        lesson="55 Lessons"
        tutor={Pic}
        tutorname="Claretta Mason"
        price="$55.00"
        />
        <Course 
        pic={Pic}
        id="dev2border1"
        category="Desvelopment"
        rating="4.7k (32.7k+)"
        intro="Introduction to javascript, Git & Github"
        time="30hrs 50 mins"
        lesson="22 Lessons"
        tutor={Pic}
        tutorname="Jessica Duke"
        price="$45.00"
        />
        <Course 
        pic={Pic}
        id="marborder"
        category="Marketing"
        rating="4.7k  (4.7k+)"
        intro="Introduction to Introduction to outroom marketing analysis"
        time="33hrs 50 mins"
        lesson="26 Lessons"
        tutor={Pic}
        tutorname="Samuel Jacobs"
        price="$25.00"
        />
        <Course 
        pic={Pic}
        id="marborder2"
        category="Marketing"
        rating="4.7k  (15.7k+)"
        intro="Introduction to live marketing analysis"
        time="10hrs 50 mins"
        lesson="32 Lessons"
        tutor={Pic}
        tutorname="Adam Smith"
        price="$25.00"
        />
    </div>
</div>
</div>
    )
}