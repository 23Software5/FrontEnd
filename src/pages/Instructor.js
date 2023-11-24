import React from "react";
import Body from "../components/Body";
import "../styles/Instructor.css";

const Instructor = () => {
  return (
    <div>
      <div className="img">
        <div className="Search-imgcontent">
          <span className="Search-imgcontenttitle">장례지도사</span>
          <br />
          <br />
          <span>
            전문적인 반려동물 장례 지도사와 함께 <br />
            사랑하는 반려동물과의 소중한 순간을 추억하세요.
          </span>
        </div>
      </div>
      <Body />
      <div className="instructor-contain">
        <div className="instructor-col">
          <div className="instrucor-mainbox">
            <div className="instructor-box">
              <div className="instrucor-picname">
                <img className="instructor-pic" src="../img/instructor1.png" />
                <span className="instructor-name">허은수 지도사</span>
              </div>
              <div className="instructor-profile">
                <span className="instructro-jobn">
                  반려동물 장례 지도사 | Pet Funeral Instructor
                </span>
                <br />
                <span>
                  반려동물의 장례를 어떤 방법으로 전할지 모르는 경우, <br />
                  애도 방법을 모르는 경우 등을 위해 더 자세히 알려드리겠습니다.
                </span>
                <br />
                <span>
                  T. 010-1234-5678 <br />
                  E. petmanager@gmail.com
                </span>
              </div>
            </div>
          </div>

          <div className="instrucor-mainbox2">
            <div className="instructor-box">
              <div className="instrucor-picname">
                <img className="instructor-pic" src="../img/instructor2.png" />
                <span className="instructor-name"> 지민규 지도사</span>
              </div>
              <div className="instructor-profile">
                <span className="instructro-jobn">
                  반려동물 장례 지도사 | Pet Funeral Instructor
                </span>
                <br />
                <span>
                  처음 무지개 다리를 건너는 아이들의 길도 행복하도록 최선을 다해
                  <br />
                  돕겠습니다.
                </span>
                <br />
                <span>
                  T. 010-1984-2590 <br />
                  E. catlover@gmail.com
                </span>
              </div>
            </div>
          </div>

          <div className="instrucor-mainbox">
            <div className="instructor-box">
              <div className="instrucor-picname">
                <img className="instructor-pic" src="../img/instructor3.png" />
                <span className="instructor-name">장영란 지도사</span>
              </div>
              <div className="instructor-profile">
                <span className="instructro-jobn">
                  반려동물 장례 지도사 | Pet Funeral Instructor
                </span>
                <br />
                <span>
                  반려동물이 우리 곁을 떠났을 때, 그 아픔을 나누고 마음을 편안히
                  하도록 노력하겠습니다. 장례를 진행에 대한 안내와 애도의 지원을
                  아끼지 않겠습니다.
                </span>
                <br />
                <span>
                  T. 010-3287-5108 <br />
                  E. doglover@gmail.com
                </span>
              </div>
            </div>
          </div>

          <div className="instrucor-mainbox4">
            <div className="instructor-box">
              <div className="instrucor-picname">
                <img className="instructor-pic" src="../img/instructor4.png" />
                <span className="instructor-name">황남영 지도사</span>
              </div>
              <div className="instructor-profile">
                <span className="instructro-jobn">
                  반려동물 장례 지도사 | Pet Funeral Instructor
                </span>
                <br />
                <span>
                  무지개 다리를 건너는 아이들에게 행복한 이별을 만들어 드리기
                  위해 노력합니다. 마음의 아픔을 나누는데 필요한 모든 정보와
                  지원을 제공해 드립니다.
                </span>
                <br />
                <span>
                  T. 010-1269-0194 <br />
                  E. petlover@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
