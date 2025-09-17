import React from 'react'
import logo from '../assets/DLT (2).png';
export default function Navbar(){
  return (
    <nav className="bg-white fixed top-0 left-0 w-full z-50 shadow">
      <div className="backdrop-blur-md bg-white/10 border-b border-white/30">
        <div className="flex justify-between items-center px-6 md:px-16 py-5">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-10 w-10" />
          </div>
        <div className="hidden md:flex gap-6 items-center text-gray-700">
          <a href="#steps" className="hover:text-blue-600">Home </a>
          <a href="#features" className="hover:text-blue-600">Features</a>
          <a href="#solution" className="hover:text-blue-600">Solution</a>
          <a href="#steps" className="hover:text-blue-600">How it works</a>
          <a href="#videos" className="hover:text-blue-600">Videos</a>
          <a href="#steps" className="hover:text-blue-600">Team </a> 
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 rounded bg-blue-600 text-white text-sm">Download</button>
        </div>
      </div>
      </div>
    </nav>
  )
}
