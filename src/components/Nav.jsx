import React from "react";
import Datetime from "./Datetime";
import "./nav.scss";
const Nav = () => {
  return (
    <nav>
      <div className="left">
        <div className="apple-icon">
          <img src="./navbar-icons/apple.svg" alt="" />
        </div>
        <div className="nav-item">
          <p>Umesh Tare</p>
        </div>
        <div className="nav-item">
          <p>file</p>
        </div>
        <div className="nav-item">
          <p>window</p>
        </div>
        <div className="nav-item">
          <p>terminal</p>
        </div>
      </div>
      <div className="right">
        <div className="nav-icon">
          <img src="./navbar-icons/wifi.svg" alt="" />
        </div>
        <div className="nav-item">
          <Datetime />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
