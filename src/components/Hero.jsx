import { useEffect, useState } from "react";
import { FaCalendarAlt, FaTicketAlt, FaInfoCircle } from "react-icons/fa";

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
    <section
      id="home"
      className="relative h-screen flex flex-col justify-center items-center text-center text-white overflow-hidden"
    >
      <div className="absolute inset-0">
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
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="relative z-10 px-6">
        <div className="flex justify-center items-center gap-2 text-lg mb-4">
          <FaCalendarAlt /> 27th - 28th, 2026 • Bhopal, India
        </div>
        <div className="animate-pulse">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-snug glitch">
            2<sup>ND</sup> IEEE INTERNATIONAL CONFERENCE <br /> ON BIG DATA &
            MACHINE LEARNING
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg">
            Join the world's leading experts in Big Data and Machine Learning at
            IES College of Technology, Bhopal.
          </p>
        </div>
        <div className="mt-6 flex gap-4 justify-center">
          <a
            href="#register"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center gap-2 text-white font-semibold"
          >
            <FaTicketAlt /> Register Now
          </a>
          <a
            href="#about"
            className="px-6 py-3 bg-gray-700 hover:bg-gray-800 rounded-lg flex items-center gap-2 text-white font-semibold"
          >
            <FaInfoCircle /> Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
