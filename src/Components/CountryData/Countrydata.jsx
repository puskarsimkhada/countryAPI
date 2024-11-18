import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../CountryData/Countrydata.css";
import countryFlag from "../../Pictures/ind.png";
import Searchfilter from "../SearchFilter/Searchfilter";
const Countrydata = ({ country }) => {
  return (
    <>
      <div className="country-data">
        {Object.entries(country).map(([index, countryData]) => (
          <div className="country-box" key={index}>
            <Link to={`/name/${countryData.name.common}`}>
              <img
                src={countryData.flags.png}
                alt="India"
                className="flagImg"
              />
            </Link>
            <div className="des">
              <h2>
                <Link
                  to="/${countryData.name.common}"
                  className="country-title"
                >
                  {countryData.name.common}
                </Link>
              </h2>
              <p>
                Population: <span>{countryData.population}</span>
              </p>
              <p>
                Region: <span>{countryData.region}</span>
              </p>
              <p>
                Capital : <span>{countryData.capital}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Countrydata;
