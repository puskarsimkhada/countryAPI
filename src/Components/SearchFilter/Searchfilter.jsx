import React, { useState } from "react";
import "../SearchFilter/Searchfilter.css";

const Searchfilter = ({
  inputValue,
  handleSearch,
  selectedRegion,
  handleSelected,
}) => {
  const handleSearchChange = (e) => {
    e.preventDefault();
    handleSearch(e.target.value);
  };
  const handleSelectedRegion = (e) => {
    handleSelected(e.target.value);
  };

  return (
    <>
      <div className="filter-box">
        <div className="search">
          <div className="input-field">
            <i className="fa-solid fa-magnifying-glass searchIcon"></i>
            <input
              type="text"
              className="inputData"
              placeholder="Search for a country..."
              value={inputValue}
              onChange={handleSearchChange}
            />
          </div>
          <div className="drop">
            <select
              name="dropdown"
              id="dropdown"
              className="filterDrop"
              value={selectedRegion}
              onChange={handleSelectedRegion}
            >
              <option value="" >
                Filter by Region
              </option>
              <option value="Asia">Asia</option>
              <option value="Africa">Africa</option>
              <option value="America">America</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Searchfilter;
