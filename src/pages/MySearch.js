import React, { useState } from "react";
import "../styles/MySearch.css";

const MySearch = () => {
  const [mystate, setMystate] = useState([' 신청완료 ', ' 승인완료 ', ' 장례종료 ']);
  const [isReviewModalOpen, setReviewModalOpen] = useState(false);
  const [selectedFuneral, setSelectedFuneral] = useState({
    name: "GHI 장례식장",
    location: "서울시 영등포구",
    // description: "가상의 장례식장입니다.",
  });
  const [reviewText, setReviewText] = useState('');
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
    console.log('Review Submitted:', {
      funeralHome: selectedFuneral.name,
      starRating,
      reviewText,
    });

    // Close the modal after submission
    closeReviewModal();
  };

  const formData = {
    name: '반려동물이름',
    birthYear: '2023',
    birthMonth: '1',
    birthDay: '1',
    weight: '10kg',
    size: '중형',
    breed: '종류',
    burialMethod: '납골당/봉인당',
    dateYear: '2023',
    dateMonth: '1',
    dateDay: '1',
    specialNotes: '특이사항 없음',
  };
  
  const StarRating = ({ onChange }) => {
    const stars = [1, 2, 3, 4, 5];

    return (
      <div>
        {stars.map((star) => (
          <span
            key={star}
            onClick={() => onChange(star)}
            style={{ cursor: 'pointer', color: star <= starRating ? 'gold' : 'gray' }}
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
        <br/>
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
          <span style={{ fontSize: '40px', fontWeight: 'bold' }}>내 견적 조회하기</span>
        </div>
      </div>
      <div className="my-search-middle">내 견적 조회하기</div>

      {/* 반려 동물 정보 표시 부분 */}
      <div className="my_search_container">
        <div className="My_pet">
          <div className="My_pet_panel">
            <h2>반려 동물 정보</h2>
            <div>
              <label>
                이름
                <input type="text" value={formData.name} readOnly />
              </label>
            </div>
            <div className="date-input-container">
              <label>
                생년월일
                <input type="text" value={`${formData.birthYear} 년`} readOnly />
              </label>
              <label>
                <input type="text" value={`${formData.birthMonth} 월`} readOnly />
              </label>
              <label>
                <input type="text" value={`${formData.birthDay} 일`} readOnly />
              </label>
            </div>
            <div>
              <label>
                무게
                <input type="text" value={formData.weight} readOnly />
              </label>
            </div>
            <div>
              <label>
                크기
                <input type="text" value={formData.size} readOnly />
              </label>
            </div>
            <div>
              <label>
                종
                <input type="text" value={formData.breed} readOnly />
              </label>
            </div>
            <div>
              <label>
                안치방법
                <input type="text" value={formData.burialMethod} readOnly />
              </label>
            </div>
            <div className="date-input-container">
              <label>
                일시
                <input type="text" value={`${formData.dateYear} 년`} readOnly />
              </label>
              <label>
                <input type="text" value={`${formData.dateMonth} 월`} readOnly />
              </label>
              <label>
                <input type="text" value={`${formData.dateDay} 일`} readOnly />
              </label>
            </div>
            <div className="estiate-request-footer">
              <div>
                <label className="special-notes-label">
                  특이사항
                  <textarea value={formData.specialNotes} readOnly />
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="My_process" style={{ textAlign: 'center' }}>
          <h2>장례 진행 상황</h2>
          <br/>
          <div className="status-buttons">
            {mystate.map((status, index) => (
              <button
                key={index}
                disabled
                style={{
                  backgroundColor: status === mystate[2] ? '#495c45' : '#e0e0e0',
                  color: status === mystate[2] ? 'white' : 'black',
                }}
              >
                {status}
              </button>
            ))}
            {mystate[2] === ' 장례종료 ' && (
              <button
                className="review-button"
                onClick={openReviewModal}
                style={{
                  backgroundColor: isReviewModalOpen ? '#495c45' : '#c1d5c0',
                  color: isReviewModalOpen ? 'white' : '#495c45',
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
        <button onClick={closeReviewModal}>닫기</button>
      </div>
      )}
    </div>
  );
};

export default MySearch;
