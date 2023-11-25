// MyReview.js
import React, { useState, useEffect } from "react";
import "../styles/MyReview.css";
import axios from "axios"; // axios import 추가

const baseUrl = "http://localhost:8080"; // 서버의 주소에 맞게 수정

const MyReview = () => {
  const [userReviews, setUserReviews] = useState([]);

  useEffect(() => {
    const fetchUserReviews = async () => {
      try {
        const response = await axios.get(`${baseUrl}/reviews`);
        const reviews = response.data;
        setUserReviews(reviews);
      } catch (error) {
        console.error("Error fetching user reviews:", error);

        // 서버에서 데이터를 가져오지 못할 때만 더미 데이터 사용
        setUserReviews([
          {
            name: "김OO",
            date: "2023-11-14",
            funeralHome: "ABC 장례식장",
            content: "서비스가 훌륭합니다!",
          },
        ]);
      }
    };

    fetchUserReviews();
  }, []);

  const handleDeleteReview = async (index) => {
    try {
      const reviewId = userReviews[index].id;
      const response = await axios.delete(`${baseUrl}/reviews/${reviewId}`);
      const updatedReviews = [...userReviews];
      updatedReviews.splice(index, 1);
      setUserReviews(updatedReviews);
    } catch (error) {
      console.error("Error deleting review:", error);
    }
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
