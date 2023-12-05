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
      telnum: "1588-2888",
      description:
        "안녕하세요. 늘 정성을 다하는 포포즈 반려동물 장례식장 강남점입니다.",
      price:
        "베이직(공통 장례, 포포즈 기본함, 보자기) : 250,000원\n포포즈 패키지(공통 장례, 인견 수의 + 인견 수의보, 일반관(소형), 기본함, 생화(소량), 고급 보자기): 500,000원\n요람장 패키지(공통 장례, 린넨 수의, 버드나무 요람장 S, 한지 수목함, 생화(소량), 고급 보자기): 700,000원",
    },
    {
      name: "펫포유 장례식장",
      method: "납골당",
      location: "서울시 강남구 삼성동 114-9",
      link: "https://www.petforyou.kr/",
      telnum: "1533-4426",
      description: "이별의 아픔을 위로하고 공감하는 펫포유가 되겠습니다.",
      price:
        "펫포유 장례(염습, 단독추모실, 국화헌화, 종교용품, 개별화장, 기본 유골함): 250,000원\n고급 장례(염습, 단독추모실, 국화헌화, 종교용품, 개별화장, 고급 수의S, 고급 오동나무관S, 고급유골함): 500,000원\n프리미엄(염습, 단독추모실, 국화헌화, 종교용품, 개별화장, 최고급 수의S, 최고급 오동나무관S or 요람S, 최고급 호두나무 유골함): 850,000원",
    },
    {
      name: "스타티스 장례식장",
      method: "납골당",
      location: "서울시 강남구 삼성동 112-3",
      link: "https://www.startice.co.kr/",
      telnum: "02-728-5411",
      description:
        "아이와의 추억을 영원히 우리들 마음에 간직하는 스타티스입니다.",
      price:
        "기본장례(염습, 화장, 기본 유골함): 250,000원\n고급장례(염습, 일반수의, 오동나무관, 국화꽃다발, 화장, 기능성 유골함): 500,000원\nVIP장례(염습, 고급수의, 오동나무관, 생화장식, 호두나무 유골함): 850,000원",
    },
    {
      name: "파트라슈 장례식장",
      method: "납골당",
      location: "서울시 강남구 삼성동 116-1",
      link: "https://www.mypatrasche.co.kr/",
      telnum: "02-723-2201",
      description: "내 생에 가장 소중한 친구를 위하여 파트라슈",
      price: "기본 장례비용 : 20만원\n수의/관/유골함/납골안치 : 각 10만원 추가",
    },
    {
      name: "펫콤 장례식장",
      method: "납골당",
      location: "서울시 강남구 삼성동 117",
      link: "https://petcom.kr/",
      telnum: "1833-5158",
      description: "마지막 순간까지 아름답게 펫콤이 함께하겠습니다.",
      price:
        "일반화장(개별화장, 기본유골함, 추모, 추모액자): 195,000원\n고급화장(개별화장, 기본 유골함, 염습, 한지수의, 추모액자): 250,000원\nVIP화장(개별화장, 고급유골함, 유골주머니, 염습, 오동나무관, 인견수의, 꽃장식, 추모액자): 600,000원",
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
