import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [login, setLogin] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("useName") === null) {
      navigate("../login");
    }
  }, [navigate])


  return (
      <div className="backgroundColorBlue login">
        <div className="container mb-2">
          <div className="text-center">
            <h2 className="mb-5">Program List</h2>
          </div>
          <div className="content my-3 container backgroundColorBlueLite w-50">
            <form className="form-group mb-3" method="post">
              <h3 class="form-title text-center font-green">Sign In</h3>
              <div class="form-group">
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
              <div class="form-group my-2">
                <label for="exampleFormControlInput1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control form-control-solid placeholder-no-fix"
                  id="exampleFormControlInput1"
                  placeholder="Password"
                  value={login.pass}
                  onChange={(e) => {
                    setLogin({ ...login, pass: e.target.value });
                  }}
                />
              </div>
              <div className="form-group my-2 text-center">
                <button
                  type="submit"
                  className="loginBtn my-3 rounded-3"
                  onClickCapture={(e) => {
                    e.preventDefault();
                    if (login.name === "admin" && login.pass === "a") {
                      navigate("../");
                    }
                    sessionStorage.setItem("useName", login.name);
                  }}
                >
                  Login
                </button>
              </div>
            </form>
            <form class="form-group mb-3">
              <div class="form-actions text-center">
                <h5>Don't Have Account ?</h5>
                <button class="signup my-3 rounded-3">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
};

export default Login;
