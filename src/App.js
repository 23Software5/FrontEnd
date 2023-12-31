import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import FuneralService from "./pages/FuneralService";

import * as api from "./Api"; // 추가: api.js 파일 불러오기

import "./App.css";
import Mypage from "./pages/Mypage";
import Search from "./pages/Search";
import Instructor from "./pages/Instructor";
import Guide from "./pages/Guide";
import Review from "./pages/Review";
import LoginPage from "./components/LoginPage";
import StartPage from "./components/StartPage";
import SignupPage from "./components/SignupPage";
import SignupSuccessPage from "./components/SignupSuccessPage";
import FuneralList from "./pages/FuneralList";
import ReviewBoard from "./pages/ReviewBoard";
import MyReview from "./pages/MyReview";
import MySearch from "./pages/MySearch";
import FuneralDetailList from "./pages/FuneralDetailList";
import EstimateRequestPage from "./pages/EstimateRequestPage";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [selectedFuneralHome, setSelectedFuneralHome] = useState(""); // Add this state

  // 추가: 로그아웃 처리 함수
  const handleLogout = async () => {
    try {
      await api.logoutUser(); // api.js에 로그아웃을 처리하는 함수가 있어야 합니다.
      setLoggedIn(false);
    } catch (error) {
      console.error("Error logging out:", error);
      // 추가: 에러 처리 로직을 추가할 수 있습니다.
    }
  };

  return (
    <Router>
      <div className="App">
        <Header onLogout={handleLogout} />{" "}
        {/* 수정: Header 컴포넌트에 로그아웃 함수 전달 */}
        <Routes>
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <Navigate to="/start" />
              ) : (
                <LoginPage setLoggedIn={setLoggedIn} />
              )
            }
          />
          <Route
            path="/signup"
            element={
              signupSuccess ? (
                <Navigate to="/signup-success" />
              ) : (
                <SignupPage setSignupSuccess={setSignupSuccess} />
              )
            }
          />
          <Route path="/signup-success" element={<SignupSuccessPage />} />

          <Route path="/start" element={<StartPage />} />
          <Route
            path="/main"
            element={
              <>
                <div className="img"></div>
                <Body />
                <div className="intro">
                  무로, 당신의 가족이 되어주었던 소중한 반려동물에게
                  <br />
                  마지막까지 정성을 다하는 장례 서비스 입니다.
                </div>
                <div className="intro">
                  '무로'는 무지개로드의 줄임말로
                  <br />
                  마지막 걷는 길을 추억하자는 의미를 담고 있습니다.
                </div>
                <div className="intro">
                  무로는 그동안 함께한 소중한 동행자에게
                  <br />
                  마지막까지 정성스러운 이별을 선사하기 위해 노력하고 있습니다.
                </div>
              </>
            }
          />
          <Route path="/funeral-service" element={<FuneralService />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/search" element={<Search />} />
          <Route
            path="/funeral-list"
            element={
              <FuneralList onSelectFuneralHome={setSelectedFuneralHome} />
            }
          />
          <Route path="/estimate-request" element={<EstimateRequestPage />} />
          <Route path="/instructor" element={<Instructor />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/review" element={<Review />} />
          <Route
            path="/review-board"
            element={<ReviewBoard selectedFuneralHome={selectedFuneralHome} />}
          />

          <Route path="/myreview" element={<MyReview />} />
          <Route path="/mysearch" element={<MySearch />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
