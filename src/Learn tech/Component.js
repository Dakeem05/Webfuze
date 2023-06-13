import "./test.css"
export const Course = (props) =>{
    return(
        <div className="course">
                <img className="courseimg" src={props.pic} alt='hero' />
                <div id={props.id} className="border1">
                    <span className="category">{props.category}</span>
                    <span className="rating">{props.rating}</span>
                </div>
                <div className="coursetitle"><h2 id="intro">{props.intro}</h2></div>
                <div className="border2">
                    <span className="time">{props.time}</span>
                    <span className="lessons">{props.lesson}</span>
                </div>
                <div className="border3">
                    <span className="tutorpic"><img className="cirtutor" src={props.tutor} alt='hero' /></span>
                    <span className="tutorname">{props.tutorname}</span>
                    <span className="price">{props.price}</span>
                </div>
                </div>
    )
} ;