import React, { useState, useEffect } from "react";
import "../styles/FuneralList.css";
import FuneralDetailList from "./FuneralDetailList";
import { getAllFuneralHalls } from "../Api"; // Adjust the path based on your project structure

const FuneralList = ({ onSelectFuneralHome }) => {
  const [selectedFuneral, setSelectedFuneral] = useState(null);
  const [funeralHomes, setFuneralHomes] = useState([]);

  useEffect(() => {
    // Fetch funeral halls data when the component mounts
    const fetchFuneralHalls = async () => {
      try {
        const hallsData = await getAllFuneralHalls();
        setFuneralHomes(hallsData);
      } catch (error) {
        console.error("Error fetching funeral halls:", error);
      }
    };

    fetchFuneralHalls();
  }, []); // Empty dependency array ensures this effect runs once when the component mounts

  const handleFuneralClick = (funeralHome) => {
    setSelectedFuneral(funeralHome);
    onSelectFuneralHome(funeralHome.name);
  };

  return (
    <div>
      {selectedFuneral ? (
        <FuneralDetailList funeralHome={selectedFuneral} onSelectFuneralHome={onSelectFuneralHome} />
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
