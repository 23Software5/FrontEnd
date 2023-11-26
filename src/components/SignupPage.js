import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/SignupPage.css";
import LogoImage from "../assets/logo.jpg";

import * as api from "../Api"; // 추가: api.js 파일 불러오기

const SignupPage = ({ setSignupSuccess }) => {
  const [nickname, setNickname] = useState(""); // 변경: name을 nickname으로 변경
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isEmailValid = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isFormValid = () => {
    return (
      nickname.trim() !== "" && // 변경: name을 nickname으로 변경
      email.trim() !== "" &&
      password.trim() !== "" &&
      isEmailValid()
    );
  };

  const handleSignup = async () => {
    if (isFormValid()) {
      const userData = {
        nickname, // 변경: name을 nickname으로 변경
        email,
        password,
      };

      try {
        const response = await api.registerUser(userData);

        // 성공적으로 가입한 경우
        console.log("User registration successful:", response);

        // 추가: 회원가입 성공 시 부모 컴포넌트의 상태 업데이트
        setSignupSuccess(true);
      } catch (error) {
        // 가입 실패한 경우
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
            닉네임{" "}
            <input
              type="text"
              value={nickname} // 변경: name을 nickname으로 변경
              onChange={(e) => setNickname(e.target.value)} // 변경: name을 nickname으로 변경
            />
          </label>
          <label>
            이메일{" "}
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            비밀번호{" "}
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
