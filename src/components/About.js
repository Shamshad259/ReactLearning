import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";


class About extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="about">
                <h1>About Us</h1>
                <h2>This is about us page</h2>
            <User name={"Shamshad Ahammad (function)"} location={"Vadakara (function)"}/>
            <UserClass />
            </div>
        )
    }
}

export default About;