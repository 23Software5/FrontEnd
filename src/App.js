import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import FuneralService from "./pages/FuneralService";
import "./App.css";
import Mypage from "./pages/Mypage";
import Search from "./pages/Search";
import Body from "./components/Body";
import Instructor from "./pages/Instructor";
import Guide from "./pages/Guide";
import Review from "./pages/Review";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="img"></div>
        <Routes>
          <Route path="/funeral-service" element={<FuneralService />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/search" element={<Search />} />
          <Route path="/instructor" element={<Instructor />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/review" element={<Review />} />
        </Routes>
        <Body />
        

      </div>
    </Router>
  );
}

export default App;
