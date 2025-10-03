import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.webp";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  //  Close menu if screen resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="header-container">
      <header>
        {/* Logo */}
        <div className="logo-container">
          <img src={logo} alt="logo" height={"50px"} />
          <p>STELLAR GLOBAL TRADERS</p>
        </div>

        {/* Desktop Menu */}
        <div className="about-container desktop-menu">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/product" className="contact-btn" onClick={() => setMenuOpen(false)}>Products</Link>
        </div>

        {/* Hamburger */}
        <div className="hamburger" onClick={() => setMenuOpen(true)}>
          <FaBars />
        </div>
      </header>

      {/* Overlay Mobile Menu */}
      <div className={`overlay ${menuOpen ? "show" : ""}`}>
        <div className="overlay-header">
          <p>STELLAR GLOBAL TRADERS</p>
          <FaTimes className="close-icon" onClick={() => setMenuOpen(false)} />
        </div>
        <div className="overlay-links">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link>
          <Link to="/product" className="contact-btn" onClick={() => setMenuOpen(false)}>Products</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
