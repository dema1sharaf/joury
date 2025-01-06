import React, { Suspense } from "react";
import "./Footer.css"
import { FaFacebook,FaInstagram,FaTwitter,FaLinkedinIn,FaAppStore,FaGooglePlay } from "react-icons/fa"; // Import icons from React Icons
import { useTranslation } from "react-i18next";
import LanguageSelector from "../Language/LanguageSelector";


const Footer = () => {

  const { t } = useTranslation();


    return (
      <footer className="footer footer-container">
        <section className="footer-section">
        <h4>{ t("Discover") }</h4>
          <ul>
            <li>Cat1</li>
            <li>cat2</li>
            <li>type1</li>
            <li>type2</li>
            {/* .. */}
          </ul>
        </section>
        <section className="footer-section">
        <h4>About Us</h4>
          <ul>
            <li>Company</li>
            <li>Privacy Policy</li>
          </ul>
        </section>
        <section className="footer-section">
        <h4>Customer Service</h4>
          <ul>
            <li>Contact Us</li>
            <li>FAQs</li>
          </ul>
        </section>
        <section className="footer-section">
        <h4>Social Media</h4>
        <div className="icons">
  <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
    <FaFacebook className="icon" loading="lazy"/>
  </a>
  <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
    <FaInstagram className="icon" loading="lazy"/>
  </a>
  <a href="https://x.com" aria-label="twitter" target="_blank" rel="noopener noreferrer">
  <FaTwitter className="icon" loading="lazy" />
  </a>
  <a href="https://linkedIn.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="icon" loading="lazy" />
            </a>
      
</div>
        </section>
     
        {/* <div className="language-selector">
            <select onChange={
              (e)=> changeLanguage(e.target.value)} 
              defaultValue={i18n.language}> 
              <option value="en">English</option>
              <option value="ar">العربية</option>
            </select>
        </div> */}
             <Suspense fallback={<div>Loading...</div>}>
        <LanguageSelector />
        </Suspense>
       
        <p className="copyright">© 2025 Your Company. All Rights Reserved.</p>
        <div className="icons"></div>
        <div className="icons">
          <FaAppStore className="icon" />
          <FaGooglePlay className="icon" />
        </div>
      </footer>
    )
}

export default Footer;