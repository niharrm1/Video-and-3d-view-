import React, { useState } from "react";
import "./homepage.css"; // Assuming CSS file is named LeftSidebar.css
import sound from '../../public/soundbass.png'

function LeftSidebar() {
  const [activeItem, setActiveItem] = useState(null); // Track active list item

  const handleClick = (item) => {
    setActiveItem(item); // Update active state on click
  };

  return (
    <div className="left-sidebar">
      <div className="part-1">
            <div className="sidebar-header">
                <div className="camera head-3">
                    <i className="fas fa-video"></i> Cameras
                </div>
            </div>
            <ul className="sidebar-list">
                <li
                    className={`sidebar-item ${activeItem === "192.168.0.1" ? "active" : ""}`}
                    onClick={() => handleClick("192.168.0.1")}
                >
                    <div className="item-content">
                        <div className="icon"><i className="fas fa-desktop"></i></div>
                        <div className="info">
                            <span className="head-4">192.168.0.1</span>

                            <span className="details">
                                <i className="fas fa-wifi"></i> 1080p HD
                            </span>
                            <div className="status"><i className="fas fa-play-circle"></i> Live</div>
                        </div>
                    </div>
                   
                </li>
                {/* Add more list items as needed */}
            </ul>
        </div>


      <div className="audio-sources">

        <div className="head-3" style={{ marginLeft: '5px', padding: '5px' }}>3 Audio Sources</div>
        <div className="slider">

          <label className="head-5" htmlFor="microphone-slider" style={{ marginLeft: '5px', padding: '5px' }}>Build-in Microphone </label>
          <input type="range" id="microphone-slider" name="microphone-slider" min="0" max="100" defaultValue="50" className="sliders" style={{ marginLeft: '8px', width: '270px' }} />
          <img src={sound} alt="sound" width={30} height={30} style={{ marginTop: '3px', marginLeft: '8px', width: '270px' }} />

        </div>
        <div className="slider">

          <label className="head-5" htmlFor="video-sound-slider" style={{ marginLeft: '5px', padding: '5px' }}>Video Sound </label>
          <input type="range" id="video-sound-slider" name="video-sound-slider" min="0" max="100" defaultValue="50" className="sliders" style={{ marginLeft: '8px', width: '270px' }} />
          <img src={sound} alt="sound" width={30} height={30} style={{ marginTop: '3px', marginLeft: '8px', width: '270px' }} />
        </div>

      </div>

    </div>
  );
}

export default LeftSidebar;
const part1ContainerStyle = {
  alignSelf: "stretch",
  height: "50px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  gap: "9px",
};

const innerContainerStyle = {

  alignSelf: "stretch",
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  padding: "0px 14px 0px 9px",
};

const globalLayersStyle = {
  flex: "1",
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "space-between",

};

const globalLayersTextStyle = {

  alignItems: "center",
  flexShrink: "0",
  zIndex: "2",
};



const inputStyle = {
  width: "178px",
  border: "none",
  outline: "none",
  backgroundColor: "transparent",
  height: "11px",
  // display: "flex",
  flexDirection: "column",
  // alignItems: "flex-start",
  // justifyContent: "flex-start",
  // padding: "14px 3px 14px 5px",
  boxSizing: "border-box",
  fontFamily: "Inter",
  fontSize: "20px",
  color: "#a5a9ac",
};

