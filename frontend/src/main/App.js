import React, {useState} from 'react';
import './App.css'
import User from '../components/User/user';
import Session from '../components/Session/session';
import PopupAd from '../components/Popupad/popupad';
import NavBar from '../components/nav/nav';
import Chat from '../components/chat/chat';
import Img from '../components/image/image';

export default function App() {
  const [IsNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!IsNavOpen);
  }

  return (
    <div className='body'>
      <div className="main">
        <div className="sidebar">
          <User />
          <Session />
          <PopupAd />
        </div>
        <div className="nav">
          <div>
            <NavBar />
          </div>
          <div className="chat-container">
            <Chat />
          </div>
        </div>
        <div className="images">
      <Img/>
    </div>
      </div>
    </div>
  );
  
}