import React, { useState } from "react";
import "../styles/FuneralList.css";
import FuneralDetailList from "./FuneralDetailList";

const FuneralList = ({ onSelectFuneralHome }) => {
  const [selectedFuneral, setSelectedFuneral] = useState(null);

  const funeralHomes = [
    {
      name: "포포즈 장례식장",
      method: "납골당",
      location: "서울시 강남구 삼성동 116",
      link: "https://fourpaws.co.kr/",
      telnum:"1588-2888",
      description: "안녕하세요. 늘 정성을 다하는 포포즈 반려동물 장례식장 강남점입니다.",
    },
    {
      name: "펫포유 장례식장",
      method: "납골당",
      location: "서울시 강남구 삼성동 114-9",
      link: "https://www.petforyou.kr/",
      telnum:"1533-4426",
      description: "이별의 아픔을 위로하고 공감하는 펫포유가 되겠습니다.",
    },
    {
      name: "스타티스 장례식장",
      method: "납골당",
      location: "서울시 강남구 삼성동 112-3",
      link: "https://www.startice.co.kr/",
      telnum:"02-728-5411",
      description: "아이와의 추억을 영원히 우리들 마음에 간직하는 스타티스입니다.",
    },
    {
      name: "파트라슈 장례식장",
      method: "납골당",
      location: "서울시 강남구 삼성동 116-1",
      link: "https://www.mypatrasche.co.kr/",
      telnum:"02-723-2201",
      description: "내 생에 가장 소중한 친구를 위하여 파트라슈",
    },
    {
      name: "펫콤 장례식장",
      method: "납골당",
      location: "서울시 강남구 삼성동 117",
      link: "https://petcom.kr/",
      telnum:"1833-5158",
      description: "마지막 순간까지 아름답게 펫콤이 함께하겠습니다.",
    },
  ];

  const handleFuneralClick = (funeralHome) => {
    setSelectedFuneral(funeralHome);
    onSelectFuneralHome(funeralHome.name);
  };

  return (
    <div>
      {selectedFuneral ? (
        <FuneralDetailList
          funeralHome={selectedFuneral}
          onSelectFuneralHome={onSelectFuneralHome}
        />
      ) : (
        <div>
          <div className="funeral-list-title">원하는 장례식장을 선택하세요</div>
          <div className="funeral-list-container">
            {funeralHomes.map((funeralHome, index) => (
              <div
                key={index}
                className="funeral-box"
                onClick={() => handleFuneralClick(funeralHome)}
              >
                <div className="funeral-box-header">
                  <div className="funeral-name">{funeralHome.name}</div>
                  <div className="funeral-location">{funeralHome.location}</div>
                </div>
                <div className="funeral-description">
                  <div className="funeral-method">
                    안치방법 : {funeralHome.method}
                  </div>

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
