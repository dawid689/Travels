import React from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.left}>
        <span>
          <Link to="/">CountriesAPP</Link>
        </span>
      </div>
      <div className={classes.right}>
        <span>
          <Link to="/all">List of Countries</Link>
        </span>
        <span>
          <Link to="/favorites">Favorites</Link>
        </span>
      </div>
    </div>
  );
};

export default Header;
