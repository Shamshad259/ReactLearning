import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      userInfo: {
        name: "",
        location: "",
      },
    };
    console.log("Constructor")
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Shamshad259");
    const json = await data.json();
    this.setState({
        userInfo:json
    });
    console.log("Component Did Mount")
  }

  componentDidUpdate(){
    console.log("Updated");
  }

  componentWillUnmount(){
    console.log("Component will unmount");
  }

  render() {
    console.log("Child Render");
    const { name, location } = this.state.userInfo;
    const { count } = this.state;
    return (
      <div className="user-card">
        <h5>Count : {count}</h5>
        <button
          onClick={() => {
            this.setState({
              count: count + 1,
            });
          }}
        >
          Increment Count
        </button>
        <h2>{name}</h2>
        <h2>{location}</h2>
        <h3>shamshad@gmail.com</h3>
      </div>
    );
  }
}

export default UserClass;
