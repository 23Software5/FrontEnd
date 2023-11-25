
import React, { useState } from "react";
import "../styles/MySearch.css";

const MySearch = () => {
  const [mystate, setMystate] = useState([' 신청완료 ', ' 승인완료 ', ' 장례종료 ']);
  const [isReviewModalOpen, setReviewModalOpen] = useState(false);

  const openReviewModal = () => {
    setReviewModalOpen(true);
  };

  const closeReviewModal = () => {
    setReviewModalOpen(false);
  };

  return (
    <div>
      <div className="my-search-top">내 견적 조회</div>
      <div className="my-search-middle">내 견적 조회하기</div>

      <div className="my_search_container">
        <div className="My_pet">
          <h4 style={{ fontSize: '20px' }}>반려 동물 정보</h4>
        </div>
        <div className="My_process" style={{ textAlign: 'center' }}>
          <h4>장례 진행 상황</h4>
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
        <div className="My_place">장소 정보</div>
      </div>

      {isReviewModalOpen && (
        <div className="review-modal">
          {/* 후기 작성 모달 내용 */}
          <h2>후기 작성</h2>
          {/* 모달 닫기 버튼 */}
          <button onClick={closeReviewModal}>닫기</button>
        </div>
      )}
    </div>
  );
};

export default MySearch;
