import React, { useState, useEffect } from "react";
import "../styles/ReviewBoard.css";

const ReviewBoard = ({ selectedFuneralHome, hideBannerAndSearchBar  }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const [reviews, setReviews] = useState([
    {
      name: "김OO",
      date: "2023-11-14",
      funeralHome: "포포즈 장례식장",
      content: "서비스가 훌륭합니다!",
    },
    {
      name: "이OO",
      date: "2023-10-14",
      funeralHome: "펫포유 장례식장",
      content: "직원분들이 굉장히 친절하고 좋아요",
    },
    {
      name: "최OO",
      date: "2023-09-21",
      funeralHome: "스타티스 장례식장",
      content: "덕분에 편히 보낼 수 있었어요",
    },
    {
      name: "이OO",
      date: "2023-07-24",
      funeralHome: "파트라슈 장례식장",
      content: "친절하고 신속한 진행 감사합니다!",
    },
    {
      name: "박OO",
      date: "2022-11-28",
      funeralHome: "펫콤 장례식장",
      content: "편한 서비스를 통해 쉽게 장례 치룰 수 있었어요",
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
