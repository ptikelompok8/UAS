import React, { useState } from "react";
import Navbar from "./components/Navbar";
import "./styles.css";

export default function App() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showAdditionalContent, setShowAdditionalContent] = useState(false);

  const handleExploreClick = () => {
    setShowNavbar(!showNavbar);
    setShowAdditionalContent(!showNavbar);
  };

  return (
    <div className="App">
      {showNavbar && <Navbar />}
      <h1 className="Name">Bangka Belitung</h1>
      <button className="Explore" onClick={handleExploreClick}>
        Explore Now
      </button>
      {showAdditionalContent && (
        <table className="AboutUs">
          <div className="AboutUss">
            <ul className="Bottom">
              <li className="PT">
                <h2>PT. BabelTrip Indonesia</h2>
              </li>
              <li>
                <div className="Social">
                  <i id="Facebook" className="fa-brands fa-facebook"></i>
                  <i id="Instagram" className="fa-brands fa-instagram"></i>
                  <i id="Gmail" className="fa-solid fa-envelope"></i>
                </div>
              </li>
            </ul>
            <div className="Bot">
              <br />
              <p>Scientia Boulevard</p>
              <p>Gading Serpong, Tangerang</p>
              <p>Tel : (021) 123456789</p>
              <br />
              <p>Copyright © 2024 BabelTrip. All rights reserved.</p>
            </div>
          </div>
        </table>
      )}
    </div>
  );
}
