import React, { useState } from "react";
import "../styles/EstimateRequestPage.css";
import logoImage from "../assets/logo.jpg";
import EstimateRequestFinish from "./EstimateRequestFinish"; // Import the new component

const EstimateRequestPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    birthYear: "",
    birthMonth: "",
    birthDay: "",
    weight: "",
    size: "",
    breed: "",
    burialMethod: "",
    dateYear: "",
    dateMonth: "",
    dateDay: "",
    specialNotes: "",
  });

  const [submitted, setSubmitted] = useState(false); // Add this line to initialize submitted state

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {submitted ? (
        <EstimateRequestFinish />
      ) : (
        <div className="estimate-request-container rounded-border">
          <div className="estimate-request-left">
            <form onSubmit={handleSubmit}>
              <h3 className="estimate-request-title">반려동물 정보</h3>
              <label>
                이름
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </label>

              <div className="date-input-container">
                <label>
                  생년월일
                  <select
                    name="birthYear"
                    value={formData.birthYear}
                    onChange={handleInputChange}
                  >
                    <option value="2023">2023</option>
                  </select>
                  년
                </label>
                <label>
                  <select
                    name="birthMonth"
                    value={formData.birthMonth}
                    onChange={handleInputChange}
                  >
                    <option value="1">1</option>
                  </select>
                  월
                </label>
                <label>
                  <select
                    name="birthDay"
                    value={formData.birthDay}
                    onChange={handleInputChange}
                  >
                    <option value="1">1</option>
                  </select>
                  일
                </label>
              </div>

              <div>
                <label>
                  무게
                  <input
                    type="text"
                    name="weight"
                    value={formData.weight}
                    onChange={handleInputChange}
                  />
                </label>
              </div>
              <div>
                <label>
                  크기
                  <input
                    type="text"
                    name="size"
                    value={formData.size}
                    onChange={handleInputChange}
                  />
                </label>
              </div>
              <div>
                <label>
                  종
                  <input
                    type="text"
                    name="breed"
                    value={formData.breed}
                    onChange={handleInputChange}
                  />
                </label>
              </div>
              <div>
                <label>
                  안치방법
                  <select
                    name="burialMethod"
                    value={formData.burialMethod}
                    onChange={handleInputChange}
                  >
                    <option value="cremation">납골당/봉인당</option>
                    <option value="cemetery">수목장</option>
                    <option value="hillside">산골</option>
                    <option value="stone">스톤 제작</option>
                  </select>
                </label>
              </div>
              <div className="date-input-container">
                <label>
                  일시
                  <select
                    name="dateYear"
                    value={formData.dateYear}
                    onChange={handleInputChange}
                  >
                    <option value="2023">2023</option>
                  </select>
                  년
                </label>
                <label>
                  <select
                    name="dateMonth"
                    value={formData.dateMonth}
                    onChange={handleInputChange}
                  >
                    <option value="1">1</option>
                  </select>
                  월
                </label>
                <label>
                  <select
                    name="dateDay"
                    value={formData.dateDay}
                    onChange={handleInputChange}
                  >
                    <option value="1">1</option>
                  </select>
                  일
                </label>
              </div>
              <div className="estiate-request-footer">
                <div>
                  <label className="special-notes-label">
                    특이사항
                    <textarea
                      name="specialNotes"
                      value={formData.specialNotes}
                      onChange={handleInputChange}
                    />
                  </label>
                </div>
              </div>
            </form>
          </div>

          <div className="estimate-request-right">
            <form onSubmit={handleSubmit}>
              <img src={logoImage} alt="로고" className="estimate-request-logo-image" />
              <button type="submit" className="estimate-request-submit-button">
                견적 신청하기
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EstimateRequestPage;
