import React from "react";
import { NavLink } from "react-router-dom";
import "./NavbarElement.scss";
import { useState } from "react";
import { images } from "../../constants";

const NavbarElement = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <img src={images.feg_logo} alt="church-logo" />
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <img src={images.hamburger} alt="hamburger" />
          </div>
          <div className={`nav-elements  ${showNavbar && "active"}`}>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/vernetzen">Vernetzen</NavLink>
              </li>
              <li>
                <NavLink to="/ueber-uns">über uns</NavLink>
              </li>
              <li>
                <NavLink to="/kontakt">Kontakt</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarElement;
