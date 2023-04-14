import React from "react";

const Home = () => {

    let cardNumbers = document.querySelectorAll(".cardNumber");
    let interval = 1000;

    cardNumbers.forEach((cardNumber) =>{
        let startValue = 0;
        let endValue = parseInt( cardNumber.getAttribute("data-val" ));
        let duration;
        duration = Math.floor(interval / endValue);
        let counter = setInterval(()=>{
            startValue += 1;
            cardNumber.textContent = startValue;
            if (endValue === 0){
                cardNumber.textContent = 0;
                clearInterval(counter);
            }
            if( startValue === endValue ){
                clearInterval(counter);
            }
        },duration);
    })

  return (
    <div>
      <div class="cardBox">
        <div class="card">
          <div>
            <div class="cardNumber" data-val="10">
              10
            </div>
            <div class="cardName">Array</div>
          </div>
          <div class="cardIcon">
            <ion-icon name="location-outline"></ion-icon>
          </div>
        </div>
        <div class="card">
          <div>
            <div class="cardNumber" data-val="15">
              15
            </div>
            <div class="cardName">Graph</div>
          </div>
          <div class="cardIcon">
            <ion-icon name="location-outline"></ion-icon>
          </div>
        </div>
        <div class="card">
          <div>
            <div class="cardNumber" data-val="20">
              20
            </div>
            <div class="cardName">Tree</div>
          </div>
          <div class="cardIcon">
            <ion-icon name="location-outline"></ion-icon>
          </div>
        </div>
        <div class="card">
          <div>
            <div class="cardNumber" data-val="25">
              14
            </div>
            <div class="cardName">Bit Manipulation</div>
          </div>
          <div class="cardIcon">
            <ion-icon class="ion" name="copy-outline"></ion-icon>
          </div>
        </div>
        <div class="card">
          <div>
            <div class="cardNumber" data-val="30">
              12
            </div>
            <div class="cardName">Linked List</div>
          </div>
          <div class="cardIcon">
            <ion-icon name="person-outline"></ion-icon>
          </div>
        </div>
        <div class="card">
          <div>
            <div class="cardNumber" data-val="50">
              50
            </div>
            <div class="cardName">Total Questions</div>
          </div>
          <div class="cardIcon">
            <ion-icon name="people-outline"></ion-icon>
          </div>
        </div>
      </div>
      <div class="homePart">
        <div class="userFeedback">
          <h4>User Ratings</h4>
          <table
            class="table text-center my-3"
            cellpadding="40px"
            cellspacing="40px"
          >
            <thead>
              <tr>
                <th scope="col">User</th>
                <th scope="col">Rating</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Yash Daxini</td>
                <td>
                  <span>
                    <ion-icon name="star" class="star"></ion-icon>
                  </span>
                  <span>
                    <ion-icon name="star" class="star"></ion-icon>
                  </span>
                  <span>
                    <ion-icon name="star" class="star"></ion-icon>
                  </span>
                  <span>
                    <ion-icon name="star" class="star"></ion-icon>
                  </span>
                  <span>
                    <ion-icon name="star" class="star"></ion-icon>
                  </span>
                </td>
              </tr>
              <tr>
                <td>Allan Smith</td>
                <td>
                  <span>
                    <ion-icon name="star" class="star"></ion-icon>
                  </span>
                  <span>
                    <ion-icon name="star" class="star"></ion-icon>
                  </span>
                  <span>
                    <ion-icon name="star" class="star"></ion-icon>
                  </span>
                  <span>
                    <ion-icon name="star" class="star"></ion-icon>
                  </span>
                  <span>
                    <ion-icon name="star" class="star"></ion-icon>
                  </span>
                </td>
              </tr>
              <tr>
                <td>Amit Shroff</td>
                <td>
                  <span>
                    <ion-icon name="star" class="star"></ion-icon>
                  </span>
                  <span>
                    <ion-icon name="star" class="star"></ion-icon>
                  </span>
                  <span>
                    <ion-icon name="star" class="star"></ion-icon>
                  </span>
                  <span>
                    <ion-icon name="star" class="star"></ion-icon>
                  </span>
                  <span>
                    <ion-icon name="star-half" class="star"></ion-icon>
                  </span>
                </td>
              </tr>
              <tr>
                <td>Darshan Uni.</td>
                <td>
                  <span>
                    <ion-icon name="star" class="star"></ion-icon>
                  </span>
                  <span>
                    <ion-icon name="star" class="star"></ion-icon>
                  </span>
                  <span>
                    <ion-icon name="star" class="star"></ion-icon>
                  </span>
                  <span>
                    <ion-icon name="star" class="star"></ion-icon>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="recentUser">
          <h4>Recent User</h4>
          <table
            class="table text-center my-3"
            cellpadding="40px"
            cellspacing="40px"
          >
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span>
                    <ion-icon class="text-info" name="person"></ion-icon>
                  </span>
                </td>
                <td>Yash Daxini</td>
              </tr>
              <tr>
                <td>
                  <span>
                    <ion-icon class="text-warning" name="person"></ion-icon>
                  </span>
                </td>
                <td>Allan Smith</td>
              </tr>
              <tr>
                <td>
                  <span>
                    <ion-icon class="text-prinmary" name="person"></ion-icon>
                  </span>
                </td>
                <td>Amit Shroff</td>
              </tr>
              <tr>
                <td>
                  <span>
                    <ion-icon class="text-danger" name="person"></ion-icon>
                  </span>
                </td>
                <td>Darshan Uni.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
