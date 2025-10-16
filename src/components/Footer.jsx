import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import tagline from '../assets/tagline (1).png';

const Footer = () => {
  const { t } = useTranslation(["footer"]);
  
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo + About */}
        <div>
          <img src={tagline} alt="Delightech Logo" className="w-64 mb-4" />
          <p className="text-sm leading-relaxed">
            {t("companyDescription", { ns: "footer" })}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">{t("quickLinks", { ns: "footer" })}</h3>
          <ul className="space-y-2">
            <li><a href="#features" className="hover:text-white transition">{t("features", { ns: "footer" })}</a></li>
            <li><a href="#solution" className="hover:text-white transition">{t("solution", { ns: "footer" })}</a></li>
            <li><a href="#step" className="hover:text-white transition">{t("howItWork", { ns: "footer" })}</a></li>
            <li><a href="#videos" className="hover:text-white transition">{t("videos", { ns: "footer" })}</a></li>
          </ul>
        </div>

        {/* Contact + Socials */}
        <div>
          <h3 className="text-white font-semibold mb-4">{t("contact", { ns: "footer" })}</h3>
          <p className="text-sm">{t("location", { ns: "footer" })}</p>
          <p className="text-sm">{t("email", { ns: "footer" })}</p>
          <p className="text-sm mb-4">{t("phone", { ns: "footer" })}</p>

          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook className="text-2xl hover:text-blue-500 transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram className="text-2xl hover:text-pink-500 transition" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin className="text-2xl hover:text-blue-400 transition" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <FaYoutube className="text-2xl hover:text-red-500 transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Delightech PLC. {t("copyright", { ns: "footer" })}
      </div>
    </footer>
  );
};

export default Footer;