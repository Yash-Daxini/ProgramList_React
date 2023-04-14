import React from 'react';
import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

const SelectAllTopic = () => {

  const [topicObj, setTopicObj] = useState([]);

//   const navigate = useNavigate();

  useEffect(() => {
    fetch("https://localhost:5001/api/MST_ProgramTopic")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTopicObj(data);
      })
      .catch((e) => {});
  }, []);

//   const Delete = (id) => {
//     fetch(`https://localhost:5001/api/MST_ProgramTopic/${id}`, {
//       method: "DELETE",
//     }).then((resp) => {
//       navigate("./SelectAllTopic");
//     });
//   };

  const allTopics = topicObj.map((topic) => {
    return (
      <>
        <tr>
          <td>
            {/* <Link
              to={"./SelectByID/" + program.id}
              style={{ textDecoration: "none" }}
            > */}
              {topic.topic_Name}
            {/* </Link> */}
          </td>
          {/* <td>
            <button className="btn btn-outline-info">
              <Link
                to={"./UpdateByID/" + topic.id}
                className="text-decoration-none"
              >
                <ion-icon name="create-outline"></ion-icon>
              </Link>
            </button>
          </td> */}
          {/* <td>
            <button
              type="submit"
              className="btn btn-outline-danger"
              onClick={(e) => {
                Delete(topic.id);
              }}
            >
              <ion-icon name="trash-outline"></ion-icon>
            </button>
          </td> */}
        </tr>
      </>
    );
  });


  return (
    <div className="selectAll main">
    <h1>Topics</h1>
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>{allTopics}</tbody>
      </table>
    </div>
  </div>
  )
}

export default SelectAllTopic
