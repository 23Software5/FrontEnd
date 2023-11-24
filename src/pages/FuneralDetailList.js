import React, { useState } from "react";
import "../styles/FuneralDetailList.css";
import ReviewBoard from "./ReviewBoard";

const FuneralDetailList = ({ funeralHome, onSelectFuneralHome }) => {
  return (
    <div className="funeral-detail-container">
      <div className="funeral-detail-container-left">
        <div className="funeral-detail-name">{funeralHome.name}</div>
        <div className="funeral-detail-location">
          주소 : {funeralHome.location}
        </div>

        <div className="funeral-detail-button-container">
          <button
            className="funeral-detail-button"
            onClick={() => onSelectFuneralHome(funeralHome.name)}
          >
            신청하기
          </button>
        </div>
      </div>

      {funeralHome && (
        <div className="funeral-reviews-container-right">
          <h3 className="funeral-reviews-container-right-title">후기</h3>
          <ReviewBoard selectedFuneralHome={funeralHome} />
        </div>
      )}

      
    </div>
  );
};

export default FuneralDetailList;
