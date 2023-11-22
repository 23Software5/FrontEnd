import React from "react";
import Body from "../components/Body";
import "../styles/Guide.css";

const Guide = () => {
  return (
    <div>
      <div className="img"></div>
      <Body />
      <div className="title">장례 절차 가이드북</div>

      <div className="container">
        <div className="box">
          <div className="step">
            <img
              className="img1"
              src="https://www.wadiz.kr/ft/images/green001/2022/1203/20221203153550839_94.jpeg"
              alt="Step 1"
            />
            <p className="guide-p">1. 장례 예약</p>
          </div>
          <div className="arrow"></div>
          <div className="step">
            <img
              className="img1"
              src="https://th.bing.com/th/id/OIP.OuKrnUG4oE50x9Tv4UUbKAHaLH?w=186&h=279&c=7&r=0&o=5&dpr=1.5&pid=1.7"
              alt="Step 2"
            />
            <p className="guide-p">2. 장례식장 방문</p>
          </div>
          <div className="arrow"></div>
          <div className="step">
            <img
              className="img1"
              src="https://post-phinf.pstatic.net/MjAxODAxMTlfMTAz/MDAxNTE2MzUzMjczMTY3.-bH3mwLAGVbk4_RYJBLb8G-WRzSGgi6IQFLWWNJGaDwg.5vuPofNktDmZvMCKn5oxiD2Q9IvC--3MDzkx7DRuGDUg.JPEG/03.jpg?type=w800_q75"
              alt="Step 3"
            />
            <p className="guide-p">3. 염습</p>
          </div>
          <div className="step">
            <img
              className="img1"
              src="https://i.namu.wiki/i/K2aIdV10a5Od9U3Armt4Bhdch7J_A4sVjzdgHkgh-EMvqhncQ1JKp4kVxvuspNKwEmFJjUjSmpGfsbVXxWlXIg.webp"
              alt="Step 4"
            />
            <p className="guide-p">4. 주요 예식</p>
          </div>
          <div className="arrow"></div>
          <div className="step">
            <img
              className="img1"
              src="https://i.namu.wiki/i/JLMlENAPKJEMsQVl0518XnUK9ad_4kDe5_YZGdk1ie5TR9UzoDMQeeTFOGfEbmJplOMcRsRfj4n2yTyM-qSfjA.webp"
              alt="Step 5"
            />
            <p className="guide-p">5. 화장 및 분골</p>
          </div>
          <div className="arrow"></div>
          <div className="step">
            <img
              className="img1"
              src="https://ae01.alicdn.com/kf/S18188e0ff3e04defb82827ce814fa34eJ.jpg_640x640Q90.jpg_.webp"
              alt="Step 6"
            />
            <p className="guide-p">6. 유골 봉인</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guide;
