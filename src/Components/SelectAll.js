import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const SelectAll = () => {
  const navigate = useNavigate();
  const [programObj, setProgramObj] = useState([]);
  const [topicObj, setTopicObj] = useState([]);
  const [filterObj, setFilterObj] = useState({});

  useEffect(() => {
    if (sessionStorage.getItem("useName") === null) {
      navigate("../login");
    }
  }, [navigate]);

  useEffect(() => {
    fetch(`https://localhost:5001/api/MST_ProgramTopic/`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTopicObj(data);
      })
      .catch((e) => {});
  }, []);

  useEffect(() => {
    fetch(`https://localhost:5001/api/MST_Program/`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProgramObj(data);
      })
      .catch((e) => {});
  }, []);

  const fetchUsingFilter = () => {
    if (filterObj.program_Name === "" || filterObj.program_Difficulty === "") {
    } else {
      fetch(
        `https://localhost:5001/api/MST_Program/getByFilter/${filterObj.program_Name}/${filterObj.program_Difficulty}`
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setProgramObj(data);
          filterObj.program_Name = "all";
          filterObj.program_Difficulty = "all";
        })
        .catch((e) => {});
    }
  };

  const Delete = (id) => {
    fetch(`https://localhost:5001/api/MST_Program/${id}`, {
      method: "DELETE",
    }).then((resp) => {
      navigate("../SelectAll");
    });
  };

  const allPrograms = programObj.map((program) => {
    return (
      <>
        <tr>
          <td>
            <Link
              to={"./SelectByID/" + program.id}
              style={{ textDecoration: "none" }}
            >
              {program.program_Name}
            </Link>
          </td>
          <td>{program.program_Topic}</td>
          <td>
            <Link to={program.program_Link} target="_blank">
              <ion-icon name="link-outline"></ion-icon>
            </Link>
          </td>
          <td>
            <Link to={program.program_SolutionLink} target="_blank">
              <ion-icon name="link-outline"></ion-icon>
            </Link>
          </td>
          <td>{program.program_Difficulty}</td>
          <td>
            <button className="btn btn-outline-info">
              <Link
                to={"./UpdateByID/" + program.id}
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
                Delete(program.id);
              }}
            >
              <ion-icon name="trash-outline"></ion-icon>
            </button>
          </td>
        </tr>
      </>
    );
  });
  
  const allTopicsName = topicObj.map((topicObj) => {
    return (
      <>
        <option>{topicObj.topic_Name}</option>
      </>
    );
  });

  return (
    <div className="selectAll main">
      <div className="d-flex justify-content-between">
        <div>
          <h1>Programs</h1>
        </div>
        <div className="d-flex justify-content-center w-50">
          <select
            className="form-control m-2"
            value={filterObj.program_Name}
            onChange={(e) => {
              setFilterObj({ ...filterObj, program_Name: e.target.value });
            }}
          >
            <option>Select Topic Name</option>
            {allTopicsName}
          </select>
          <select
            className="form-control m-2"
            value={filterObj.program_Difficulty}
            onChange={(e) => {
              setFilterObj({
                ...filterObj,
                program_Difficulty: e.target.value,
              });
            }}
          >
            <option>Select Difficulty</option>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
          <button
            className="btn btn-outline-success"
            onClick={(e) => {
              fetchUsingFilter();
            }}
          >
            Get
          </button>
        </div>
        <div>
          <Link className="successBtn rounded-3" to={"../Insert"}>
            <ion-icon name="add-outline"></ion-icon>
          </Link>
        </div>
      </div>
      <div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Topic</th>
              <th scope="col">Program Link</th>
              <th scope="col">Solution Link</th>
              <th scope="col">Difficulty</th>
              <th scope="col" colSpan={2}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>{allPrograms}</tbody>
        </table>
      </div>
    </div>
  );
};

export default SelectAll;
