import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/SignupPage.css";
import LogoImage from "../assets/logo.jpg";

const SignupPage = ({ setSignupSuccess }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const isEmailValid = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isFormValid = () => {
    return name.trim() !== "" && email.trim() !== "" && password.trim() !== "" && phoneNumber.trim() !== "" && isEmailValid();
  };

  const handleSignup = () => {
    if (isFormValid()) {
      setSignupSuccess(true);
    } else {
      alert("모든 항목을 입력해 주세요.");
    }
  };

  const formatPhoneNumber = (input) => {
    const cleaned = input.replace(/\D/g, "");
    const match = cleaned.match(/^(\d{3})(\d{4})(\d{4})$/);
    if (match) {
      setPhoneNumber(`${match[1]} - ${match[2]} - ${match[3]}`);
    } else {
      setPhoneNumber(input);
    }
  };

  return (
    <div className="signuppage">
      <div className="signup-container">
        <div className="login-title">회원가입</div>
        <div className="signup-box">
          <label>
            이름 <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            이메일 <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            비밀번호 <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <label>
            전화번호
            <input type="text" value={phoneNumber} onChange={(e) => formatPhoneNumber(e.target.value)} />
          </label>
        </div>
        <button className="signuppage-btn" onClick={handleSignup} disabled={!isFormValid()}>
          회원가입
        </button>

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
