import { useRouteError } from "react-router-dom";

const Error=()=>{
    const error=useRouteError();
    return(
        <div className="error">
            <h1>Ooops!!!</h1>
            <h2>Something went wrong...</h2>
            <h3>Error Status:{error.status}</h3>
            <h3>{error.statusText}</h3>
        </div>
    )
}

export default Error;