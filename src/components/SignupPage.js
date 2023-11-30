import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/SignupPage.css";
import LogoImage from "../assets/logo.jpg";

import * as api from "../Api";

const SignupPage = ({ setSignupSuccess }) => {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(""); // Step 1: Add phone number state

  const isEmailValid = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isFormValid = () => {
    return (
      nickname.trim() !== "" &&
      email.trim() !== "" &&
      password.trim() !== "" &&
      phoneNumber.trim() !== "" && // Step 4: Validate phone number
      isEmailValid()
    );
  };

  const handleSignup = async () => {
    if (isFormValid()) {
      const userData = {
        nickname,
        email,
        password,
        phoneNumber,
      };

      try {
        const response = await api.registerUser(userData);

        console.log("User registration successful:", response);

        setSignupSuccess(true);
      } catch (error) {
        console.error("Error registering user:", error);
        alert("회원가입에 실패했습니다.");
      }
    } else {
      alert("모든 항목을 입력해 주세요.");
    }
  };

  return (
    <div className="signuppage">
      <div className="signup-container">
        <div className="login-title">회원가입</div>
        <div className="signup-box">
          <label>
            닉네임
            <input
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
          </label>
          <label>
            이메일
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            비밀번호
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label>
            전화번호
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </label>
        </div>
        <button
          className="signuppage-btn"
          onClick={handleSignup}
          disabled={!isFormValid()}
        >
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
