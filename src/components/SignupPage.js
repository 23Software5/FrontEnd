import React from "react";
import { Link, Navigate } from "react-router-dom";
import "../styles/SignupPage.css";
import LogoImage from "../assets/logo.jpg";
const SignupPage = ({ setSignupSuccess }) => {
  const handleSignup = () => {
    // 회원가입 처리 로직
    setSignupSuccess(true);
  };

  return (
    <div className="signuppage">
      <div className="signup-container">
        <div className="login-title">회원가입</div>
        <div className="signup-box">
          <label>
            이름 <input type="text" />
          </label>
          <label>
            이메일 <input type="text" />
          </label>
          <label>
            비밀번호 <input type="password" />
          </label>
          <label>
            전화번호
            <input type="text" />
          </label>
        </div>
        <button onClick={handleSignup}>회원가입</button>

        <p>
          이미 회원이신가요? <Link to="/">로그인하기</Link>
        </p>
      </div>
      <div className="logo-container">
        <img src={LogoImage} alt="Logo" />
      </div>
    </div>
  );
};

export default SignupPage;
