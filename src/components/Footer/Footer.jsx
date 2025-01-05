import React from "react";
import "./Footer.css"
import { FaFacebook,FaInstagram,FaTwitter,FaLinkedinIn,FaAppStore,FaGooglePlay } from "react-icons/fa"; // Import icons from React Icons
import { useTranslation } from "react-i18next";


const Footer = () => {

  const {t , i18n} = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    changeDirection(lng);

  }
  const changeDirection = (lng) => {
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
  };

    return (
        <footer className="footer">
             <div className="footer-container">

        {/* Section 1 */}
        <div className="footer-section">
          <h4>{ t("Discover") }</h4>
          <ul>
            <li>Cat1</li>
            <li>cat2</li>
            <li>type1</li>
            <li>type2</li>
            {/* .. */}
          </ul>
        </div>

 {/* Section 2 */}
 <div className="footer-section">
          <h4>About Us</h4>
          <ul>
            <li>Company</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Section 3 */}
        <div className="footer-section">
          <h4>Customer Service</h4>
          <ul>
            <li>Contact Us</li>
            <li>FAQs</li>
          </ul>
        </div>
          {/* Social Media */}
          <div className="footer-section">
          <h4>Social Media</h4>
          <div className="icons">
            <FaFacebook className="icon" />
            <FaInstagram className="icon" />
            <FaTwitter className="icon" />
            <FaLinkedinIn className="icon" />
          </div>
        </div>

        {/* Language and Apps */}
        <div className="footer-bottom">
          <div className="language-selector">
            <select onChange={
              (e)=> changeLanguage(e.target.value)} 
              defaultValue={i18n.language}> 
              <option value="en">English</option>
              <option value="ar">العربية</option>
            </select>
          </div>
          <div className="icons">
          <FaAppStore className="icon" />
          <FaGooglePlay className="icon" />
          </div>
        </div>

        </div>
        <p className="copyright">© 2025 Your Company. All Rights Reserved.</p>

        </footer>
    )
}

export default Footer;