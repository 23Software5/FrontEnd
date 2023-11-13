import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header-body">
      <Link to="/" className="menu-link">
        <div className="header-title">MURO</div>
      </Link>
      <div className="header-menu">
        <Link to="/funeral-service" className="menu-link">
          <div>장례서비스</div>
        </Link>
        <Link to="/mypage" className="menu-link">
          <div>마이페이지</div>
        </Link>
        <button className="loginbtn">로그아웃</button>
      </div>
    </div>
  );
};

export default Header;
