import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import Dropdown from "./Dropdown";
import logo from "../assets/logo.jpg";

const Header = () => {
  const [view, setView] = useState(false);

  const handleDropdownClick = () => {
    setView(!view);
  };

  const handleMenuItemClick = () => {
    setView(false);
  };

  return (
    <div className="header-body">
      <div className="header-left">
        <img src={logo} alt="로고" />
        <Link to="/" className="menu-link">
          <div className="header-title">MURO</div>
        </Link>
      </div>
      <div className="header-menu">
        <div className="dropdown-container" onClick={handleDropdownClick}>
          <span className="menu-text" >
            장례서비스 {view ? "▲" : "▼"}
          </span>
          <Dropdown isOpen={view} onItemClick={handleMenuItemClick} />
        </div>
        <Link to="/mypage" className="menu-mypage">
          <div className="m">마이페이지</div>
        </Link>
        <button className="loginbtn">로그아웃</button>
      </div>
    </div>
  );
};

export default Header;
