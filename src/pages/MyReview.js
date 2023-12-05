import React, { useState, useEffect } from "react";
import "../styles/MyReview.css";
import { getReviewById } from "../Api";

const MyReview = () => {
  const [userReviews, setUserReviews] = useState([]);

  useEffect(() => {
    const fetchUserReviews = async () => {
      try {
        const userId = localStorage.getItem("userId");
        const reviews = await getReviewById(userId);
        setUserReviews(reviews || []);
      } catch (error) {
        console.error("Error fetching user reviews:", error);
      }
    };

    fetchUserReviews();
  }, []);

  

  return (
    <div>
      <div className="img">
        <div className="Search-imgcontent">
          <span style={{ fontSize: "40px", fontWeight: "bold" }}>
            내가 쓴 글 확인하기
          </span>
        </div>
      </div>
      <div className="my-review-middle">내 후기 조회</div>
      <div className="review-list">
        {/* {userReviews.map((review, index) => ( */}
          <div className="review-box">
            <div className="review-header">
              <div>
                <span className="name">무로</span> |{" "}
                <span className="date">2023.12.06</span>
              </div>
              <div className="funeral-home">포포즈 장례식장</div>
            </div>
            <div className="myreview-star">별점 ⭐⭐⭐⭐⭐</div>
            <div className="content">친절한 서비스 감사합니다 ~</div>
            <div className="deletebtn-box"><button className="delete-button">삭제하기</button></div>
          </div>
        {/* ))} */}
      </div>
    </div>
  );
};

export default MyReview;
