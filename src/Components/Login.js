import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [login, setLogin] = useState({});
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("user") === null) {
      navigate("../login");
    }
  }, [navigate]);

  useEffect(() => {
    fetch("https://localhost:5001/api/SEC_User")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return (
    <div className="backgroundColorBlue login">
      <div className="container mb-2">
        <div className="text-center">
          <h2 className="mb-5">Program List</h2>
        </div>
        <div className="content my-3 container backgroundColorBlueLite w-50">
          <div
            class="alert alert-danger"
            id="loginAlert"
            role="alert"
            style={{ visibility: "hidden" }}
          >
            <strong>Alert!</strong> Invalid User Name or Password
          </div>
          <form className="form-group mb-3" method="post">
            <h3 class="form-title text-center font-green my-3">Sign In</h3>
            <div class="form-group">
              <label for="exampleFormControlInput1" class="form-label">
                User Name
              </label>
              <input
                type="text"
                class="form-control"
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
                  users.map((user) => {
                    if (user.user_Name === login.name && user.user_Password === login.pass) {
                      sessionStorage.setItem("user", JSON.stringify(user));
                      navigate("../");
                    }
                    return(
                      <></>
                    )
                  });
                  document.getElementById("loginAlert").style.visibility =
                    "visible";
                }}
              >
                Login
              </button>
            </div>
          </form>
          <form class="form-group mb-3">
            <div class="form-actions text-center">
              {/* <h5>Don't Have Account ?</h5>
              <button class="signup my-3 rounded-3">Sign Up</button> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
