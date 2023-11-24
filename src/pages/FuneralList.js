import React, { useState } from "react";
import "../styles/FuneralList.css";
import FuneralDetailList from "./FuneralDetailList";

const FuneralList = () => {
  const [selectedFuneral, setSelectedFuneral] = useState(null);

  const funeralHomes = [
    {
      name: "ABC 장례식장",
      location: "서울시 강남구",
      description: "품격 있는 장례식장입니다.",
    },
    {
      name: "DEF 장례식장",
      location: "서울시 종로구",
      description: "고요하고 안정적인 분위기의 장례식장입니다.",
    },
    {
      name: "GHI 장례식장",
      location: "서울시 영등포구",
      description: "따뜻한 분위기의 장례식장입니다.",
    },
  ];

  const handleFuneralClick = (index) => {
    setSelectedFuneral(funeralHomes[index]);
  };

  return (
    <div>
      {selectedFuneral ? (
        <FuneralDetailList funeralHome={selectedFuneral} />
      ) : (
        <div>
          <div className="funeral-list-title">원하는 장례식장을 선택하세요</div>
          <div className="funeral-list-container">
            {funeralHomes.map((funeralHome, index) => (
              <div
                key={index}
                className="funeral-box"
                onClick={() => handleFuneralClick(index)}
              >
                <div className="funeral-box-header">
                  <div className="funeral-name">{funeralHome.name}</div>
                  <div className="funeral-location">{funeralHome.location}</div>
                </div>
                <div className="funeral-description">
                  {funeralHome.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FuneralList;
