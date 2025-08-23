import React, { useState } from "react";
import { X, Menu } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <a
            href="/"
            className="font-black text-3xl font-serif bg-gradient-to-br from-blue-500 via-blue-800 to-sky-400 bg-clip-text text-transparent"
          >
            ICBDML-2026
          </a>
          <ul className="hidden md:flex space-x-6 font-medium">
            <li>
              <a href="/" className="hover:text-blue-600">Home</a>
            </li>
            <li>
              <a href="#schedule" className="hover:text-blue-600">Schedule</a>
            </li>
            <li>
              <a href="/committee" className="hover:text-blue-600">Committee</a>
            </li>
            <li>
              <a href="/submission" className="hover:text-blue-600">Paper Submission</a>
            </li>
            <li>
              <a href="/call-for-papers" className="hover:text-blue-600">Paper Call</a>
            </li>
            <li>
              <a href="/past-conferences" className="hover:text-blue-600">Past Event</a>
            </li>
            <li>
              <a href="/registration" className="hover:text-blue-600">Registration</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-600">Contact</a>
            </li>
          </ul>
          <button
            className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="w-6 h-6 text-gray-800" />
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center">
          <div className="bg-white rounded-xl shadow-lg w-11/12 max-w-sm p-6 relative">
            <button
              className="absolute top-4 right-4"
              onClick={() => setIsOpen(false)}
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>
            <ul className="flex flex-col space-y-4 text-lg font-medium mt-4">
              <li><a href="/" onClick={() => setIsOpen(false)}>Home</a></li>
              <li><a href="#schedule" onClick={() => setIsOpen(false)}>Schedule</a></li>
              <li><a href="/committee" onClick={() => setIsOpen(false)}>Committee</a></li>
              <li><a href="/submission" onClick={() => setIsOpen(false)}>Paper Submission</a></li>
              <li><a href="/call-for-papers" onClick={() => setIsOpen(false)}>Paper Call</a></li>
              <li><a href="/past-conferences" onClick={() => setIsOpen(false)}>Past Event</a></li>
              <li><a href="/registration" onClick={() => setIsOpen(false)}>Registration</a></li>
              <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
