import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <FontAwesomeIcon icon={faHouse} className="icon" />
      <h1>Surreal Estate </h1>
      <ul className="navbar-links">
        <li className="navbar-links-items">
          <Link to="/">View Properties</Link>
        </li>
        <li className="navbar-links-items">
          <Link to="/add-property">Add a Property</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
