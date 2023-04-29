import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const SelectAllUser = () => {
  const [userObj, setUserObj] = useState([]);

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
        setUserObj(data);
      })
      .catch((e) => {});
  }, [userObj]);

  const Delete = (id) => {
    fetch(`https://localhost:5001/api/SEC_User/${id}`, {
      method: "DELETE",
    }).then((resp) => {
      navigate("../SelectAllUser");
    });
  };

  const allUser = userObj.map((user) => {
    return (
      <>
        <tr>
          <td>{user.user_Name}</td>
          <td>{user.user_Password}</td>
          <td>{user.user_EmailAddress}</td>
          <td>{user.user_MobileNumber}</td>
          <td>
            <button className="btn btn-outline-info">
              <Link
                to={"./UpdateByIDUser/" + user.id}
                className="text-decoration-none"
              >
                <ion-icon name="create-outline"></ion-icon>
              </Link>
            </button>
          </td>
          <td>
            <button
              type="submit"
              className="btn btn-outline-danger"
              onClick={(e) => {
                Delete(user.id);
              }}
            >
              <ion-icon name="trash-outline"></ion-icon>
            </button>
          </td>
        </tr>
      </>
    );
  });

  return (
    <div className="selectAll main">
      <div className="d-flex justify-content-between">
        <div>
          <h1>Programs</h1>
        </div>
        <div>
          <Link className="successAddBtn rounded-3 m-2" to={"../InsertUser"}>
            <ion-icon name="add-outline"></ion-icon>
          </Link>
        </div>
      </div>
      <div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Password</th>
              <th scope="col">Email Address</th>
              <th scope="col">Mobile Number</th>
              <th scope="col" colSpan={2}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>{allUser}</tbody>
        </table>
      </div>
    </div>
  );
};

export default SelectAllUser;
