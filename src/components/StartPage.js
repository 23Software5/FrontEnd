import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/StartPage.css";

const StartPage = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/main");
  };

  return (
    <div className="startpage">
      <div className="startpage-left">
        <div className="startpage-title">맞춤 장례</div>
        <div className="startpage-content">
          맞춤형 검색으로 최적의 장례 업체를 찾아보세요 <br />
          견적서를 요청하시면 소중한 아이를 위해 <br />
          최선을 다하는 전문가분들과 연결될 것입니다.
          <br />
          견적 결과는 마이페이지에서 확인하세요.
        </div>
      </div>
      <button className="startpage-btn" onClick={handleStart}>
        시작하기
      </button>
    </div>
  );
};

export default StartPage;
