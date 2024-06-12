import React, { useState } from 'react';
import Header from './components/homepage/header';
import LeftSidebar from './components/homepage/sidebar1';
import RightSidebar from './components/homepage/sidebar2';
import Videos from './components/contents/videos';
import Blend from './components/contents/blend'; 
import './App.css';

function App() {
    const [showForm, setShowForm] = useState(false);
    const [showBlend, setShowBlend] = useState(false); 

    const handleShowFormChange = (value) => {
        setShowForm(value);
    };

    const handle3DViewClick = (clicked) => {
        setShowBlend(clicked); 
        setShowForm(false)
    };

    return (
        <div className="app">
            <Header />
            <LeftSidebar />
            <div className="content">
                {showBlend ? <Blend /> : <Videos showForm={showForm} />} {/* Conditionally render Blend or Videos component */}
            </div>
            <RightSidebar onShowFormChange={handleShowFormChange} on3DViewClick={handle3DViewClick} /> {/* Pass the handle3DViewClick function to the RightSidebar component */}
        </div>
    );
}

export default App;
