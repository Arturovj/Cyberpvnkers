import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="cyberpvnkers link">
      <Link to="/" >
        <h4 >CYBERPVNKERS</h4>
        </Link>
      </div>
      <ul className="navlinks">
        <li className="link">
          <a href="home">HOME</a>
        </li>
          {" "}
          <li className="link">
            <a href="about">ABOUT</a>
          </li>
      
        <li className="link">
          <a href="nfts">NFTs</a>
        </li>
        <li className="link">
          <a href="services">Services</a>
        </li>
        <li className="link">
          <a href="contact">Contact us</a>
        </li>
      </ul>
    </div>
  );
}
