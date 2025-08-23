// ImpDates.jsx
import React from "react";
import {
  FaRocket,
  FaClock,
  FaCheckCircle,
  FaFileUpload,
  FaUserPlus,
  FaCalendarAlt,
  FaExclamationTriangle,
} from "react-icons/fa";

const events = [
  {
    title: "Paper Submission Opens",
    date: "July 15, 2025",
    description:
      "Call for papers announced. Researchers can start submitting their original work across all conference tracks including AI, Machine Learning, and Big Data Analytics.",
    icon: FaRocket,
    status: "Upcoming",
  },
  {
    title: "Full Paper Submission Deadline",
    date: "December 10, 2025",
    description:
      "Final deadline for full-length paper submissions. All papers must be original, unpublished work following IEEE format guidelines.",
    icon: FaClock,
    status: "Upcoming",
    extraNotice: "Extended deadline - Don't miss this final opportunity!",
  },
  {
    title: "Acceptance Notification",
    date: "November 15, 2025",
    description:
      "Authors will be notified about the acceptance status of their submissions via email. Detailed reviewer feedback will be provided for all submissions.",
    icon: FaCheckCircle,
    status: "Upcoming",
  },
  {
    title: "Camera Ready Submission",
    date: "December 24, 2025",
    description:
      "Final version of accepted papers must be submitted incorporating reviewer comments. Papers will be submitted to IEEE Xplore for publication.",
    icon: FaFileUpload,
    status: "Upcoming",
  },
  {
    title: "Early Registration Period",
    date: "January 1–10, 2026",
    description:
      "Early bird registration period with special discounted rates for students, IEEE members, and international participants. Secure your spot today!",
    icon: FaUserPlus,
    status: "Upcoming",
  },
  {
    title: "Conference Days",
    date: "January 23–24, 2026",
    description:
      "Two-day international conference featuring keynote speeches, technical paper presentations, panel discussions, and networking sessions with industry leaders and researchers.",
    icon: FaCalendarAlt,
    status: "Upcoming",
  },
];

const statusClasses = (status) => {
  const map = {
    Upcoming: "bg-blue-600",
    Open: "bg-green-600",
    Closed: "bg-gray-500",
    Extended: "bg-red-600",
  };
  return map[status] || "bg-blue-600";
};

export default function ImpDates() {
  return (
    <section className="px-4 pt-24 pb-6 max-w-6xl mx-auto" id="schedule">
      <div className="text-center mb-12 border-b border-dashed">
        <h2 className="text-4xl font-bold mb-8">Important Dates</h2>
        <p className="text-gray-600 mt-2">
          Stay updated with all the key milestones for ICBDML 2025. Mark your
          calendar and don't miss any crucial deadlines!
        </p>
      </div>

      <div className="relative">
        {/* Central vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 -translate-x-1/2"></div>

        <ol className="space-y-12">
          {events.map((e, idx) => {
            const Icon = e.icon;
            const isLeft = idx % 2 === 0; // alternate
            return (
              <li
                key={idx}
                className="relative flex justify-between items-center w-full"
              >
                {/* Left side */}
                <div className={`w-5/12 ${isLeft ? "text-right" : ""}`}>
                  {isLeft && (
                    <div className="bg-white border border-gray-200 rounded-xl shadow p-4 md:p-5">
                      <div className="flex flex-wrap items-center gap-2 justify-end">
                        <h3 className="font-semibold text-lg">{e.title}</h3>
                        <span
                          className={`text-xs text-white px-2 py-1 rounded ${statusClasses(
                            e.extraNotice ? "Extended" : e.status
                          )}`}
                        >
                          {e.extraNotice ? "Extended" : e.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">{e.date}</p>
                      <p className="text-sm text-gray-700 mt-3">
                        {e.description}
                      </p>
                      {e.extraNotice && (
                        <div className="mt-3 flex justify-end text-sm text-red-600">
                          <FaExclamationTriangle className="mt-0.5 mr-2" />
                          <span className="font-medium">{e.extraNotice}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Center Icon */}
                <div
                  className={`z-10 flex items-center justify-center w-10 h-10 rounded-full ring-8 ring-white text-white ${statusClasses(
                    e.extraNotice ? "Extended" : e.status
                  )}`}
                >
                  <Icon className="w-5 h-5" />
                </div>

                {/* Right side */}
                <div className={`w-5/12 ${!isLeft ? "text-left" : ""}`}>
                  {!isLeft && (
                    <div className="bg-white border border-gray-200 rounded-xl shadow p-4 md:p-5">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-semibold text-lg">{e.title}</h3>
                        <span
                          className={`text-xs text-white px-2 py-1 rounded ${statusClasses(
                            e.extraNotice ? "Extended" : e.status
                          )}`}
                        >
                          {e.extraNotice ? "Extended" : e.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">{e.date}</p>
                      <p className="text-sm text-gray-700 mt-3">
                        {e.description}
                      </p>
                      {e.extraNotice && (
                        <div className="mt-3 flex items-start text-sm text-red-600">
                          <FaExclamationTriangle className="mt-0.5 mr-2" />
                          <span className="font-medium">{e.extraNotice}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
