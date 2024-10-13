import React from 'react';
import './popupad.css';

const PopupAd: React.FC = () => {
    return (
        <div className="popup-ad">
            <div className="icon">
                <img src="https://via.placeholder.com/40" alt="App Icon" />
                <a href="#" className="close"></a>
            </div>
            <p>Download our app and receive extra 100 chats daily.</p>
            <button className="download-btn">Download App</button>
        </div>
    );
};

export default PopupAd;
