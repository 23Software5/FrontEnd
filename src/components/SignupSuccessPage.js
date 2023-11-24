import React from "react";
import { Link } from "react-router-dom";
import LogoImage from "../assets/logo.jpg";
import "../styles/SignupSuccessPage.css";

const SignupSuccessPage = () => {
  return (
    <div className="SignupSuccess-container">
      <div className="SignupSuccess-content">
        <h1>회원가입이 완료되었습니다</h1>
        <p>로그인 후 서비스를 이용해보세요.</p>
        <Link to="/">
          <button className="SignupSuccess-btn">로그인</button>
        </Link>
      </div>
      <div className="logo-container">
        <img src={LogoImage} alt="Logo" />
      </div>
    </div>
  );
};

export default SignupSuccessPage;
