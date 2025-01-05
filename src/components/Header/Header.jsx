import React from "react";
import "./Header.css"
import { FaShoppingCart, FaUser, FaLanguage, FaHeart, FaSearch } from "react-icons/fa"; // Import icons from React Icons
import logo from "../../assets/logo.ico"
import { useTranslation } from 'react-i18next';


const Header = () => {

  const { t , i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
    changeDirection(lng);
  }

  const changeDirection = (lng) => {
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
  };

return <header className="header">
     <img width="120" height="75" src={logo} alt="Logo" />
  <nav>
    <ul>
      <li><a href="#home">{ t("All Products") }</a></li>
      <li><a href="#home">{ t("All Shops") }</a></li>
      <li><a href="#home">{t("Categoires")}</a></li>
      <li><a href="#home">{t("Types")}</a></li>
      <li><a href="#about">{t("About")}</a></li>
      <li><a href="#contact">{t("Contact")}</a></li>
    </ul>
  </nav>

  <div className="icons">
        {/* Adding the icons */}
        <FaSearch className="icon" />
        <FaHeart className="icon" />
        <FaLanguage className="icon"  onClick={ () =>
          changeLanguage(i18n.language === "en" ? "ar" : "en" )
          }/>
        <FaUser className="icon" />
        <FaShoppingCart className="icon" />
      </div>

</header>


}


export default Header;