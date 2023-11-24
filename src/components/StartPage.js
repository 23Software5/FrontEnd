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
        <div className="startpage-title">맞춤 장례 서비스, MURO</div>
        <div className="startpage-content">
          MURO는 무지개 다리를 건너는 반려동물에게 <br />
          따뜻한 이별을 선물하기 위해 노력합니다. <br />
          <br />
          간편한 웹 예약과 맞춤 견적으로 쉽고 신속하게
          <br /> 원하는 서비스를 찾을 수 있습니다.
          <br />
          <br />
          반려동물과의 소중한 순간을 <br />
          더욱 간직할 수 있는 MURO를 이용해보세요.
        </div>
      </div>
      <button className="startpage-btn" onClick={handleStart}>
        시작하기
      </button>
    </div>
  );
};

export default StartPage;
