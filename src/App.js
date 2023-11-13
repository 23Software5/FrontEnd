import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import FuneralService from "./pages/FuneralService";
import "./App.css"
import Mypage from "./pages/Mypage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="img"></div>
        <Routes>
          <Route path="/funeral-service" element={<FuneralService />} />
          <Route path="/mypage" element={<Mypage />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
