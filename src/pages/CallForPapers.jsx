import React from "react";

export default function CallForPapers() {
  const topics = [
    "Digital Forensics",
    "Signal and Image Processing",
    "Very Large Scale Integration (VLSI)",
    "Power Electronics",
    "Manufacturing Engineering",
    "Solid Mechanics",
    "Fluid Mechanics",
    "Concrete Science and Technology",
    "Construction Planning, Scheduling, and Control",
    "Explainable AI",
    "Automation Systems",
    "Computer Vision",
    "Digital Twins",
    "Mobile Systems",
    "Cyber Physical Machines",
    "High-Performance Computing",
    "Agile Systems",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <section className="relative h-screen flex items-center justify-center text-center text-white">
        <div className="absolute inset-0">
          <img
            src="https://iesbpl.ac.in/uploads/slider/icot.jpg"
            alt="conference background"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 }`}
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 max-w-4xl px-6">
          <span className="inline-block bg-yellow-400 text-black font-semibold px-4 py-1 rounded-full mb-4">
            <i className="fas fa-file-alt mr-2" /> Call for Papers
          </span>
          <h1 className="text-5xl font-extrabold mb-4">ICBDML-2026</h1>
          <p className="text-lg mb-8">
            2nd International Conference on Big Data and Machine Learning |{" "}
            <br /> Bhopal, Madhya Pradesh, India
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://cmt3.research.microsoft.com/ICBDML2026"
              className="bg-blue-600 hover:bg-blue-800 px-6 py-3 rounded-lg font-semibold flex items-center gap-2"
            >
              <i className="fas fa-paper-plane" /> Submit Paper
            </a>
            <a
              href="/submission"
              className="bg-gray-600 hover:bg-gray-800 px-6 py-3 rounded-lg font-semibold flex items-center gap-2"
            >
              <i className="fas fa-info-circle" /> View Guidelines
            </a>
          </div>
        </div>
      </section>
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Call for Papers</h2>
          <p className="text-gray-700 mb-6">
            We invite high-quality research papers for ICBDML-2026 in all areas
            of Big Data, Machine Learning, AI, Security, and Engineering
            Applications. Papers should be original, unpublished, and adhere to
            IEEE formatting guidelines.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mt-10">
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <i className="fas fa-file-alt text-blue-600" /> Paper Format
            </h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>IEEE 2-column standard format</li>
              <li>Maximum 6 pages including references</li>
              <li>Times New Roman, 10pt</li>
              <li>Word (.doc) or PDF (.pdf)</li>
            </ul>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <i className="fas fa-calendar-alt text-green-600" /> Important
              Dates
            </h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Submission Deadline: 15th May 2026</li>
              <li>Notification of Acceptance: 20th June 2026</li>
              <li>Camera Ready Submission: 5th July 2026</li>
              <li>Conference Date: 23-24 January 2026</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">Research Topics</h2>
            <p className="text-gray-700 mt-2">
              We welcome original research papers covering the following areas
              and related topics.
            </p>
          </div>

          <div className="p-6 md:p-8 bg-gray-50 rounded-2xl shadow">
            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <i className="fas fa-database text-indigo-600" />
              Topics of Interest
            </h4>
            <ul className="list-disc pl-5 columns-1 sm:columns-2 lg:columns-3 gap-8">
              {topics.map((t) => (
                <li key={t} className="mb-2" style={{ breakInside: "avoid" }}>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section id="schedule" className="py-16 px-6 md:px-20 bg-gray-50 space-y-3">
        <div className="max-w-5xl mx-auto text-left flex flex-col">
          <p className="text-xl font-semibold bg-gray-400 p-2 rounded-t-sm text-white">
            Call For Papers Website URL{" "}
          </p>
          <a
            target="_blank"
            href="https://cmt3.research.microsoft.com/ICBDML2026"
            className="text-blue-600 underline bg-gray-200 p-2 rounded-b-sm"
          >
            Microsoft CMT portal
          </a>
        </div>
        <div className="max-w-5xl mx-auto text-left flex flex-col">
          <p className="text-xl font-semibold bg-gray-400 p-2 rounded-t-sm text-white">
            Abstract Submission Date{" "}
          </p>
          <p className="bg-gray-200 p-2 rounded-b-sm">2025-7-15</p>
        </div>
        <div className="max-w-5xl mx-auto text-left flex flex-col">
          <p className="text-xl font-semibold bg-gray-400 p-2 rounded-t-sm text-white">
            Full Paper Submission Date{" "}
          </p>
          <p className="bg-gray-200 p-2 rounded-b-sm">2025-12-10</p>
        </div>
        <div className="max-w-5xl mx-auto text-left flex flex-col">
          <p className="text-xl font-semibold bg-gray-400 p-2 rounded-t-sm text-white">
            Notification of Acceptance Date{" "}
          </p>
          <p className="bg-gray-200 p-2 rounded-b-sm">2025-11-15</p>
        </div>
        <div className="max-w-5xl mx-auto text-left flex flex-col">
          <p className="text-xl font-semibold bg-gray-400 p-2 rounded-t-sm text-white">
            Final Paper Submission Date
          </p>
          <p className="bg-gray-200 p-2 rounded-b-sm">2025-12-20</p>
        </div>
      </section>
    </div>
  );
}
