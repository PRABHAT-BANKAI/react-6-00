import React, { useState } from "react";
import Child from "./components/Child";

const App = () => {
  const [count, setCount] = useState(0); //[0,function]

  function handleInc() {


    setCount(count + 1);//setState helps in change value and update
  }
  function handleDec() {
    setCount(count - 1);
  }
  return (
    <div style={{color:"red",backgroundColor:"yellow",textAlign:"center"}}>
      <p>count:{count}</p>
      <button onClick={handleInc}>increment</button>
      <button disabled={count == 0} onClick={handleDec}>Decrement</button>
      <Child/>
    </div>
  );
};

export default App;
