import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";


class About extends Component{
    constructor(props){
        super(props);
        console.log("Parent Constructor");
    }

    componentDidMount(){
        console.log("Parent Componet Did Mount");
    }

    render(){
        console.log("Parent Render");
        return(
            <div className="about">
                <h1>About Us</h1>
                <h2>This is about us page</h2>
            <User name={"Shamshad Ahammad (function)"} location={"Vadakara (function)"}/>
            <UserClass name={"First"} location={"Vadakara (class)"}/>
            <UserClass name={"Second"} location={"Vadakara (class)"}/>
            <UserClass name={"Third"} location={"Vadakara (class)"}/>
            </div>
        )
    }
}

export default About;