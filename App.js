import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement =>  Object => HTMLElement(render)

const heading = React.createElement("h1",{id:"heading"},"This is React's Magic!!!");

// JSX - HTML like syntax - Not HTML or Not part of react
// JSX transpiles to React.createElement => React Element => JS Object


const jsxHeading = <h1 id="headings">This JSX React!!!</h1>;

// Functional Component


const Heading2 = ()=>{
    return <h2 id="heading2">This is inside... Component Composition</h2>
}


const Heading = ()=>{
    return (<div id="container">
        <h1 id="heading">This is Functional Component</h1>
        <Heading2/>
        {Heading2()}
        </div>)
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading/>);

