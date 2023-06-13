import "./style.css";
import { Welcome } from "./Components/Welcome"
import { Input } from "./Components/Input"

function Signup (){
return(
    <div className="App">
        <Welcome sign="Sign up"/>
       <Input 
       label="First name"
       type={"text"}/>
       <Input 
       label="User name"
       type={"text"}/>
       <Input 
       label="email"
       type={"email"}/>
       <Input 
       label="Password"
       type={"password"}/>
       <Input 
       label="Confirm password"
       type={"password"}/>
    </div>
)
}

export default Signup;