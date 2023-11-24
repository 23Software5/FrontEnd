import React from "react";
import { Link } from "react-router-dom";
import Body from "../components/Body";
import "../styles/Review.css";

const Review = () => {
  return (
    <div>
      <div className="img">
        <div className="Search-imgcontent">
          <span className="Search-imgcontenttitle">장례식장 후기</span>
          <br />
          <br />
          <span>
            다양한 후기를 통해 장례식장의 서비스 품질과
            <br />
            지도사의 전문성, 전반적인 피드백을 얻어가세요.
          </span>
        </div>
      </div>
      <Body />

      <div className="review-container">
        <Link to="/review-board">
          <button className="review-btn">후기 더보기 </button>
        </Link>

        <div className="reviewBox">
          <p className="review-p">김OO님 | 2023년 11월 14일</p>
          <p className="review-p">
            우리 애기 마지막 가는 길 잘 보내주신 거 같아 정말 감사합니다
          </p>
        </div>

        <div className="reviewBox">
          <p className="review-p">이OO님 | 2023년 11월 2일</p>
          <p className="review-p">
            덜컥 아이가 먼저 가버린 게 겁이 나 직접 하지 못했는데 이렇게
            마지막까지 잘 보내주시고 감사하네요..
          </p>
        </div>

        <div className="reviewBox">
          <p className="review-p">김OO님 | 2023년 11월 18일</p>
          <p className="review-p">
            장례가 처음이라 어안이 벙벙했는데 차분히 상담 진행해 주셔서
            감사해요!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Review;
