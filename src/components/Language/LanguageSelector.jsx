import React from "react";
import { useTranslation } from "react-i18next";
import { FaLanguage } from "react-icons/fa"
import "./LanguageSelector.css"

const LanguageSelector = () => {

    const { i18n }  = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
    }
    return (
         <FaLanguage className="language-selector" aria-label="Toggle Language" onClick={ () =>
                  changeLanguage(i18n.language === "en" ? "ar" : "en" )
        }/>
    );
}

export default LanguageSelector;