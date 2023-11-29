import React from "react";
import { Link } from "react-router-dom";
import "../styles/FuneralDetailList.css";
import ReviewBoard from "./ReviewBoard";

const FuneralDetailList = ({ funeralHome, onSelectFuneralHome }) => {
  const handleApplyClick = () => {
    onSelectFuneralHome(funeralHome.name);
  };

  return (
    <div className="funeral-detail-container">
      <div className="funeral-detail-container-left">
        <div className="funeral-detail-name">{funeralHome.name}</div>
        <div className="funeral-detail-location">
          주소 : {funeralHome.location}
        </div>

        <div className="funeral-detail-button-container">
          <Link to="/estimate-request">
            <button
              className="funeral-detail-button"
              onClick={handleApplyClick}
            >
              신청하기
            </button>
          </Link>
        </div>
      </div>

      {funeralHome && (
        <div className="funeral-reviews-container-right">
          <h3 className="funeral-reviews-container-right-title">후기</h3>
          {/* Render ReviewBoard without banner and search bar */}
          <ReviewBoard
            selectedFuneralHome={funeralHome}
            hideBannerAndSearchBar
          />
        </div>
      )}
    </div>
  );
};

export default FuneralDetailList;
