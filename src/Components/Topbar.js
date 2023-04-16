import React from "react";
import { useNavigate } from "react-router-dom";

const Topbar = () => {

    const naviagate = useNavigate();

    const toggleMenu = ()=>{
        let toggle = document.querySelector('.toggle');
        let navigation = document.querySelector('.navigation');
        let main = document.querySelector('.main');
        toggle.classList.toggle('active');
        navigation.classList.toggle('active');
        main.classList.toggle('active');
    }

  return (
    <div>
      <div class="topbar">
        <div class="toggle" onClick={toggleMenu}></div>
        <div class="logoName">
          <div class="logo">
            {/* <ion-icon class="ion" name="book-outline"></ion-icon> */}
          </div>
          <div class="name">ProgramList</div>
        </div>
        <div>
          <button class="logout btn border-0 text-primary" onClick={(e)=>{
            sessionStorage.clear();
            naviagate("./login");
          }}>
            <ion-icon name="log-out-outline"></ion-icon>
          </button>
        </div>
        <div class="user">
          <ion-icon name="person-circle-outline"></ion-icon>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
