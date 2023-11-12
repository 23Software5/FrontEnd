import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header-body">
      <div className="header-title">MURO</div>
      <div className="header-menu">
        <div>장례서비스</div>
        <div>마이페이지</div>
        <button className="loginbtn">로그아웃</button>
      </div>
    </div>
  );
};

export default Header;
