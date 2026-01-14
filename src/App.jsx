import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import './App.css';

// Importing assets
import img1 from './assets/img1.gif'; 
import img2 from './assets/img2.gif'; 
import img3 from './assets/img3.gif'; 
import img4 from './assets/img4.gif'; 
import img5 from './assets/img5.gif'; 
import img6 from './assets/img6.gif'; 
import img7 from './assets/img7.gif'; 
import img8 from './assets/img8.gif'; 
import img9 from './assets/img9.gif'; 
import img10 from './assets/img10.gif'; 
import img11 from './assets/img11.gif'; 

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [noButtonPos, setNoButtonPos] = useState({ top: '0px', left: '0px' });
  const [isJumping, setIsJumping] = useState(false); 

  const moveButton = () => {
    const randomTop = Math.floor(Math.random() * 80) + 10;
    const randomLeft = Math.floor(Math.random() * 80) + 10;
    setNoButtonPos({ top: `${randomTop}%`, left: `${randomLeft}%` });
  };

  const handleNoClick = () => {
    if (!isJumping) {
      setIsJumping(true); // Enable jumping logic after the very first click
      moveButton();
    } else {
      moveButton();
    }
  };

  // Centralized function for the "Yes" celebration
  const handleYes = () => {
    setCurrentPage(10);
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ad1457', '#f8bbd0', '#ffffff'] 
    });
  };

  return (
    <div className="main-wrapper">
      {/* key={currentPage} triggers the smooth animation every time the page changes */}
      <div className="content-box animate-in" key={currentPage}>
        
        {currentPage === 1 && (
          <>
            <img src={img1} className="sticker" alt="" />
            <h1 className="main-text">Ek Sawal Puchu Apse...</h1>
            <button className="action-btn" onClick={() => setCurrentPage(2)}>Haa Pucho</button>
          </>
        )}

        {currentPage === 2 && (
          <>
            <img src={img2} className="sticker" alt="" />
            <h1 className="main-text">Do U Like Me!!</h1>
            <div className="btn-group">
              <button className="action-btn" onClick={handleYes}>Yes</button>
              <button className="action-btn" onClick={() => setCurrentPage(3)}>No</button>
            </div>
          </>
        )}

        {currentPage === 3 && (
          <>
            <img src={img3} className="sticker" alt="" />
            <h1 className="main-text">Pls, Ek baar fir se soch lo 🥺</h1>
            <div className="btn-group">
              <button className="action-btn" onClick={handleYes}>Yes</button>
              <button className="action-btn" onClick={() => setCurrentPage(4)}>Nahi h Soch liya</button>
            </div>
          </>
        )}

        {currentPage === 4 && (
          <>
            <img src={img4} className="sticker" alt="" />
            <button className="action-btn" onClick={() => setCurrentPage(5)}>Tho Mai Kya Karu !</button>
          </>
        )}

        {currentPage === 5 && (
          <>
            <img src={img5} className="sticker" alt="" />
            <button className="action-btn" onClick={() => setCurrentPage(6)}>Chup Kar Ja Ab.</button>
          </>
        )}

        {currentPage === 6 && (
          <>
            <img src={img6} className="sticker" alt="" />
            <h1 className="main-text">2 Din Se Thik Se Soya Nahi Hu, Ab Kitna Code Likh Waogi... Ab Ha Bol Bhi do PLss 🥺</h1>
            <div className="btn-group">
              <button className="action-btn" onClick={handleYes}>Ha</button>
              <button className="action-btn" onClick={() => setCurrentPage(7)}>Na</button>
            </div>
          </>
        )}

        {currentPage === 7 && (
          <>
            <img src={img7} className="sticker" alt="" />
            <button className="action-btn" onClick={() => setCurrentPage(8)}>Na bola Na Naaa...</button>
          </>
        )}

        {currentPage === 8 && (
          <>
            <img src={img8} className="sticker" alt="" />
            <h1 className="main-text">Pata h Ki Aap Gusse Mai Jada Cute Lagte Ho, Lekin Sorry Gussa Dilane Ke Liye..</h1>
            <button className="action-btn" onClick={() => setCurrentPage(9)}>Acha thik Maaf Kiya</button>
          </>
        )}

      {currentPage === 9 && (
          <>
            <img src={img9} className="sticker" alt="" />
            <h1 className="main-text">Last baar puch raha hu... Ha ki Na? 🥰</h1>
            <div className="btn-group">
              <button className="action-btn" onClick={handleYes}>Ha</button>
              <button 
                className="action-btn" 
                style={isJumping ? { position: 'fixed', top: noButtonPos.top, left: noButtonPos.left, zIndex: 999 } : {}}
                onMouseEnter={() => isJumping && moveButton()}
                onClick={handleNoClick}
              >
                Na
              </button>
            </div>
          </>
        )}

        {currentPage === 10 && (
          <div className="animate-success content-box">
            <div className="sticker-row">
               <img src={img10} className="sticker" alt="" />
               <img src={img11} className="sticker" alt="" />
            </div>
            <h1 className="main-text">I knew it Madam Ji! Aap Maan hi Jaogi. 🥰</h1>
            
            <a 
              href="https://www.instagram.com/rishux_98/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="insta-btn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="insta-icon">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              Ab Text Bhi Kar Do
            </a>
          </div>
        )}
      </div>

      <div className="signature">Built with ❤️ by Your Rishav</div>
    </div>
  );
}

export default App;