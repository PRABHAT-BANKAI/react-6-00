import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState({});

  function handleSubmit(e) {
    e.preventDefault();

    if (validation()) {
      alert("all data is complete");

      setFormData({
        userName: "",
        email: "",
        password: "",
      });
    }
    function validation() {
      let vali = true;
      let obj = {};

      if (formData.userName == "") {
        obj.userName = "Invalid userName";
        vali = false;
      }
      if (formData.email == "") {
        obj.email = "Invalid email";
        vali = false;
      }
      if (formData.password == "") {
        obj.password = "Invalid password";
        vali = false;
      }
      setError(obj);

      return vali;
    }

    console.log(formData);
  }
  return (
    <div>
      <h1>Form Registration</h1>

      <form
        onSubmit={handleSubmit}
        style={{
          border: "1px solid black",
          width: "400px",
          margin: "auto",
          height: "500px",
        }}
        action=""
      >
        <div>
          <label htmlFor="">
            User Name
            <input
              type="text"
              value={formData.userName}
              onChange={(e) => {
                setFormData({ ...formData, userName: e.target.value });
              }}
            />
          </label>
          {error.userName && (
            <p style={{ fontSize: "15px", color: "red" }}>{error.userName}</p>
          )}
        </div>
        <div>
          <label htmlFor="">
            Email
            <input
              type="text"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
              }}
            />
          </label>
          {error.email && (
            <p style={{ fontSize: "15px", color: "red" }}>{error.email}</p>
          )}
        </div>
        <div>
          <label htmlFor="">
            Password
            <input
              type="text"
              value={formData.password}
              onChange={(e) => {
                setFormData({ ...formData, password: e.target.value });
              }}
            />
          </label>
          {error.password && (
            <p style={{ fontSize: "15px", color: "red" }}>{error.password}</p>
          )}
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
