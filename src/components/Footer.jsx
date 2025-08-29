import React from "react";

const Footer = () => {
  return (
    <div>
      <footer id="contact" className="bg-gray-900 text-gray-200 py-10 mt-10">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
          <div>
            <h3 className="font-bold mb-2">About IES College</h3>
            <p className="text-sm">
              The IES College of Technology, Bhopal, promoted by Infotech
              Education Society, has been working towards excellence in
              education since 1999.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="/">Conference</a>
              </li>
              <li>
                <a href="/call-for-papers">Call for Papers</a>
              </li>
              <li>
                <a href="/committee">Committee</a>
              </li>
              <li>
                <a href="/registration">Registration</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Contact Info</h3>
            <p className="text-sm">Bhopal, MP 462044</p>
            <p className="text-sm">+91-9893216819</p>
            <p className="text-sm">dr.rajeshnema@iesbpl.ac.in</p>
          </div>
        </div>
        <div className="text-center text-sm text-gray-500 mt-6">
          © 2026 ICBDML Conference. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
