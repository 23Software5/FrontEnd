import React from 'react';
import "../styles/Dropdown.css";

const Dropdown = ({ isOpen }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="dropdown">
      <ul>
        <li>맞춤검색</li>
        <li>장례지도사</li>
        <li>가이드북</li>
        <li>후기</li>
      </ul>
    </div>
  );
};

export default Dropdown;
