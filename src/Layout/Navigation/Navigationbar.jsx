import React, { useState } from "react";
import "../Navigation/Navigationbar.css";
const Navigationbar = () => {
  const handleLightMode = () => {
    const light = document.querySelector(".mod");
    const body = document.body;
    if (body.classList.contains("darkmode")) {
      body.classList.remove("darkmode");
      light.innerText = "Dark Mode";
      body.classList.add("lightmode");
      body.classList.add("lightmodebody");
      body.classList.remove("darkmodebody");
    } else {
      body.classList.remove("lightmode");
      body.classList.remove("lightmodebody");
      light.innerText = "Light Mode";
      body.classList.add("darkmode");
      body.classList.add("darkmodebody");
    }
  };
  return (
    <>
      <header className="nav-head">
        <div class="logo">
          <span>Country Data</span>
        </div>
        <div class="mode" onClick={handleLightMode}>
          <i class="fa-regular fa-moon light" id="light"></i>
          <span className="mod">Dark Mode</span>
        </div>
      </header>
    </>
  );
};

export default Navigationbar;
