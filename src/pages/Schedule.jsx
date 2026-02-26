import { Download, Eye } from "lucide-react";
import { useState } from "react";

const scheduleData = {
  day1: [
    {
      time: "9:30 AM - 10:30 AM",
      sessions: [{ title: "Registrations", type: "General" }],
    },
    {
      time: "10:30 AM - 11:45 AM",
      sessions: [{ title: "Inaugural Ceremony", type: "General" }],
    },
    {
      time: "11:45 AM - 12:00 Noon",
      sessions: [{ title: "Tea Break", type: "Break" }],
    },
    {
      time: "12:00 PM - 1:00 PM",
      sessions: [
        { title: "Keynote Address 1", type: "Offline" },
        { title: "Technical Session 1(A)", type: "Offline" },
      ],
    },
    {
      time: "1:00 PM - 2:00 PM",
      sessions: [{ title: "Lunch Break", type: "Break" }],
    },
    {
      time: "2:00 PM - 2:45 PM",
      sessions: [{ title: "Keynote Address 2", type: "Offline" }],
    },
    {
      time: "2:00 PM - 5:00 PM",
      sessions: [{ title: "Offline Technical Session 1(B)", type: "Offline" }],
    },
    {
      time: "2:00 PM - 3:30 PM",
      sessions: [
        { title: "Technical Session 2", type: "Online" },
        { title: "Technical Session 3", type: "Online" },
        { title: "Technical Session 4", type: "Online" },
        { title: "Technical Session 5", type: "Online" },
      ],
    },
    {
      time: "3:30 PM - 5:00 PM",
      sessions: [
        { title: "Technical Session 6", type: "Online" },
        { title: "Technical Session 7", type: "Online" },
        { title: "Technical Session 8", type: "Online" },
        { title: "Technical Session 9", type: "Online" },
      ],
    },
  ],
  day2: [
    {
      time: "10:00 AM - 10:45 AM",
      sessions: [{ title: "Keynote Address 3", type: "Online" }],
    },
    {
      time: "10:45 AM - 11:30 AM",
      sessions: [{ title: "Keynote Address 4", type: "Online" }],
    },
    {
      time: "11:30 AM - 1:00 PM",
      sessions: [
        { title: "Technical Session 10", type: "Online" },
        { title: "Technical Session 11", type: "Online" },
        { title: "Technical Session 12", type: "Online" },
        { title: "Technical Session 13", type: "Online" },
        { title: "Technical Session 14", type: "Online" },
      ],
    },
    {
      time: "1:00 PM - 2:00 PM",
      sessions: [{ title: "Lunch Break", type: "Break" }],
    },
    {
      time: "2:00 PM - 3:30 PM",
      sessions: [
        { title: "Technical Session 15", type: "Online" },
        { title: "Technical Session 16", type: "Online" },
        { title: "Technical Session 17", type: "Online" },
        { title: "Technical Session 18", type: "Online" },
      ],
    },
  ],
};

const getCardStyles = (type) => {
  switch (type) {
    case "Online":
      return {
        border: "border-blue-500",
        bg: "bg-white",
        tag: "bg-blue-100 text-blue-700",
      };
    case "Offline":
      return {
        border: "border-emerald-500",
        bg: "bg-white",
        tag: "bg-emerald-100 text-emerald-700",
      };
    case "Break":
      return {
        border: "border-amber-400",
        bg: "bg-amber-50",
        tag: "bg-amber-200 text-amber-800",
      };
    default:
      return {
        border: "border-indigo-500",
        bg: "bg-white",
        tag: "bg-indigo-100 text-indigo-700",
      };
  }
};

const Schedule = () => {
  const [activeTab, setActiveTab] = useState("day1");

  const currentSchedule =
    activeTab === "day1" ? scheduleData.day1 : scheduleData.day2;
  const currentTitle =
    activeTab === "day1"
      ? "Day 1 - 27th February 2026"
      : "Day 2 - 28th February 2026";

  return (
    <div className="min-h-screen bg-slate-50 w-full font-sans">
      <header className="w-full bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 text-white pt-32 py-16 px-6 lg:px-12 shadow-lg">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-indigo-300 font-bold tracking-widest uppercase mb-4 text-sm lg:text-base">
            IES College of Technology, Bhopal
          </p>
          <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 leading-tight">
            2nd International IEEE Conference <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              on Big Data & Machine Learning
            </span>
          </h1>
          <p className="text-xl text-slate-300 font-light">
            Event Flow (ICBDML 2026)
          </p>
        </div>
      </header>
      <div className="max-w-7xl mx-auto my-12 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
        <div className="flex flex-col sm:flex-row items-center justify-between p-6 sm:p-8 gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
            <div className="w-16 h-16 bg-emerald-50 rounded-2xl border border-emerald-100 flex items-center justify-center flex-shrink-0 shadow-sm">
              <svg
                className="w-8 h-8 text-emerald-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-1">
                Detailed Schedule Spreadsheet
              </h3>
              <p className="text-slate-500 font-medium">
                Paper Presentation Session Schedule
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-4">
            <a
              target="_blank"
              href="https://docs.google.com/spreadsheets/d/1ReyVFxdt_pFRDPSsU0J37OEa4qu_jkfB/edit?usp=sharing&ouid=113530697339864773634&rtpof=true&sd=true"
              className="inline-flex items-center gap-2 px-4 py-3.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 w-full sm:w-auto justify-center"
            >
              View Sheet
              <Eye size={14} />
            </a>
            <a
              href="https://docs.google.com/spreadsheets/d/1ReyVFxdt_pFRDPSsU0J37OEa4qu_jkfB/export?format=xlsx"
              className="inline-flex items-center gap-2 px-4 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 w-full sm:w-auto justify-center"
              download
            >
              Download Excel
              <Download size={14} />
            </a>
            <a
              href="/sessions"
              className="inline-flex items-center gap-2 px-4 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 w-full sm:w-auto justify-center"
            >
              Session Chairs and Links of all Sessions
            </a>
          </div>
        </div>
      </div>
      <main className="w-full px-4 sm:px-8 lg:px-12 py-6 max-w-[100vw]">
        <div className="flex justify-center mb-12">
          <div className="bg-white p-1 rounded-xl shadow-sm border border-slate-200 inline-flex w-full max-w-md">
            <button
              onClick={() => setActiveTab("day1")}
              className={`flex-1 py-3 px-6 rounded-lg text-sm lg:text-base font-semibold transition-all duration-300 ${
                activeTab === "day1"
                  ? "bg-indigo-600 text-white shadow-md"
                  : "text-slate-600 hover:text-indigo-600 hover:bg-slate-50"
              }`}
            >
              Day 1 [ 27th Feb ]
            </button>
            <button
              onClick={() => setActiveTab("day2")}
              className={`flex-1 py-3 px-6 rounded-lg text-sm lg:text-base font-semibold transition-all duration-300 ${
                activeTab === "day2"
                  ? "bg-indigo-600 text-white shadow-md"
                  : "text-slate-600 hover:text-indigo-600 hover:bg-slate-50"
              }`}
            >
              Day 2 [ 28th Feb ]
            </button>
          </div>
        </div>
        <div className="max-w-screen-2xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-800 mb-8 pb-4 border-b-2 border-slate-200">
            {currentTitle}
          </h2>

          <div className="space-y-6">
            {currentSchedule.map((slot, index) => (
              <div
                key={index}
                className="flex flex-col lg:flex-row gap-4 lg:gap-8 group"
              >
                <div className="lg:w-64 flex-shrink-0 pt-2">
                  <div className="bg-slate-100 rounded-lg p-3 inline-block lg:block lg:bg-transparent lg:p-0">
                    <span className="text-slate-700 p-2 shadow-sm rounded-lg font-bold tracking-wide flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-indigo-500 hidden lg:block"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {slot.time}
                    </span>
                  </div>
                </div>
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                  {slot.sessions.map((session, sIdx) => {
                    const styles = getCardStyles(session.type);

                    return (
                      <div
                        key={sIdx}
                        className={`
                          ${styles.bg} border-l-4 ${styles.border} 
                          rounded-r-xl shadow-sm p-5 
                          transition-all duration-300 hover:shadow-lg hover:-translate-y-1
                          border-y border-r border-y-slate-100 border-r-slate-100
                          flex flex-col justify-between
                        `}
                      >
                        <h4 className="text-lg font-semibold text-slate-800 mb-4 leading-snug">
                          {session.title}
                        </h4>

                        <div className="mt-auto">
                          <span
                            className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${styles.tag}`}
                          >
                            {session.type}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Schedule;
