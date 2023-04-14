import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [login, setLogin] = useState({});

  const naviagate = useNavigate();

  return (
    <div className="d-flex justify-content-center align-items-center w-100 my-5">
      <div className="w-50 my-5">
        <h1> Login </h1>
        <div class="mb-3 my-5">
          <label for="exampleFormControlInput1" class="form-label">
            User Name
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="User Name"
            value={login.name}
            onChange={(e) => {
              setLogin({ ...login, name: e.target.value });
            }}
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Password"
            value={login.pass}
            onChange={(e) => {
              setLogin({ ...login, pass: e.target.value });
            }}
          />
        </div>
        <div className="mb-3">
          <button
            type="submit"
            className="btn btn-outline-success"
            onClickCapture={(e) => {
              e.preventDefault();
              if (login.name === "admin" && login.pass === "a") {
                naviagate("../");
              }
            }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
