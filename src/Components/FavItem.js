import React from "react";
import { useDispatch } from "react-redux";
import { remove } from "../Store/favoritesSlice";
import classes from "./CountryItem.module.css";

const CountryItem = (props) => {
  const dispatch = useDispatch();

  //   const handle = (e) => {
  //     dispatch(remove(e.target.value));
  //     props.setFav(props.addedToFav);
  //   };

  return (
    <React.Fragment>
      <div className={classes.rows} key={props.key_k}>
        <div className={classes.columns}>
          <div className={classes.content}>
            <div className={classes.main}>
              <h5>{props.name}</h5>
              <div>
                <img src={props.flag} alt=""></img>
              </div>
              <button
                value={props.name}
                // value={addToFav}
                onClick={(e) => dispatch(remove(e.target.value))}
                // removing on the page after pressing //todo
                // onClick={(e) => handle(e)}
              >
                Remove
              </button>
            </div>
            <div className={classes.details}>
              <h6>Region: {props.region}</h6>
              <h6>Subregion: {props.subregion}</h6>
              <h6>{props.capital ? "Capital: " + props.capital : ""}</h6>
              <h6>
                Languages:{" "}
                {props.languages
                  ? props.languages
                      .slice(0, 5)
                      .map((l, idx) => <p key={idx}>{l.name}</p>)
                  : ""}
              </h6>
              <h6>
                Currencies:{" "}
                {props.currencies
                  ? props.currencies
                      .slice(0, 5)
                      .map((curr, idx) => <p key={idx}>{curr.name}</p>)
                  : ""}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CountryItem;
