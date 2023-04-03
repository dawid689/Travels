import React, { Fragment } from "react";
import { Route, Routes } from "react-router";
import AllCountries from "./Pages/AllCountries";
import Home from "./Pages/Home";
import Header from "./Layout/Header";
import Favorites from "./Pages/Favorites";

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/all" element={<AllCountries />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
      </Routes>
      <div></div>
    </Fragment>
  );
}

export default App;
