import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import Dropdown from "./Dropdown";

const Header = () => {
  const [view, setView] = useState(false);

  return (
    <div className="header-body">
      <Link to="/" className="menu-link">
        <div className="header-title">MURO</div>
      </Link>
      <div className="header-menu">
        <div className="dropdown-container">
          <span className="menu-text" onClick={() => setView(!view)}>
            장례서비스 {view ? '▼' : '▲'}
          </span>
          <Dropdown isOpen={view} />
        </div>
        <Link to="/mypage" className="menu-link">
          <div className="m">마이페이지</div>
        </Link>
        <button className="loginbtn">로그아웃</button>
      </div>
    </div>
  );
};

export default Header;
