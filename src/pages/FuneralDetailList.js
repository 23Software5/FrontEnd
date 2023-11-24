import React from "react";
import "../styles/FuneralDetailList.css";

const FuneralDetailList = ({ funeralHome }) => {
  return (
    <div className="funeral-detail-container">
      <div className="funeral-detail-container-left">
        <div className="funeral-detail-name">{funeralHome.name}</div>
        <div className="funeral-detail-location">
          주소 : {funeralHome.location}
        </div>

        <div className="funeral-detail-button-container">
          <button className="funeral-detail-button">신청하기</button>
        </div>
      </div>
      
    </div>
  );
};

export default FuneralDetailList;
