import React from "react";
import logoImage from "../assets/logo.jpg";
import "../styles/EstimateRequestFinish.css"; 

const EstimateRequestFinish = () => {
  return (
    <div className="estimate-finish-container">
      <img src={logoImage} alt="로고" className="estimate-finish-container-logo-image" />
      <p className="estimate-finish-message">견적 신청이 완료되었습니다</p>
    </div>
  );
};

export default EstimateRequestFinish;
