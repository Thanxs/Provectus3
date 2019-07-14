import React from "react";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

function Navbar(props) {
  return (
    <div className={classes.Navbar}>
      <ul>
        <li>
          <NavLink to="/" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/Contacts">Contacts</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
