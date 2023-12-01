import React, { useState, useEffect } from "react";
import * as api from "../Api";
import "../styles/ReviewBoard.css";

const ReviewBoard = ({ hideBannerAndSearchBar }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [reviews, setReviews] = useState([]);
  const [filteredReviews, setFilteredReviews] = useState(reviews);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        
        const reviewsData = await api.getAllReviews();
        console.log("reviewsData:", reviewsData);
        setReviews(reviewsData || []);
      } catch (error) {
        console.error("후기를 불러오는 중 오류 발생:", error);
      }
    };

    fetchReviews();
  }, []);

  const handleSearch = () => {
    const filtered = reviews.filter((review) =>
      review.funeralHome.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredReviews(filtered);
  };

  return (
    <div>
      {!hideBannerAndSearchBar && (
        <>
          <div className="review-list-banner">후기 게시판</div>
          <div className="search-bar">
            <input
              type="text"
              placeholder="검색할 장례식장을 입력하세요"
              value={searchTerm}
              className="reviewboard-search"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="reviewboard-search-btn" onClick={handleSearch}>
              검색
            </button>
          </div>
        </>
      )}
      <div className="review-list">
        <div className="review-list-items">
          {(filteredReviews.length > 0 ? filteredReviews : reviews).map(
            (review, index) => (
              <div key={index} className="review-box">
                <div className="review-header">
                  <div>
                    <span className="name">{review.name}</span> |{" "}
                    <span className="date">{review.date}</span>
                  </div>
                  <div className="funeral-home">{review.funeralHome}</div>
                </div>
                <div className="content">{review.fr_text}</div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewBoard;
