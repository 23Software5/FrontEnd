import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import LogoImage from "../assets/logo.jpg";
import "../styles/LoginPage.css";

const LoginPage = ({ setLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registeredUsers = [
    { email: "muro@naver.com", password: "1234" },
  ];

  const handleLogin = () => {
    const user = registeredUsers.find((user) => user.email === email && user.password === password);


    if (user) {
      setLoggedIn(true);
    } else {
      alert("잘못된 이메일 혹은 비밀번호입니다. 다시 시도해 주세요.");
    }
  };

  return (
    <div className="loginpage">
      <div className="login-container">
        <div className="login-title">로그인</div>
        <div className="login-box">
          <label>
            이메일
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            비밀번호
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
        </div>
        <button className="login-btn" onClick={handleLogin}>
          로그인
        </button>

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
