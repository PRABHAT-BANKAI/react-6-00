import React from "react";
import Child from "./components/Child"
import "./App.css"
const App = () => {

  const userName = "batman"


  return (
    //react fragment
    <>
      <h1 style={{color:"red",backgroundColor:"yellow"}}> hello world</h1>
      <h2  style={{color:"green",backgroundColor:"black"}}>User Name :{userName} </h2>
      <Child/>
    </>

  );
};

export default App;
