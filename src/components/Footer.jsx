import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import tagline from '../assets/tagline (1).png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo + About */}
        <div>
          <img src={tagline} alt="Delightech Logo" className="w-64 mb-4" />
          <p className="text-sm leading-relaxed">
            Delightech PLC is a fintech innovator building solutions to make
            finance faster, easier, and more secure. Our flagship product,
            LUYLEUN, redefines instant loan access in Cambodia.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-white transition">Features</a></li>
            <li><a href="/about" className="hover:text-white transition">Solution</a></li>
            <li><a href="/portfolio" className="hover:text-white transition">How It work</a></li>
            <li><a href="/contact" className="hover:text-white transition">Videos</a></li>
          </ul>
        </div>

        {/* Contact + Socials */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <p className="text-sm">Phnom Penh, Cambodia</p>
          <p className="text-sm">Email: info@delightech.com</p>
          <p className="text-sm mb-4">Phone: +855 123 456 789</p>

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
         {new Date().getFullYear()} Delightech PLC. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;