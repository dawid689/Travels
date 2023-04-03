import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FavItem from "./FavItem";
import classes from "./Countries.module.css";

const FavList = () => {
  const addedToFav = useSelector((state) => state.favorites.favoritesArray);
  // const [fav, setFav] = useState(addedToFav);
  const [fav, setFav] = useState([]);

  const fetchDataAddedToFaveStore = (addedToFav) => {
    console.log("w fetch: " + addedToFav);
    const data = fetch("https://restcountries.com/v2/all")
      .then((response) => response.json())
      .then((json) => {
        addedToFav.forEach((favInStore) => {
          const toDisplay = json.filter((coun) => {
            return coun && coun.name && coun.name === favInStore;
          });
          console.log("To display: " + toDisplay);
          setFav((prev) => {
            const new1 = prev.concat(toDisplay);
            return new1;
          });
        });
      });
    return data;
  };

  useEffect(() => {
    fetchDataAddedToFaveStore(addedToFav);
    console.log("useEffect fav: " + fav);
  }, []);

  return (
    <div>
      <div>
        {/* {addedToFav}{" "} */}
        <div className={classes.app}>
          {fav
            ? fav.map((c, idx) => (
                <FavItem
                  key={idx}
                  name={c.name}
                  flag={c.flag}
                  region={c.region}
                  subregion={c.subregion}
                  capital={c.capital}
                  languages={c.languages}
                  currencies={c.currencies}
                  // setFav={setFav}
                  // addedToFav={addedToFav}
                />
              ))
            : ""}
        </div>
        {/* map to create new items with new properties */}
      </div>
    </div>
  );
};

export default FavList;
