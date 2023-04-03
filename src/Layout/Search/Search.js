import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Search = ({ setResults }) => {
  const [input, setInput] = useState();

  const fetchData = (value) => {
    const data = fetch("https://restcountries.com/v2/all")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((coun) => {
          return (
            coun &&
            coun.name &&
            coun.name.toLowerCase().includes(value.toLowerCase())
          );
        });
        setResults(results);
      });
    return data;
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div>
      <FaSearch />
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default Search;
