import React, { useState } from "react";
import Body from "../components/Body";
import "../styles/Search.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";



const Search = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <div>
      <div className="img"></div>
      <Body />
      <div className="title">화장 후, 희망하는 안치 방법을 선택해 주세요.</div>
      <div className="options-container">
        <div
          className={`option-box ${
            selectedOption === "납골당/봉인당" ? "selected" : ""
          }`}
          onClick={() => handleOptionClick("납골당/봉인당")}
        >
          <p>납골당/봉인당</p>
          <img src="https://th.bing.com/th/id/R.2421a92909471648bedcf53712b26e15?rik=Ek5ELPMhM2MyCw&riu=http%3a%2f%2fwww.osungfuneral.co.kr%2ffiles%2fattach%2fimages%2f215%2f070%2f015%2fce71f83e491a6c84678e64a52b9cefee.jpg&ehk=5EceWNKc3bug5MDNcZLxDdTj3venfiyYnhPa6F%2fuEKU%3d&risl=&pid=ImgRaw&r=0" alt="search1" />

          {selectedOption === "납골당/봉인당"}
        </div>

        <div
          className={`option-box ${
            selectedOption === "수목장" ? "selected" : ""
          }`}
          onClick={() => handleOptionClick("수목장")}
        >
          <p>수목장</p>
          <img src="https://th.bing.com/th/id/OIP.-COO1ggAGZUzv3_XcdMheQHaHa?w=179&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="search2" />
          {selectedOption === "수목장"}
        </div>

        <div
          className={`option-box ${
            selectedOption === "산골" ? "selected" : ""
          }`}
          onClick={() => handleOptionClick("산골")}
        >
          <p>산골</p>
          <img src="https://th.bing.com/th/id/OIP.DToDLDAue1pXtIK2zX1JGAHaE8?w=270&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="search3" />
          {selectedOption === "산골"}
        </div>

        <div
          className={`option-box ${
            selectedOption === "스톤 제작" ? "selected" : ""
          }`}
          onClick={() => handleOptionClick("스톤 제작")}
        >
          <p>스톤 제작</p>
          <img src="https://petmemorial.co.kr/wp-content/uploads/2021/09/%EA%B0%81%EC%9D%B8%EC%8A%A4%ED%86%A4%ED%95%A85.jpg" alt="search4" />

          {selectedOption === "스톤 제작"}
        </div>
      </div>
      <div className="title">날짜와 지역을 선택해 주세요.</div>
    
      <div className="date-picker-container">
      <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          className="calendar"
        />
      </div>
    
      <button className="searchbtn">검색하기</button>

      
    </div>
  );
};

export default Search;
