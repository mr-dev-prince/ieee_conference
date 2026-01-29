import { FaCalendarAlt, FaInfoCircle, FaTicketAlt } from "react-icons/fa";
import { useEffect, useState } from "react";

import ieee from "../assets/ieee.png";

const images = [
  "https://iesbpl.ac.in/uploads/slider/icot.jpg",
  "https://iesbpl.ac.in/uploads/2018/3%20july%202018.jpg",
  "https://res.cloudinary.com/dvtdutvno/image/upload/v1749551609/k6fa3lbjvlujeixu8lfb.png",
  "https://icotech.in/uploads/2017-18/Innovative%20Program%20in%20the%20state/Group%20photo%20of%20IES%20Group%20of%20Institutions%20BE%20(Mechanical%20Engineering)%20student%202017%20passing%20out%20batch%2025.5.17.jpg",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="w-full text-white pt-16">
      <div className="w-full h-[30vh]">
        <img
          src={ieee}
          alt="IEEE"
          className="w-full h-full object-contain bg-white"
        />
      </div>
      <div className="relative overflow-hidden mb-2 h-[3vh] bg-white w-full">
        <p
          className="whitespace-nowrap text-black font-semibold
         animate-marquee"
        >
          👉 IEEE Conference | Madhya Pradesh Section | 2026 {" • "}
          <span className="text-red-600 animate-pulse">Submission Closed</span>
        </p>
      </div>
      <div className="relative h-screen flex items-center justify-center text-center">
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt="conference background"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              idx === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 px-6 max-w-5xl">
          <div className="flex justify-center items-center gap-2 text-lg mb-4">
            <FaCalendarAlt />
            27th - 28th FEB, 2026 • Bhopal, India
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-snug">
            2<sup>ND</sup> IEEE INTERNATIONAL CONFERENCE <br />
            ON BIG DATA & MACHINE LEARNING
          </h1>

          <div className="mt-4 inline-block px-4 py-2 rounded-full border border-green-400 bg-green-600/40">
            Conference in Hybrid Mode
          </div>

          <p className="mt-4 text-lg max-w-3xl mx-auto">
            Join the world's leading experts in Big Data and Machine Learning{" "}
            <br /> at <strong>IES College of Technology, Bhopal.</strong>
          </p>

          <div className="mt-6 flex gap-4 justify-center flex-wrap">
            <a
              href="https://forms.gle/SvhLJYaMRRkdyHnu7"
              target="_blank"
              className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg flex items-center gap-2 font-semibold"
            >
              <FaTicketAlt /> Register Now
            </a>
            <a
              href="#about"
              className="px-6 py-3 bg-gray-700 hover:bg-gray-800 rounded-lg flex items-center gap-2 font-semibold"
            >
              <FaInfoCircle /> Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
