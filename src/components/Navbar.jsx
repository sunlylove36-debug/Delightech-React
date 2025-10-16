import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/DLT (3).png'
import ToggleTheme from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from "react-i18next";
export default function Navbar(){
  const { t } = useTranslation(["navbar"]);
  return (
    <nav className="bg-blue-700 fixed top-0 left-0 w-full z-50">
      <div className="backdrop-blur-md bg-white/10 border-b border-white/30">
        <div className="flex justify-between items-center px-6 md:px-16 py-5">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-10 w-10" />
          </div>
        <div className="hidden md:flex gap-6 items-center text-white">
          <a href="#features" className="hover:text-blue-600">{t("features", { ns: "navbar" })}</a>
          <a href="#solution" className="hover:text-blue-600">{t("solutions", { ns: "navbar" })}</a>
          <a href="#step" className="hover:text-blue-600">{t("how It Works", { ns: "navbar" })}</a>
          <a href="#videos" className="hover:text-blue-600">{t("vidoes", { ns: "navbar" })}</a>
          <a href="#team" className="hover:text-blue-600">{t("team", { ns: "navbar" })}</a> 
          <a href="#career" className="hover:text-blue-600">{t("career", { ns: "navbar" })}</a>
           <ToggleTheme/>
           <LanguageSwitcher/>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 border rounded-full px-6 bg-white text-blue-500 text-sm">{t("login", { ns: "navbar" })}</button>
        </div>
      </div>
      </div>
    </nav>
  )
}
