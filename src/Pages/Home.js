import React from "react";
import Banner from "../Layout/Banner/Banner";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div>
      <div className={classes.banner}>
        <Banner />
      </div>
      <div className={classes.content}>
        <p>Text</p>
      </div>
    </div>
  );
};

export default Home;
