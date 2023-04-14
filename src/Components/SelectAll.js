import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const SelectAll = () => {
  
  const [programObj, setProgramObj] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://localhost:5001/api/MST_Program")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProgramObj(data);
      })
      .catch((e) => {});
  }, [programObj]);

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

  return (
    <div className="selectAll main">
      <h1>Programs</h1>
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
