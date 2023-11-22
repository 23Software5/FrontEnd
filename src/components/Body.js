import React from "react";
import { Link } from "react-router-dom";
import "../styles/Body.css";
const Body = () => {
  return (
    <div className="body">
      <Link to="/search" className="body-btn">
        <div>맞춤검색</div>
      </Link>
      <Link to="/instructor" className="body-btn">
        <div>장례 지도사</div>
      </Link>
      <Link to="/guide" className="body-btn">
        <div>가이드북</div>
      </Link>
      <Link to="/review" className="body-btn">
        <div>장례식장 후기</div>
      </Link>
    </div>
  );
};

export default Body;
