import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count:0
        }
        console.log(this.props.name+" Child Constructor")
    }

    componentDidMount(){
        console.log(this.props.name+" Child Component Did Mount");
    }

    render(){
        console.log(this.props.name+" Child Render");
        const {name,location} = this.props;
        const {count} = this.state;
        return (
            <div className="user-card">
                <h5>Count : {count}</h5>
                <button onClick={()=>{
                    this.setState({
                        count:count+1
                    })
                }}>Increment Count</button>
                <h2>{name}</h2>
                <h2>{location}</h2>
                <h3>shamshad@gmail.com</h3>
            </div>
        )
    }
}

export default UserClass;