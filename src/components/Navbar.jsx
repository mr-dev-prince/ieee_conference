import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="text-xl font-bold">ICBDML-2026</div>
          <ul className="hidden md:flex space-x-6 font-medium">
            <li>
              <a href="#home" className="hover:text-blue-600">
                Home
              </a>
            </li>
            <li>
              <a href="#schedule" className="hover:text-blue-600">
                Schedule
              </a>
            </li>
            <li>
              <a href="#committee" className="hover:text-blue-600">
                Committee
              </a>
            </li>
            <li>
              <a href="#submission" className="hover:text-blue-600">
                Paper Submission
              </a>
            </li>
            <li>
              <a href="#call" className="hover:text-blue-600">
                Paper Call
              </a>
            </li>
            <li>
              <a href="#past" className="hover:text-blue-600">
                Past Event
              </a>
            </li>
            <li>
              <a href="#register" className="hover:text-blue-600">
                Registration
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-600">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
