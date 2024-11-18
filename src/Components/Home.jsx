import React, { useEffect, useState } from "react";
import Searchfilter from "./SearchFilter/Searchfilter";
import Countrydata from "./CountryData/Countrydata";
const Home = () => {
  const [country, setCountry] = useState({});
  useEffect(() => {
    const countryAPI = async () => {
      try {
        const APIURL = "https://restcountries.com/v3.1/all";
        const res = await fetch(APIURL);
        const data = await res.json();
        setCountry(data);
        setFilterCountryName(data);
        setSelectedRegion(data);
      } catch (err) {
        console.log(err);
      }
    };
    countryAPI();
  }, []);

  const [inputValue, setInputValue] = useState("");
  const [filterCountryName, setFilterCountryName] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('');

  const handleSearch = (data) => {
    setInputValue(data);
    if (data == "") {
      setFilterCountryName(country);
    } else {
      const filtered = country.filter((countryname) =>
        countryname.name.common.toLowerCase().includes(data.toLowerCase())
      );
      setFilterCountryName(filtered);
    }
  };
  const handleSelectedRegion = (region) => {
    const selectCountry = region;
    setSelectedRegion(selectCountry);
    if (selectCountry == "") {
      setFilterCountryName(country);
    }
    const filterRegion = country.filter((countryRegion) =>
      countryRegion.region.toLowerCase().includes(selectCountry.toLowerCase())
    );
    setFilterCountryName(filterRegion);
  };

  return (
    <>
      <Searchfilter
        inputValue={inputValue}
        handleSearch={handleSearch}
        selectedRegion={selectedRegion}
        handleSelected={handleSelectedRegion}
      ></Searchfilter>
      <Countrydata country={filterCountryName}></Countrydata>
    </>
  );
};

export default Home;
