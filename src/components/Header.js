import React from "react";
import Logo from "../img/gambithoodlogo.png";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header__wrapper">
      <div className="header__logo">
        <img src={Logo} alt="logo" width={50} />
      </div>
      <div className="header__search">
        <div className="header__searchContainer">
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header__menuItems">
        <a>Free Stocks</a>
        <a>Portfolio</a>
        <a>Cash</a>
        <a>Messages</a>
        <a>Account</a>
      </div>
    </div>
  );
};

export default Header;
