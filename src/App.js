import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import videoBg from "./video/VideoBabel.mp4";
import "./styles.css";

export default function App() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showFooter, setShowFooter] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const handleExploreClick = () => {
    setShowNavbar(!showNavbar);
    setShowFooter(!showFooter);
    setShowButton(false);
  };

  return (
    <div className="App">
      {showNavbar && <Navbar />}
      <div className="videoContainer">
        <video className="VideoBackground" src={videoBg} autoPlay loop muted />
        <ul className="content">
          <li>
            <h1 className="Name">Bangka Belitung</h1>
            {showButton && ( 
              <button className="Explore" onClick={handleExploreClick}>
                Explore Now
              </button>
            )}
          </li>
        </ul>
      </div>
      {showFooter && <Footer />}
    </div>
  );
}
