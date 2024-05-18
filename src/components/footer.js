import React from "react";
import "./FooterStyles.css";

function Footer({ showAdditionalContent }) {
  return (
    <table className="AboutUs">
    <div className="AboutUss">
    <ul className="Bottom">
        <li className="PT">
            <h2>PT. BabelTrip Indonesia</h2>
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
  )};

export default Footer;



