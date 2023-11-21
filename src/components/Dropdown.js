import React from "react";
import "../styles/Dropdown.css";
import { Link } from "react-router-dom";

const Dropdown = ({ isOpen }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="dropdown">
      <ul>
        <Link to="/search" className="drop-menu">
          <li>맞춤검색</li>
        </Link>
        <Link to="/instructor" className="drop-menu">
          <li>장례지도사</li>
        </Link>
        <Link to="/guide" className="drop-menu">
          <li>가이드북</li>
        </Link>
        <Link to="/review" className="drop-menu">
          <li>후기</li>
        </Link>
      </ul>
    </div>
  );
};

export default Dropdown;
