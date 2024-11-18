import React from "react";
// import Navigationbar from "./Components/Navigation/Navigationbar";
// import Searchfilter from "./Components/SearchFilter/Searchfilter";
// import Countrydata from "./Components/CountryData/Countrydata";
import Layout from "./Layout/Layout";
import Home from "./Components/Home";
import Countrydetail from "./Components/Countrydetail/Countrydetail";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout></Layout>}>
            <Route path="/" element={<Home></Home>}></Route>
            <Route
              path="/name/:countryName"
              element={<Countrydetail></Countrydetail>}
            ></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
