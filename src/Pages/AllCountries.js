import React, { useState } from "react";
import Countries from "../Components/Countries";
import Search from "../Layout/Search/Search";

const AllCountries = () => {
  const [results, setResults] = useState([]);

  return (
    <div>
      {/* longer props chaining worked well too */}
      <Search setResults={setResults} />
      <Countries results={results} />
    </div>
  );
};

export default AllCountries;
