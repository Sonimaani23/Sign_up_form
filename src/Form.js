import "./App.css";
import React from "react";
import { useState } from "react";

function Form() {
  const [dataa, setDataa] = useState([]);
  const [formData, setFormdata] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    if (formData.password !== formData.cpassword) {
      alert("Please confirm same password");
    }

    const data = { ...formData, id: new Date().getTime().toString() };
    setDataa([...dataa, data]);
    console.log(dataa);

    setFormdata({ name: "", email: "", password: "", cpassword: "" });

    alert("Welcome " + formData.name);
  };
  return (
    <>
      <div className="sign_up">
        <p id="sign"> Sign Up</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="FullName..."
            onChange={(e) => {
              setFormdata({ ...formData, name: e.target.value });
            }}
            value={formData.name}
            name="name"
            id="name"
            required
            onInvalid={(e) =>
              e.target.setCustomValidity("You missed name here")
            }
          ></input>
          <br />
          <input
            type="email"
            //pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            placeholder="Email..."
            onChange={(e) => {
              setFormdata({ ...formData, email: e.target.value });
            }}
            value={formData.email}
            name="email"
            id="email"
            onInvalid={(e) =>
              e.target.setCustomValidity("Email is missing here")
            }
          ></input>
          <br />
          <input
            type="password"
            placeholder="Password..."
            onChange={(e) => {
              setFormdata({ ...formData, password: e.target.value });
            }}
            value={formData.password}
            name="password"
            id="password"
            onInvalid={(e) => e.target.setCustomValidity("Password is missing")}
          ></input>
          <br />
          <input
            type="password"
            placeholder="Confirm Password..."
            onChange={(e) => {
              setFormdata({ ...formData, cpassword: e.target.value });
            }}
            value={formData.cpassword}
            name="cpassword"
            id="cpassword"
          ></input>

          <br />
          <input className="sub" id="but" type="submit" />
        </form>
      </div>
    </>
  );
}

export default Form;
