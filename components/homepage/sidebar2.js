import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import "./homepage.css";
import image from "../../public/main.png";

function RightSidebar({ onShowFormChange, on3DViewClick }) {
  const [showForm, setShowForm] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [is3DViewClicked, setIs3DViewClicked] = useState(false); // New state
  const [x, setX] = useState(123);
  const [y, setY] = useState(123);
  const [w, setW] = useState(260);
  const [h, setH] = useState(145);
  const [zoom, setZoom] = useState(0);
  const [cornerRadius, setCornerRadius] = useState(0);
  const [opacity, setOpacity] = useState(0);
  const handleAorButtonClick = () => {
    setShowForm(true);
    onShowFormChange(true);
  };

  const handle3DViewButtonClick = () => {
    setIs3DViewClicked(true);
    on3DViewClick(true); // Pass the state to the parent component
  };

  const onDrop = useCallback((acceptedFiles) => {
    console.log("Files:", acceptedFiles);
    if (acceptedFiles && acceptedFiles.length > 0) {
      const uploadedImageFile = acceptedFiles[0];
      const imageUrl = URL.createObjectURL(uploadedImageFile);
      setUploadedImage(imageUrl);
    }
  }, []);

  const sidebarStyle = {
    width: '300px',
    height: '435px',
    backgroundColor: '#2c2c2c',
    color: '#fff',
    padding: '20px',
    boxShadow: '2px 0 5px rgba(0, 0, 0, 0.5)',
    boxSizing: 'border-box',
    overflowY: 'auto'
  };

  const sectionStyle = {
    marginBottom: '20px'
  };

 
  const inputGroupStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px'
  };

  const labelStyle = {
    color: '#aaa',
    marginRight: '10px',
    minWidth: '20px'
  };

  const inputStyle = {
    width: '60px',
    padding: '8px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#444',
    color: '#fff',
    textAlign: 'center'
  };

  const buttonStyle = {
    padding: '10px',
    border: 'none',
    borderRadius: '50%',
    backgroundColor: '#444',
    color: '#fff',
    marginRight: '10px',
    cursor: 'pointer'
  };

  const halfWidthStyle = {
    width: 'calc(50% - 5px)',
    display: 'flex',
    marginRight: '10px',
    boxSizing: 'border-box'
  };

  const sliderStyle = {
    width: '100%'
  };


  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  return (
    <div className="right-sidebar">
   <div className="two3"  >
        <button className="button-85" style={{ marginLeft: '10px',marginTop:'10px' }} onClick={handleAorButtonClick}>
          Aor
        </button>
        <button className="button-85" style={{ marginLeft: '10px' }} onClick={handle3DViewButtonClick}>
          3D view
        </button>
      </div>

      {showForm ? (
        <form className="layer-settings-menu1">
          <div className="form-container">
            <div {...getRootProps()} className="dropzone">
              <input {...getInputProps()} />
              <p>Drag and drop an image here or click to select</p>
            </div>

            {/* Display uploaded image preview */}
            {uploadedImage && (
              <div className="image-preview">
                <img src={uploadedImage} alt="Uploaded" className="preview" />
              </div>
            )}

            <div class="row">
              <div class="col-25">
                <label for="fname">Name</label>
              </div>
              <div class="col-75">
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder=" name.."
                ></input>
              </div>
            </div>
            <div class="row">
              <div class="col-25">
                <label for="lname">Height</label>
              </div>
              <div class="col-75">
                <input
                  type="text"
                  id="lname"
                  name="lastname"
                  placeholder="height"
                ></input>
              </div>
            </div>
            <div class="row">
              <div class="col-25">
                <label for="country">Country</label>
              </div>
              <div class="col-75">
                <select id="country" name="country">
                  <option value="australia">Australia</option>
                  <option value="canada">Canada</option>
                  <option value="usa">USA</option>
                </select>
              </div>
            </div>
            <div class="row">
              <div class="col-25">
                <label for="subject">Other details</label>
              </div>
              <div class="col-75">
                <textarea
                  id="subject"
                  name="subject"
                  placeholder="Write something.."
                ></textarea>
              </div>
            </div>

            {/* Add submit button */}
            <button type="submit">Submit</button>
          </div>
        </form>
      ) : (
        <div className="layer-settings-menu">
        <div style={sidebarStyle}>
      <div className="layer-settings" style={sectionStyle}>
        <h2>Layer Settings</h2>
        <div className="coordinates" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={inputGroupStyle}>
        <label htmlFor="x" style={labelStyle}>X</label>
        <input
          type="number"
          id="x"
          value={x}
          onChange={(e) => setX(e.target.value)}
          style={inputStyle}
        />
      </div>
          <div className="input-group" style={halfWidthStyle}>
            <label htmlFor="y" style={labelStyle}>Y</label>
            <input type="number" id="y" value={y} onChange={(e) => setY(e.target.value)} style={inputStyle} />
          </div>
        </div>
        <div className="dimensions" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div className="input-group" style={halfWidthStyle}>
            <label htmlFor="w" style={labelStyle}>W</label>
            <input type="number" id="w" value={w} onChange={(e) => setW(e.target.value)} style={inputStyle} />
          </div>
          <div className="input-group" style={halfWidthStyle}>
            <label htmlFor="h" style={labelStyle}>H</label>
            <input type="number" id="h" value={h} onChange={(e) => setH(e.target.value)} style={inputStyle} />
          </div>
        </div>
        <div className="button-group" style={sectionStyle}>
          <button onClick={() => console.log('Rotate Left')} style={buttonStyle}>⟲</button>
          <button onClick={() => console.log('Rotate Right')} style={buttonStyle}>⟳</button>
        </div>
        <div className="crop-container" style={sectionStyle}>
          <button onClick={() => console.log('Crop')} style={halfWidthStyle}>Crop</button>
          <select id="fill" style={{ ...halfWidthStyle, marginLeft: '0' }}>
            <option value="fill">Fill</option>
          </select>
        </div>
        <div className="slider-group" style={sectionStyle}>
          <label htmlFor="zoom" style={labelStyle}>Zoom</label>
          <input type="range" id="zoom" min="0" max="100" value={zoom} onChange={(e) => setZoom(e.target.value)} style={sliderStyle} />
        </div>
        <div className="slider-group" style={sectionStyle}>
          <label htmlFor="corner-radius" style={labelStyle}>Corner Radius</label>
          <input type="range" id="corner-radius" min="0" max="100" value={cornerRadius} onChange={(e) => setCornerRadius(e.target.value)} style={sliderStyle} />
        </div>
        <div className="slider-group" style={sectionStyle}>
          <label htmlFor="opacity" style={labelStyle}>Opacity</label>
          <input type="range" id="opacity" min="0" max="100" value={opacity} onChange={(e) => setOpacity(e.target.value)} style={sliderStyle} />
        </div>
      </div>
      <div className="color-adjust" style={sectionStyle}>
        <h2>Color Adjust</h2>
        {/* Add color adjust controls here */}
      </div>
      <div className="playlist" style={sectionStyle}>
        <h2>Playlist</h2>
        {/* Add playlist controls here */}
      </div>
    </div>

        </div>
      )}
    </div>
  );
}

export default RightSidebar;
