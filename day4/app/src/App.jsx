import React, { useState } from "react";
import StudentsCard from "./components/StudentsCard";
import Product from "./components/Product";

const App = () => {
  const [count, setCount] = useState(0);
  const [boolean, setBoolean] = useState(false);

  const [student, setStudent] = useState({
    studentName: "batman",
    class: "12th",
    subject: "maths",
  });

  function handleDarkMode() {
    setBoolean(!boolean);
  }

  return (
    <div className={boolean ? "font-white" : "font-black"}>
      <button onClick={handleDarkMode}>Dark Mode</button>
      <p>Count:{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        increment
      </button>
      <button
        disabled={count == 0}
        onClick={() => {
          setCount(count - 1);
        }}
      >
        decrement
      </button>
      <br />
      <StudentsCard studentData={student} />
      <StudentsCard
        studentData={{
          studentName: "superman",
          class: "11th",
          subject: "science",
        }}
      />
      <StudentsCard
        studentData={{
          studentName: "ironman",
          class: "10th",
          subject: "chemistry",
        }}
      />

      <Product title={"adidas"} price={"2999"} />
      <Product title={"nike"} price={"29999"} />
      <Product title={"reebok"} price={"9999"} />
    </div>
  );
};

export default App;
