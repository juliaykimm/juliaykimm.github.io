import React from "react";
import { useLocation } from "react-router-dom";
import "../App.css";
import "./Navigation.css"

function Navigation() {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <div className="navigation">
      <div className="nav-item">
        <div className="profile-icon">
          <a href="/#/about">
              J
          </a>
        </div>

      </div>
      <a href="/">
      <div className="home-icon-wrapper">
        <div className="home-icon">
          <svg viewBox="0 0 37 45" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.5855 29.9202H12.1711V45H0V18.1915L18.5 0L37 18.1915V45H24.5855V29.9202Z" fill="currentColor"/>
          </svg>   
        </div>
      </div>
      </a>
    </div>

  );
}

export default Navigation;
