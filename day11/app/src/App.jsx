import React, { useEffect, useState } from "react";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [todolist, setTodolist] = useState(
    JSON.parse(localStorage.getItem("todoData")) || []
  );

  function handleAdd() {
    if(todolist.includes(inputText)){
      alert("alreaedy exists")
      return
    }
    if (!inputText.trim()) {
      alert("you have field first task");
      return;
    }

    setTodolist([...todolist, inputText]);

    setInputText("");
  }

  function handleDelete(index) {
    let filterData = todolist.filter((element, i) => i != index);

    setTodolist(filterData);
  }

  useEffect(() => {
    localStorage.setItem("todoData", JSON.stringify(todolist));
  }, [todolist]);
  return (
    <div>
      <h1>Todolist</h1>
      <input
        type="text"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />
      <button onClick={handleAdd}>Add</button>
      <div>
        <ul>
          {todolist.map((element, index) => {
            return (
              <li key={index}>
                <p>{element}</p>
                <button
                  onClick={() => {
                    handleDelete(index);
                  }}
                >
                  Delete
                </button>
                <button>Edit</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default App;
