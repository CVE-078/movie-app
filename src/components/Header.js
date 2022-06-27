import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__title">
          <Link to="/">Movie App</Link>
        </h1>
      </div>
    </header>
  );
};

export default Header;
