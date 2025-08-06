import React from "react";
// import "../../css/bootstrap.css"
import "./Footer.css";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';


function Footer() {
  return (
    <div className="footer-out-container">
      <div className="social-meadia">
        <ul>
          <li><FacebookOutlinedIcon /></li>
          <li><InstagramIcon /></li>
          <li><YouTubeIcon /></li>
        </ul>
      </div>
      <div className="footer-container">
        <div>
          <ul>
            <li>Audio Description</li>
            <li>Investor Relation</li>
            <li>Legal Notice</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookie Preference</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Gift Cards</li>
            <li>Terms Of Use</li>
            <li>Corporate Information</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Media Center</li>
            <li>Privacy</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
      <div className="footer-copywrite">
        <button>Service Code</button>
        <p>&copy; 1997-2024 Netflix, Inc.</p>
      </div>
    </div>
  );
}

export default Footer;
