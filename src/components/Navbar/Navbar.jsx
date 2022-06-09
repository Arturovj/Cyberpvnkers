import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="cyberpvnkers link">
        <Link to="/">
          <h4>CYBERPVNKERS</h4>
        </Link>
      </div>
      <ul className="navlinks">
        <li className="link">
          <a href="/">HOME</a>
        </li>{" "}
        <li className="link">
          <a href="nfts">NFTs</a>
        </li>
        <li className="link">
          <a href="services">Services</a>
        </li>
        <li className="link">
          <a href="contact">Contact us</a>
        </li>
        <li className="link">
          <a href="about">About</a>
        </li>
      </ul>
      <div style={{cursor: 'pointer'}} className="hamburguer-toggle">
        <i style={{cursor: 'pointer'}}  className="fas fa-bars fa-lg"></i>
      </div>
    </div>
  );
}
