import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoImage from "../assets/logo.jpg";

import * as api from "../Api"; // 추가: api.js 파일 불러오기

import "../styles/LoginPage.css";

const LoginPage = ({ setLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    // 추가: 로그인 API 호출
    const credentials = {
      email,
      password,
    };

    try {
      const user = await api.loginUser(credentials);

      if (user && user.userId) {
        // 수정된 부분: 서버로부터 받은 user 객체의 userId 사용
        localStorage.setItem("userId", user.userId); // 수정된 부분: user.userId로 저장
        setLoggedIn(true);
      } else {
        alert("잘못된 이메일, 비밀번호입니다. 다시 시도해 주세요.");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("로그인에 실패했습니다.");
    }
  };

  return (
    <div className="loginpage">
      <div className="login-container">
        <div className="login-title">로그인</div>
        <div className="login-box">
          <label>
            이메일
            <input
              className="input-loginpage"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            비밀번호
            <input
              className="input-loginpage"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
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
