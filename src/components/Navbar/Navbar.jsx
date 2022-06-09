import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {

    const [navLinkOpen, navLinkToggle] = useState(false);

    const handleNavlinksToggle = () => {
        navLinkToggle(!navLinkOpen)
    }

    const renderClasses = () => {
        let classes = "navlinks";

        if (navLinkOpen) {
            classes += " active";
        }
        return classes;
    }

  return (
    <nav>
      <div className="cyberpvnkers link">
        <Link to="/">
          <h4>CYBERPVNKERS</h4>
        </Link>
      </div>
      <ul className={renderClasses()}>
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
      <div onClick={handleNavlinksToggle} className="hamburguer-toggle">
        <i  className="fas fa-bars fa-lg"></i>
      </div>
    </nav>
  );
}
