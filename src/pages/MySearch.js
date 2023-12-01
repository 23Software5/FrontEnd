import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/MySearch.css";

const baseUrl = "http://localhost:8080";

const MySearch = () => {
  const [mystate, setMystate] = useState([
    " 신청완료 ",
    " 승인완료 ",
    " 장례종료 ",
  ]);
  const [isReviewModalOpen, setReviewModalOpen] = useState(false);
  const [selectedFuneral, setSelectedFuneral] = useState({
    name: "",
    location: "",
  });
  const [reviewText, setReviewText] = useState("");
  const [starRating, setStarRating] = useState(0);
  const [estimateData, setEstimateData] = useState(null);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    fetchEstimateData(userId);
  }, []);
  
  const fetchEstimateData = async (userId) => {
    try {
      const response = await axios.get(`${baseUrl}/requests/by-user/${userId}`);
      setEstimateData(response.data);
    
      const fhRequest = response.data[0]; // fhRequest 객체에 접근하는 방법은 데이터 구조에 따라 다를 수 있습니다.
  
      setSelectedFuneral({
        name: fhRequest?.funeralhall?.fh_name || '',
        location: fhRequest?.funeralhall?.fh_location || '',
      });
    } catch (error) {
      console.error("Error fetching check estimate:", error);
    }
  };


  
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
    console.log("후기 제출됨:", {
      funeralHome: selectedFuneral.name,
      starRating,
      reviewText,
    });

    closeReviewModal();
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
        {/* 이 외의 정보도 필요한 경우, 적절한 정보 추가 */}
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
                  value={estimateData?.name || ""}
                  readOnly
                />
              </label>
            </div>
            <div className="date-input-container">
              {/* 생년월일과 관련된 부분 수정 */}
              <label>
                생년월일
                <input
                  className="mysearch-input"
                  type="text"
                  value={`${estimateData?.birthYear || ""} 년`}
                  readOnly
                />
              </label>
              <label>
                <input
                  className="mysearch-input"
                  type="text"
                  value={`${estimateData?.birthMonth || ""} 월`}
                  readOnly
                />
              </label>
              <label>
                <input
                  className="mysearch-input"
                  type="text"
                  value={`${estimateData?.birthDay || ""} 일`}
                  readOnly
                />
              </label>
            </div>
            <div>
              <label>
                무게
                <input
                  className="mysearch-input"
                  type="text"
                  value={estimateData?.weight || ""}
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
                  value={estimateData?.size || ""}
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
                  value={estimateData?.breed || ""}
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
                  value={estimateData?.burialMethod || ""}
                  readOnly
                />
              </label>
            </div>
            <div className="date-input-container">
              {/* 일시와 관련된 부분 수정 */}
              <label>
                일시
                <input
                  className="mysearch-input"
                  type="text"
                  value={`${estimateData?.dateYear || ""} 년`}
                  readOnly
                />
              </label>
              <label>
                <input
                  className="mysearch-input"
                  type="text"
                  value={`${estimateData?.dateMonth || ""} 월`}
                  readOnly
                />
              </label>
              <label>
                <input
                  className="mysearch-input"
                  type="text"
                  value={`${estimateData?.dateDay || ""} 일`}
                  readOnly
                />
              </label>
            </div>
            <div className="estiate-request-footer">
              <div>
                <label className="special-notes-label">
                  특이사항
                  <textarea value={estimateData?.specialNotes || ""} readOnly />
                </label>
              </div>
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
          <button onClick={closeReviewModal}>닫기</button>
        </div>
      )}
    </div>
  );
};

export default MySearch;