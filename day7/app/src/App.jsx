import React, { useState } from "react";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [show,setShow]=useState("")
  console.log(inputText)
  function handleShow(){
    setShow(inputText)
    setInputText("")
  }
  return (
    <div>
      <h1>Controlled component</h1>
      <input type="text" value={inputText} onChange={(e)=>{setInputText(e.target.value)}} />
      <p>{show}</p>
      <button onClick={handleShow}>show</button>
    </div>
  );
};

export default App;
