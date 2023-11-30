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
          위치 : {funeralHome.fh_location}
        </div>
        <div className="funeral-detail-link">링크 : {funeralHome.fh_link}</div>

        <div className="funeral-detail-telnumber">
          전화번호 : {funeralHome.fh_telnumber}
        </div>
        <div className="funeral-detail-intro">
          소개 : {funeralHome.fh_intro}
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
