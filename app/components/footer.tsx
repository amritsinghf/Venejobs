// components/footer.tsx
import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-columns">
          <div className="footer-col">
            <h4>About</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Become Seller</a></li>
              <li><a href="#">Jobs</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Categories</h4>
            <ul>
              <li><a href="#">Design & Creative</a></li>
              <li><a href="#">Development & IT</a></li>
              <li><a href="#">Music & Audio</a></li>
              <li><a href="#">Programming & Tech</a></li>
              <li><a href="#">Digital Marketing</a></li>
              <li><a href="#">Finance & Accounting</a></li>
              <li><a href="#">Writing & Translation</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Support</h4>
            <ul>
              <li><a href="#">Help & Support</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Subscribe</h4>
            <div className="footer-subscribe">
              <input type="email" placeholder="Your email address" />
              <button>Send</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Copyright Venejobs. 2024 All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <div className="footer-lang">English</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
