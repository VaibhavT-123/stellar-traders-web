import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import "./Inquiry.css";

const Inquiry = () => {
  return (
    <div className="inquiry-section">
      <div className="inquiry-container">
        <h2>Get In Touch</h2>
        <p>Have questions? Send us an inquiry and we'll get back to you soon</p>

        <form className="inquiry-form">
          <div className="form-row">
            <div className="form-group">
              <label>Full Name *</label>
              <input type="text" placeholder="Enter Name" required />
            </div>
            <div className="form-group">
              <label>Email Address *</label>
              <input type="email" placeholder="Enter Email" required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" placeholder="Enter Mobile No" />
            </div>
            <div className="form-group">
              <label>Subject *</label>
              <input type="text" placeholder="Product Inquiry" required />
            </div>
          </div>

          <div className="form-group">
            <label>Message *</label>
            <textarea
              placeholder="Tell us about your requirements..."
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Submit Inquiry
          </button>
        </form>

        <div className="contact-info">
          <div className="contact-card">
            <FaPhone className="icon" />
            <div>
              <h4>Call Us</h4>
              <p>+91 9130913655</p>
            </div>
          </div>
          <div className="contact-card">
            <FaEnvelope className="icon" />
            <div>
              <h4>Email Us</h4>
              <p>info@stellarglobal.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inquiry;
