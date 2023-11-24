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

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [selectedFuneralHome, setSelectedFuneralHome] = useState(""); // Add this state

  
  return (
    <Router>
      <div className="App">
        <Header />
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
          <Route path="/funeral-list" element={<FuneralList  onSelectFuneralHome={setSelectedFuneralHome}/>} />

          <Route path="/instructor" element={<Instructor />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/review" element={<Review />} />
          <Route path="/review-board" element={<ReviewBoard selectedFuneralHome={selectedFuneralHome} />} />

          <Route path="/myreview" element={<MyReview />} />
          <Route path="/mysearch" element={<MySearch />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
