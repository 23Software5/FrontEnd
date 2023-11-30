import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Body from "../components/Body";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import {
  getAllFuneralHalls,
  // api.js에서 가져올 다른 함수들
} from "../Api";
import "../styles/Search.css";

const Search = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedNeighborhood, setSelectedNeighborhood] = useState("");
  const [cities, setCities] = useState([]);
  const [districtsByCity, setDistrictsByCity] = useState({});
  const [neighborhoodsByDistrict, setNeighborhoodsByDistrict] = useState({});
  const [funeralHalls, setFuneralHalls] = useState([]);

  useEffect(() => {
    // API에서 도시 데이터를 가져오기
    const fetchCities = async () => {
      try {
        // 실제 API 엔드포인트로 교체하세요
        const citiesData = await getCities();
        setCities(citiesData);
      } catch (error) {
        console.error("도시 데이터를 불러오는 중 에러 발생:", error);
      }
    };

    // 선택된 도시에 기반하여 API에서 구 데이터 가져오기
    const fetchDistricts = async () => {
      try {
        if (selectedCity) {
          // 실제 API 엔드포인트로 교체하세요
          const districtsData = await getDistricts(selectedCity);
          setDistrictsByCity({ [selectedCity]: districtsData });
        }
      } catch (error) {
        console.error("구 데이터를 불러오는 중 에러 발생:", error);
      }
    };

    // 선택된 구에 기반하여 API에서 동(읍면동) 데이터 가져오기
    const fetchNeighborhoods = async () => {
      try {
        if (selectedDistrict) {
          // 실제 API 엔드포인트로 교체하세요
          const neighborhoodsData = await getNeighborhoods(selectedDistrict);
          setNeighborhoodsByDistrict({ [selectedDistrict]: neighborhoodsData });
        }
      } catch (error) {
        console.error("동(읍면동) 데이터를 불러오는 중 에러 발생:", error);
      }
    };


    const fetchFuneralHalls = async () => {
      try {
        const halls = await getAllFuneralHalls();
        setFuneralHalls(halls);
      } catch (error) {
        console.error("장례관 데이터를 불러오는 중 에러 발생:", error);
      }
    };

    fetchCities();
    fetchDistricts();
    fetchNeighborhoods();
    fetchFuneralHalls();
  }, [selectedCity, selectedDistrict]); 

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleCityChange = (city) => {
    setSelectedCity(city);
    setSelectedDistrict("");
    setSelectedNeighborhood("");
  };

  const handleDistrictChange = (district) => {
    setSelectedDistrict(district);
    setSelectedNeighborhood("");
  };

  const handleNeighborhoodChange = (neighborhood) => {
    setSelectedNeighborhood(neighborhood);
  };

  return (
    <div>
      <div className="img">
        <div className="Search-imgcontent">
          <span className="Search-imgcontenttitle">맟춤검색</span>
          <br />
          <br />
          <span>
            전문적인 맞춤 반려동물 장례 업체를 찾아 <br />
            사랑하는 반려동물과의 소중한 순간을 추억하세요.
          </span>
        </div>
      </div>
      <Body />
      <div className="title">화장 후, 희망하는 안치 방법을 선택해 주세요.</div>
      <div className="options-container">
        <div
          className={`option-box1 ${
            selectedOption === "납골당/봉인당" ? "selected" : ""
          }`}
          onClick={() => handleOptionClick("납골당/봉인당")}
        >
          <p>납골당/봉인당</p>
          <img
            className="search-img"
            src="https://th.bing.com/th/id/R.2421a92909471648bedcf53712b26e15?rik=Ek5ELPMhM2MyCw&riu=http%3a%2f%2fwww.osungfuneral.co.kr%2ffiles%2fattach%2fimages%2f215%2f070%2f015%2fce71f83e491a6c84678e64a52b9cefee.jpg&ehk=5EceWNKc3bug5MDNcZLxDdTj3venfiyYnhPa6F%2fuEKU%3d&risl=&pid=ImgRaw&r=0"
            alt="search1"
          />

          {selectedOption === "납골당/봉인당"}
        </div>

        <div
          className={`option-box1 ${
            selectedOption === "수목장" ? "selected" : ""
          }`}
          onClick={() => handleOptionClick("수목장")}
        >
          <p>수목장</p>
          <img
            className="search-img"
            src="https://th.bing.com/th/id/OIP.-COO1ggAGZUzv3_XcdMheQHaHa?w=179&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            alt="search2"
          />
          {selectedOption === "수목장"}
        </div>

        <div
          className={`option-box1 ${
            selectedOption === "산골" ? "selected" : ""
          }`}
          onClick={() => handleOptionClick("산골")}
        >
          <p>산골</p>
          <img
            className="search-img"
            src="https://th.bing.com/th/id/OIP.DToDLDAue1pXtIK2zX1JGAHaE8?w=270&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            alt="search3"
          />
          {selectedOption === "산골"}
        </div>

        <div
          className={`option-box1 ${
            selectedOption === "스톤 제작" ? "selected" : ""
          }`}
          onClick={() => handleOptionClick("스톤 제작")}
        >
          <p>스톤 제작</p>
          <img
            className="search-img"
            src="https://petmemorial.co.kr/wp-content/uploads/2021/09/%EA%B0%81%EC%9D%B8%EC%8A%A4%ED%86%A4%ED%95%A85.jpg"
            alt="search4"
          />

          {selectedOption === "스톤 제작"}
        </div>
      </div>
      <div className="title">날짜와 지역을 선택해 주세요.</div>
      <div className="search-container1">
        <div className="left-container1">
          <div className="date-picker-container1">
            <Calendar
              onChange={handleDateChange}
              value={selectedDate}
              className="calendar1"
            />
          </div>
        </div>

        <div className="right-container1">
          <div className="dropdown-container1">
            <label htmlFor="cityDropdown">시 선택</label>
            <select
              id="cityDropdown"
              className="dropdown1"
              value={selectedCity}
              onChange={(e) => handleCityChange(e.target.value)}
            >
              <option value="" disabled>
                OO시
              </option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          {selectedCity && (
            <div className="dropdown-container1">
              <label htmlFor="districtDropdown">구 선택</label>
              <select
                id="districtDropdown"
                className="dropdown1"
                value={selectedDistrict}
                onChange={(e) => handleDistrictChange(e.target.value)}
                disabled={!selectedCity}
              >
                <option value="" disabled>
                  OO구
                </option>
                {districtsByCity[selectedCity]?.map((district) => (
                  <option key={district} value={district}>
                    {district}
                  </option>
                ))}
              </select>
            </div>
          )}

          {selectedDistrict && (
            <div className="dropdown-container1">
              <label htmlFor="neighborhoodDropdown">동 선택</label>
              <select
                id="neighborhoodDropdown"
                className="dropdown1"
                value={selectedNeighborhood}
                onChange={(e) => handleNeighborhoodChange(e.target.value)}
                disabled={!selectedDistrict}
              >
                <option value="" disabled>
                  OO동
                </option>
                {neighborhoodsByDistrict[selectedDistrict]?.map(
                  (neighborhood) => (
                    <option key={neighborhood} value={neighborhood}>
                      {neighborhood}
                    </option>
                  )
                )}
              </select>
            </div>
          )}
        </div>
      </div>
      <Link to="/funeral-list">
        <button className="findfuneral-btn">검색하기</button>
      </Link>
    </div>
  );
};

export default Search;
