import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

import "../styles/navbar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <FontAwesomeIcon icon={faHouse} className="icon" />
      <h1>Surreal Estate </h1>
      <ul className="navbar-links">
        <li className="navbar-links-items">
          <a href="url">View Properties</a>
        </li>
        <li className="navbar-links-items">
          <a href="url">Add a Property</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
