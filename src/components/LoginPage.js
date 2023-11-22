import React from "react";
import { Link, Navigate } from "react-router-dom";
import LogoImage from "../assets/logo.jpg"; 
import "../styles/LoginPage.css";

const LoginPage = ({ setLoggedIn }) => {
  const handleLogin = () => {
    // 로그인 처리 로직
    setLoggedIn(true);
  };


  return (
    <div className="loginpage">
      <div className="login-container">
      <div className="login-title">로그인</div>
      <div className="login-box">
        <label>
          이메일
          <input type="text" />
        </label>
        <label>
          비밀번호
          <input type="password" />
        </label>
      </div>
      <button className="login-btn" onClick={handleLogin}>로그인 </button>

      <p>
        계정이 없으신가요? <Link to="/signup">회원가입</Link>
      </p>
      </div>
      <div className="logo-container">
        <img src={LogoImage} alt="Logo" />
      </div>
    </div>
  );
};

export default LoginPage;
