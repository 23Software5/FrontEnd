import React, { useState } from "react";
import "../styles/MySearch.css";

const MySearch = () => {
  const [mystate, setMystate] = useState([
    " 신청완료 ",
    " 승인완료 ",
    " 장례종료 ",
  ]);
  const [isReviewModalOpen, setReviewModalOpen] = useState(false);
  const [selectedFuneral, setSelectedFuneral] = useState({
    name: "포포즈 장례식장",
    location: "서울시 강남구 삼성동",
  });
  const [reviewText, setReviewText] = useState("");
  const [starRating, setStarRating] = useState(0);

  const openReviewModal = () => {
    setReviewModalOpen(true);
  };

  const closeReviewModal = () => {
    setReviewModalOpen(false);
  };
  const handleReviewTextChange = (e) => {
    setReviewText(e.target.value);
  };

  const handleStarRatingChange = (rating) => {
    setStarRating(rating);
  };

  const submitReview = () => {
    console.log("Review Submitted:", {
      funeralHome: selectedFuneral.name,
      starRating,
      reviewText,
    });

    closeReviewModal();
  };

  const formData = {
    name: "워니",
    birthYear: "2020",
    birthMonth: "11",
    birthDay: "5",
    weight: "4kg",
    size: "소형",
    breed: "말티즈",
    burialMethod: "납골당",
    dateYear: "2023",
    dateMonth: "11",
    dateDay: "25",
    specialNotes: "없음",
  };

  const StarRating = ({ onChange }) => {
    const stars = [1, 2, 3, 4, 5];

    return (
      <div>
        {stars.map((star) => (
          <span
            key={star}
            onClick={() => onChange(star)}
            style={{
              cursor: "pointer",
              color: star <= starRating ? "gold" : "gray",
            }}
          >
            &#9733;
          </span>
        ))}
      </div>
    );
  };

  const FuneralDetails = ({ selectedFuneral }) => {
    return (
      <div className="My_place_panel">
        <h2>장소 정보</h2>
        <div>
          <strong>장례식장 이름:</strong> {selectedFuneral.name}
        </div>
        <br />
        <div>
          <strong>위치:</strong> {selectedFuneral.location}
        </div>
        {/* <div>
          <strong>설명:</strong> {selectedFuneral.description}
        </div> */}
      </div>
    );
  };

  return (
    <div>
      <div className="img">
        <div className="Search-imgcontent">
          <span style={{ fontSize: "40px", fontWeight: "bold" }}>
            내 견적 조회하기
          </span>
        </div>
      </div>
      <div className="my-search-middle">내 견적 조회하기</div>

      <div className="my_search_container">
        <div className="My_pet">
          <div className="My_pet_panel">
            <h2 className="mysearch-info-title">반려 동물 정보</h2>
            <div>
              <label>
                이름
                <input
                  className="mysearch-input"
                  type="text"
                  value={formData.name}
                  readOnly
                />
              </label>
            </div>
            <div className="date-input-container">
              <label>
                생년월일
                <input
                  className="mysearch-input"
                  type="text"
                  value={formData.birthYear}
                  readOnly
                />년
              </label>
              <label>
                <input
                  className="mysearch-input"
                  type="text"
                  value={formData.birthMonth}
                  readOnly
                />월
              </label>
              <label>
                <input
                  className="mysearch-input"
                  type="text"
                  value={formData.birthDay}
                  readOnly
                />일
              </label>
            </div>
            <div>
              <label>
                무게
                <input
                  className="mysearch-input"
                  type="text"
                  value={formData.weight}
                  readOnly
                />
              </label>
            </div>
            <div>
              <label>
                크기
                <input
                  className="mysearch-input"
                  type="text"
                  value={formData.size}
                  readOnly
                />
              </label>
            </div>
            <div>
              <label>
                종
                <input
                  className="mysearch-input"
                  type="text"
                  value={formData.breed}
                  readOnly
                />
              </label>
            </div>
            <div>
              <label>
                안치방법
                <input
                  className="mysearch-input"
                  type="text"
                  value={formData.burialMethod}
                  readOnly
                />
              </label>
            </div>
            <div className="date-input-container">
              <label>
                일시
                <input
                  className="mysearch-input"
                  type="text"
                  value={formData.dateYear}
                  readOnly
                />년
              </label>
              <label>
                <input
                  className="mysearch-input"
                  type="text"
                  value={formData.dateMonth}
                  readOnly
                />월
              </label>
              <label>
                <input
                  className="mysearch-input"
                  type="text"
                  value={formData.dateDay}
                  readOnly
                />일
              </label>
            </div>
            <div className="estiate-request-footer">
              
                <label>
                  특이사항
                  <textarea  className="special-search-label" value={formData.specialNotes} readOnly />
                </label>
              
            </div>
          </div>
        </div>

        <div className="My_process" style={{ textAlign: "center" }}>
          <h2>장례 진행 상황</h2>
          <br />
          <div className="status-buttons">
            {mystate.map((status, index) => (
              <button
                key={index}
                disabled
                style={{
                  backgroundColor:
                    status === mystate[2] ? "#495c45" : "#e0e0e0",
                  color: status === mystate[2] ? "white" : "black",
                }}
              >
                {status}
              </button>
            ))}
            {mystate[2] === " 장례종료 " && (
              <button
                className="review-button"
                onClick={openReviewModal}
                style={{
                  backgroundColor: isReviewModalOpen ? "#495c45" : "#c1d5c0",
                  color: isReviewModalOpen ? "white" : "#495c45",
                }}
              >
                후기작성
              </button>
            )}
          </div>
        </div>

        <div className="My_place">
          {selectedFuneral ? (
            <FuneralDetails selectedFuneral={selectedFuneral} />
          ) : (
            <div>선택사항 없음</div>
          )}
        </div>
      </div>

      {isReviewModalOpen && (
        <div className="review-modal">
          <h2>후기 작성</h2>
          <div className="review-input">
            <label>
              장례식장 입력
              <input type="text" value={selectedFuneral.name} readOnly />
            </label>
          </div>
          <div className="review-input">
            <label>
              별점
              <StarRating onChange={handleStarRatingChange} />
            </label>
          </div>
          <div className="review-input">
            <label>
              후기 작성
              <textarea value={reviewText} onChange={handleReviewTextChange} />
            </label>
          </div>
          <button onClick={submitReview}>작성 완료</button>
          <button className="mysearchreviewclose" onClick={closeReviewModal}>닫기</button>
        </div>
      )}
    </div>
  );
};

export default MySearch;
