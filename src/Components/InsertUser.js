import React, { useEffect } from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const InsertUser = () => {
  
  const [newUser, setNewUser] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    if( sessionStorage.getItem("useName") === null ){
      navigate("../login");
    }
  }, [navigate])

  return (
    <div className="main my-5 mx-5 w-75">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          User Name
        </label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="User Name"
          value={newUser.user_Name}
          onChange={(e) => {
            setNewUser({ ...newUser, user_Name: e.target.value });
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
          value={newUser.user_Password}
          onChange={(e) => {
            setNewUser({ ...newUser, user_Password: e.target.value });
          }}
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Email Address
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Email Address"
          value={newUser.user_EmailAddress}
          onChange={(e) => {
            setNewUser({ ...newUser, user_EmailAddress: e.target.value });
          }}
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Mobile Number
        </label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Mobile Number"
          value={newUser.user_MobileNumber}
          onChange={(e) => {
            setNewUser({ ...newUser, user_MobileNumber: e.target.value });
          }}
        />
      </div>
      <div class="mb-3">
        <button type="submit" className="mx-5 btn btn-outline-success" 
          onClick={(e) => {
            e.preventDefault();
            fetch(`https://localhost:5001/api/SEC_User/`, {
              method: "POST",
              headers: { 
                  "Accept":"application/json",
                  "Content-type": "application/json" 
              },
              body: JSON.stringify(newUser),
              })
              .then((r) => r.json())
              .then((res) => {
              })
              .catch((e)=>{
                console.warn(e);
              })
  
              setNewUser({
              ...newUser,
              user_Name: "",
              user_EmailAddress: "",
              user_MobileNumber: "",
              user_Password: ""
            });
          }}
        >
          Add
        </button>
        <button type="submit" className="btn btn-outline-danger"
         onClick={(e)=>{
            navigate("./../../");
         }}
        >
          Cancel
        </button>
      </div>
    </div>
  )
}

export default InsertUser
