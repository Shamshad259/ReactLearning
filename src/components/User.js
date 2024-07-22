import {useState} from "react"

const User = (props)=>{
    const [count,setCount] = useState(0);
    const {name,location} = props;
    return (
        <div className="user-card">
            <h5>Count = {count}</h5>
            <button onClick={()=>{
                setCount(count+1);
            }}> Increment Count </button>
            <h2>{name}</h2>
            <h2>{location}</h2>
            <h3>shamshad@gmail.com</h3>
        </div>
    )
}

export default User;