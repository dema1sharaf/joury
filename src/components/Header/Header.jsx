import React, { Suspense } from "react";
import "./Header.css"
import { FaShoppingCart, FaUser, FaHeart, FaSearch } from "react-icons/fa"; // Import icons from React Icons
import logo from "../../assets/logo.ico"
import { useTranslation } from 'react-i18next';
import LanguageSelector from "../Language/LanguageSelector";


const Header = () => {

  const { t } = useTranslation();


return <header className="header">
     <img width="120" height="75" src={logo} alt="Logo"  loading="lazy"/>
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
        <FaSearch className="icon" aria-label="search" />
        <FaHeart className="icon" aria-label="Favorites" />
        <Suspense fallback={<div>Loading...</div>}>
        <LanguageSelector />
        </Suspense>
        <FaUser aria-label="User Profile" className="icon" />
        <FaShoppingCart aria-label="Shopping Cart" className="icon" />
      </div>

</header>


}


export default Header;