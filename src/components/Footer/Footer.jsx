import React from 'react'
import './Footer.css'
import { FaInstagram, FaFacebook, FaTwitter} from "react-icons/fa";


const Footer = () => {
  return (
    <div>
      <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h2>STELLAR Global</h2>
          <div className="social-icons">
            <FaInstagram />
            <FaFacebook />
            <FaTwitter />
          </div>
          <p>View All Products</p>
        </div>

        <div className="footer-contact">
          <h3>Get In Touch</h3>
          <p>+91 98765 43210</p>
          <p>456 Galaxy Avenue, Space City, SC 67890</p>
          <p>Mon-Sun: 9:00 AM - 8:00 PM</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright - 2025 - All Rights Reserved</p>
        <p>Rights Reserved</p>
      </div>
    </footer>
    </div>
  )
}

export default Footer
