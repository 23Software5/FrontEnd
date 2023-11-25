import React, { useState, useEffect } from "react";
import "../styles/ReviewBoard.css";

const ReviewBoard = ({ selectedFuneralHome, hideBannerAndSearchBar  }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const [reviews, setReviews] = useState([
    {
      name: "김OO",
      date: "2023-11-14",
      funeralHome: "ABC 장례식장",
      content: "서비스가 훌륭합니다!",
    },
    {
      name: "이OO",
      date: "2023-01-01",
      funeralHome: "DEF 장례식장",
      content: "서비스가 훌륭합니다!",
    },
    {
      name: "최OO",
      date: "2023-01-01",
      funeralHome: "GHI 장례식장",
      content: "서비스가 훌륭합니다!",
    },
  ]);
  const [filteredReviews, setFilteredReviews] = useState(reviews);

  useEffect(() => {
    const filtered = selectedFuneralHome
      ? reviews.filter(
          (review) => review.funeralHome === selectedFuneralHome.name
        )
      : reviews;

    setFilteredReviews(filtered);
  }, [selectedFuneralHome, reviews]);

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
          {filteredReviews.map((review, index) => (
            <div key={index} className="review-box">
              <div className="review-header">
                <div>
                  <span className="name">{review.name}</span> |{" "}
                  <span className="date">{review.date}</span>
                </div>
                <div className="funeral-home">{review.funeralHome}</div>
              </div>
              <div className="content">{review.content}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewBoard;
