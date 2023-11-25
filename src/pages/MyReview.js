import React, { useState } from "react";
import "../styles/MyReview.css";

const MyReview = () => {
  const [userReviews, setUserReviews] = useState([
    {
      name: "김OO",
      date: "2023-11-14",
      funeralHome: "ABC 장례식장",
      content: "서비스가 훌륭합니다!",
    },
  ]);



  
  const handleDeleteReview = (index) => {
    const updatedReviews = [...userReviews];
    updatedReviews.splice(index, 1);
    setUserReviews(updatedReviews);
  };

  return (
    <div>
      <div className="img">
        <div className="Search-imgcontent">
          <span style={{ fontSize: '40px', fontWeight: 'bold' }}>내가 쓴 글 확인하기</span>
        </div>
      </div>
      <div className="my-review-middle">내 후기 조회</div>
      <div className="review-list">
        {userReviews.map((review, index) => (
          <div key={index} className="review-box">
            <div className="review-header">
              <div>
                <span className="name">{review.name}</span> |{" "}
                <span className="date">{review.date}</span>
              </div>
              <div className="funeral-home">{review.funeralHome}</div>
            </div>
            <div className="content">{review.content}</div>
            <button
              className="delete-button"
              onClick={() => handleDeleteReview(index)}
            >
              삭제하기
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyReview;
