import React, { Fragment } from "react";
import { useEffect, useState } from "react";
import classes from "./Countries.module.css";
import CountryItem from "./CountryItem";
// import Modal from "../UI/Modal";

const Countries = ({ results }) => {
  const [countries, setCountries] = useState();
  // const [isCountrySelected, setIsCountrySelected] = useState(null);

  // the following two features will be used to display the modal
  // const selectCountry = (country) => {
  //   country.preventDefault();
  //   setIsCountrySelected(country.target);
  // };

  // const unselectCountry = () => {
  //   setIsCountrySelected(null);
  // };

  const fetchData = async () => {
    const data = await fetch("https://restcountries.com/v2/all");
    const dataJson = await data.json();
    setCountries(dataJson);
    if (results.length > 0) {
      setCountries(results);
    }
    // the above code doesn't work in useEffect hook after fetchData function
    return dataJson;
  };

  useEffect(() => {
    fetchData().then((res) => console.log(res));
  }, [results]);

  return (
    <Fragment>
      {/* {isCountrySelected && ( // should it be passed to CountryItem?
        <Modal onClose={unselectCountry}>
          <CountryItem />
        </Modal>
      )} */}
      <div className={classes.app}>
        {countries
          ? countries.map((c, idx) => (
              <CountryItem
                key={idx}
                name={c.name}
                // flag={c.flags.png}
                flag={c.flag}
                region={c.region}
                subregion={c.subregion}
                capital={c.capital}
                languages={c.languages}
                currencies={c.currencies}
                // onSelectCountry={selectCountry}
                // onUnselectCountry={unselectCountry}
                // countrySelected={isCountrySelected}
              />
            ))
          : ""}
      </div>
    </Fragment>
  );
};

export default Countries;
