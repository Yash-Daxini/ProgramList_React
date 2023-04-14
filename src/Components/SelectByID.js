import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const SelectByID = () => {
  const [programObj, setProgramObj] = useState([]);

  const params = useParams();

  useEffect(() => {
    fetch("https://localhost:5001/api/MST_Program/" + params.id)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProgramObj(data);
      })
      .catch((e) => {});
  }, [params.id]);

  return (
    <div className="d-flex justify-content-center align-items-center my-5">
      <div class="card">
        <div class="card-body">
          <h2 class="card-title">{programObj.program_Name}</h2>
          <h5>
            {programObj.issolved ? (
              <span className="text-success">
                {" "}
                <ion-icon name="checkmark-circle-sharp"></ion-icon>{" "}
              </span>
            ) : (
              <span></span>
            )}
          </h5>
          <h3>Topic : {programObj.program_Topic} </h3>
          <h3> Difficulty : {programObj.program_Difficulty} </h3>
          <h3>
            <Link to={programObj.program_Link} className="text-decoration-none">
              Solve Here{" "}
            </Link>
          </h3>
          <h3>
            <Link
              to={programObj.program_SolutionLink}
              className="text-decoration-none"
            >
              See Solution{" "}
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SelectByID;
