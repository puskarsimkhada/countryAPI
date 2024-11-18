import React from "react";
import countryFlag from "../../Pictures/ind.png";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../Countrydetail/Countrydetail.css";
const Countrydetail = () => {
  const { countryName } = useParams();
  const [country, setCountry] = useState({});
  console.log(countryName);

  useEffect(() => {
    const countryAPI = async () => {
      try {
        const APIURL = `https://restcountries.com/v3.1/name/${countryName}`;
        console.log(APIURL);

        const res = await fetch(APIURL);
        const data = await res.json();
        console.log(data);
        setCountry(data);
      } catch (err) {
        console.log(err);
      }
    };
    console.log(countryAPI());
    countryAPI();
  }, [countryName]);
  return (
    <>
      <div className="backbtn">
        <div className="btn">
          <Link to="/" className="back">
            <i className="fa-solid fa-arrow-left arrow"></i>
            Back
          </Link>
        </div>
      </div>

      {Object.entries(country).map(([index, countryData]) => (
        <div className="country-detail" key={index}>
          <div className="left">
            <img
              src={`${countryData.flags.png}`}
              alt="India"
              className="flagImg"
            />
          </div>
          <div className="right">
            {console.log(typeof countryData)}
            <h2>{countryData.name.common}</h2>
            <div className="middle">
              <div className="middle-left">
                <p>
                  Native Name : <span>{countryData.name.nativeName.nep?.common || countryData.name.nativeName.eng?.common || countryData.name.nativeName.ind?.common || "No Native Name Available"}</span>
                </p>
                <p>
                  Population : <span>{countryData.population}</span>
                </p>
                <p>
                  Region : <span>{countryData.region}</span>
                </p>
                <p>
                  Sub Region : <span>{countryData.subregion}</span>
                </p>
                <p>
                  Capital : <span>{countryData.capital}</span>
                </p>
              </div>
              <div className="middle-left">
                <p>
                  Top Level Domain : <span>{countryData.flag}</span>
                </p>
                <p>
                  Currency : {countryData.currencies ? Object.entries(countryData.currencies).map((cur,i) =>  <span key={i}>
                    {cur[1].name}
                    </span>) : "NO Currency"}
                </p>
                <p>
                  Language : <span>{countryData.languages?.eng || countryData.languages?.nep}</span>
                </p>
              </div>
            </div>
            <div className="bottom">
              <span>Border Countries: </span>
              <div className="bordercountry">
                {countryData.borders?.length > 0?
                  countryData.borders.map((data,i) => <Link to="/France" className="c1" key={i}>
                  {data}
                  {console.log(data)}
                </Link>)
                : "No Border Country"}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Countrydetail;
