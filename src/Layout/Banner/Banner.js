import React from "react";
import one from "../../assets/1.jpg";
import two from "../../assets/2.jpg";
import three from "../../assets/3.jpg";
import four from "../../assets/4.jpg";
import palmTree from "../../assets/palm-tree.jpg";
import bora from "../../assets/palm-tree-bora.jpg";
import boats from "../../assets/boats.jpg";
import Carousel from "react-bootstrap/Carousel";
import classes from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={classes.box}>
      <Carousel className={classes.banner}>
        <Carousel.Item>
          <img className="d-block w-100" src={one} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={two} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={three} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={four} alt="Third slide" />

          <Carousel.Caption>
            <h3>Fourth slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className={classes.right}>
        <h5>This is our travels app!</h5>
        <p>
          You'll find here some pics and infos about countries and specific
          places!
        </p>
        <p>Check our page and share your info with us!</p>
      </div>
      <div className={classes.palmTree}>
        <img src={palmTree} alt="" />
      </div>
      <div className={classes.boats}>
        <img src={boats} alt="" />
      </div>
      <div className={classes.bora}>
        <img src={bora} alt="" />
      </div>
    </div>
  );
};

export default Banner;
