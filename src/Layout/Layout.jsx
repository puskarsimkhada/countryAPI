import React from "react";
import Navigationbar from "./Navigation/Navigationbar";
import Searchfilter from "../Components/SearchFilter/Searchfilter";
import Countrydata from "../Components/CountryData/Countrydata";
import Home from "../Components/Home";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <Navigationbar></Navigationbar>
      {/* <Home></Home> */}
      <main>
        <Outlet></Outlet>
      </main>
      {/* <Searchfilter></Searchfilter>
      <Countrydata></Countrydata> */}
    </>
  );
};

export default Layout;
