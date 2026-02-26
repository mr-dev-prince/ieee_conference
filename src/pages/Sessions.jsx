import React, { useState } from "react";
import {
  Calendar,
  MapPin,
  Video,
  Users,
  Mic,
  ExternalLink,
  Clock,
  UserCheck,
} from "lucide-react";

const scheduleData = {
  day1: [
    {
      id: 1,
      time: "12:00 PM - 1:00 PM",
      title: "Keynote Address 1 & Technical Session 1 (Paper Presentations)",
      type: "offline",
      room: "GF5 / BOARD ROOM",
      speakers: "Dr. Abhishek Rawat (IIITM) & Dr. MPS Chawla",
      chairs: "Dr. Laxmi Kumre, Mr. Sunil Kumar Bharti",
      incharge: "Dr. Shilpa Jain and Preeti Verma",
    },
    {
      id: 2,
      time: "01:00 PM - 2:00 PM",
      title: "Lunch & Networking",
      type: "break",
    },
    {
      id: 3,
      time: "2:00 PM - 5:00 PM",
      title: "Keynote & Technical Session 1 (Continued)",
      type: "offline",
      room: "BOARD ROOM",
      speakers: "Dr. Ram Vilas Pachori, IIT, Indore (2:00-2:30 PM)",
      chairs: "Dr. Laxmi Kumre, Ms. Sunil Kumar Bharti",
      incharge: "Dr. Shilpa Jain and Preeti Verma",
    },
    {
      id: 4,
      time: "2:00 PM - 3:30 PM",
      title: "Technical Session 2",
      type: "online",
      room: "GF5",
      speakers: "Key Note by Mr. Aravind Narayanan",
      chairs: "Shilpi Yadav, Dr. Varun Malik",
      incharge: "Sweta Lall",
      link: "https://meet.google.com/hiq-hmdp-uua",
    },
    {
      id: 5,
      time: "2:00 PM - 3:30 PM",
      title: "Technical Session 3",
      type: "online",
      room: "FF 25",
      speakers: "Key Note by Mr. Vamsi",
      chairs: "SujataGupta, Dr. KuldipSingh Kaswan",
      incharge: "Dr. Rajan Kumar",
      link: "https://meet.google.com/kfh-ptvd-twa",
    },
    {
      id: 6,
      time: "2:00 PM - 3:30 PM",
      title: "Technical Session 4",
      type: "online",
      room: "SF 8",
      speakers: "Key Note by Mr. Sasikanth",
      chairs: "Dr. Nagendra Singh, Dr. Kimmi Gupta",
      incharge: "Dr. Anchit Modi",
      link: "https://meet.google.com/fqy-gwyk-hzn",
    },
    {
      id: 7,
      time: "2:00 PM - 3:30 PM",
      title: "Technical Session 5",
      type: "online",
      room: "FF6",
      speakers: "Key Note by Mr. Raghu Gollapudi",
      chairs: "Mr. Riaz Ahmed Mohammed, Dr. Swati Pandey",
      incharge: "Dr. Anil Chourasia",
      link: "https://meet.google.com/afd-gasf-cez",
    },
    {
      id: 8,
      time: "3:30 PM - 5:00 PM",
      title: "Technical Session 6",
      type: "online",
      room: "G5",
      speakers: "Key Note by SasidharGaddam",
      chairs: "BalajiSalem, Dr. Raju Baraskar",
      incharge: "Dr. Bhupendra Koshthi",
      link: "https://meet.google.com/qrx-xezz-vbu",
    },
    {
      id: 9,
      time: "3:30 PM - 5:00 PM",
      title: "Technical Session 7",
      type: "online",
      room: "FF 25",
      chairs: "Mr. Raghu Gollapudi, Dr. Varun Malik",
      incharge: "Dr. Rishi Kushwaha",
      link: "https://meet.google.com/wus-jvcs-szr",
    },
    {
      id: 10,
      time: "3:30 PM - 5:00 PM",
      title: "Technical Session 8",
      type: "online",
      room: "SF 8",
      chairs: "Dr. Rajesh Nema, Dr. Kuldip Singh Kaswan",
      incharge: "Mr. Akshay Varkele",
      link: "https://meet.google.com/xsb-uxqq-eje",
    },
    {
      id: 11,
      time: "3:30 PM - 5:00 PM",
      title: "Technical Session 9",
      type: "online",
      room: "FF6",
      speakers: "Key Note by Mr. Ashutosh Agrawal",
      chairs: "Chandrakant Reddy, Dr. Kimmi Gupta",
      incharge: "Ms. Pragati Gajbhaiye",
      link: "https://meet.google.com/zif-ivzs-haw",
    },
  ],
  day2: [
    {
      id: 12,
      time: "10:00 AM - 10:45 AM",
      title: "Morning Keynote 1",
      type: "online",
      speakers: "Dr. Vijayshree Chourasia, MANIT, Bhopal",
    },
    {
      id: 13,
      time: "10:45 AM - 11:30 AM",
      title: "Morning Keynote 2",
      type: "online",
      speakers: "Dr. Arun Sharma, IGDTUW, Delhi",
    },
    {
      id: 14,
      time: "11:30 AM - 1:00 PM",
      title: "Technical Session 10",
      type: "online",
      room: "BOARD ROOM",
      chairs: "Mr. Dedeepya Sai Gondi, Dr. Priyamwada",
      incharge: "Sweta Lall",
      link: "https://meet.google.com/jeo-krha-cez",
    },
    {
      id: 15,
      time: "11:30 AM - 1:00 PM",
      title: "Technical Session 11",
      type: "online",
      room: "G5",
      speakers: "Key Note by Akshar Patel",
      chairs: "Mr. NirdeshPachoriya, Dr. Shweta Singh",
      incharge: "Mr. Ajigya",
      link: "https://meet.google.com/pay-ukrf-ivw",
    },
    {
      id: 16,
      time: "11:30 AM - 1:00 PM",
      title: "Technical Session 12",
      type: "online",
      room: "FF 25",
      speakers: "Key Note by Mr. Sandeep Dommari",
      chairs: "Dr. Ashish Singhal, Dr. Namrata Talegaonkar",
      incharge: "Dr. Bhupendra Koshthi",
      link: "https://meet.google.com/gwj-rhes-kqe",
    },
    {
      id: 17,
      time: "11:30 AM - 1:00 PM",
      title: "Technical Session 13",
      type: "online",
      room: "SF 8",
      speakers: "Key Note by Mr. Sudhakar Tiwari",
      chairs: "Mr. Prabal Pathak, Dr. Parmalik Kumar",
      incharge: "Dr. Anil Chourasia",
      link: "https://meet.google.com/opj-qjro-gqf",
    },
    {
      id: 18,
      time: "11:30 AM - 1:00 PM",
      title: "Technical Session 14",
      type: "online",
      room: "FF6",
      speakers: "Key Note by Md. Saifur Rahman",
      chairs: "Mr. Anil Kumar Kunda, Dr. Sonali Paunikar",
      incharge: "Mr. Akshay Varkale",
      link: "https://meet.google.com/nav-szxi-sfe",
    },
    {
      id: 19,
      time: "1:00 PM - 2:00 PM",
      title: "Lunch Break",
      type: "break",
    },
    {
      id: 20,
      time: "2:00 PM - 3:30 PM",
      title: "Technical Session 15",
      type: "online",
      room: "GF5",
      speakers: "Key Note by SaiprakashKodela",
      chairs: "Mr. Nagapoturaja Pitchuka, Dr. Manmohan Singh",
      incharge: "Dr. Manmohan Singh",
      link: "https://meet.google.com/uzg-jyih-cbd",
    },
    {
      id: 21,
      time: "2:00 PM - 3:30 PM",
      title: "Technical Session 16",
      type: "online",
      room: "FF 25",
      speakers: "Key Note by Divyaraj Singh Jatav",
      chairs: "AayushShrivastava, Dr. Anchit Modi",
      incharge: "Dr. Anchit Modi",
      link: "https://meet.google.com/iwb-fgct-mgt",
    },
    {
      id: 22,
      time: "2:00 PM - 3:30 PM",
      title: "Technical Session 17",
      type: "online",
      room: "SF 8",
      chairs: "Dr. VibhaTiwari, Dr. Rajan Kumar",
      incharge: "Dr. Rajan Kumar",
      link: "https://meet.google.com/egr-gpbq-hvb",
    },
    {
      id: 23,
      time: "2:00 PM - 3:30 PM",
      title: "Technical Session 18",
      type: "online",
      room: "FF6",
      chairs: "Dr. Monika Vyas, Dr. Amarpreet Kaur",
      incharge: "Dr. Rishi Kushwaha",
      link: "https://meet.google.com/mky-baqz-cxt",
    },
  ],
};

const SessionCard = ({ session }) => {
  if (session.type === "break") {
    return (
      <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-indigo-500/30 rounded-xl p-4 flex items-center justify-center my-6 backdrop-blur-sm">
        <Clock className="w-5 h-5 text-indigo-400 mr-3" />
        <span className="text-lg font-semibold text-indigo-200">
          {session.time} : {session.title}
        </span>
      </div>
    );
  }

  return (
    <div className="bg-white/5 border border-white/10 hover:border-indigo-500/50 transition-all duration-300 rounded-2xl p-6 backdrop-blur-md shadow-lg group">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-3">
        <div className="flex items-center space-x-3">
          <span className="bg-indigo-500/20 text-indigo-300 py-1 px-3 rounded-full text-sm font-medium border border-indigo-500/30 flex items-center">
            <Clock className="w-4 h-4 mr-2" />
            {session.time}
          </span>
          <span
            className={`py-1 px-3 rounded-full text-sm font-medium border flex items-center ${
              session.type === "online"
                ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
                : "bg-amber-500/20 text-amber-300 border-amber-500/30"
            }`}
          >
            {session.type === "online" ? (
              <Video className="w-4 h-4 mr-2" />
            ) : (
              <MapPin className="w-4 h-4 mr-2" />
            )}
            {session.type.toUpperCase()}
          </span>
        </div>
        {session.room && (
          <span className="text-gray-400 text-sm font-medium flex items-center">
            Room: <span className="text-white ml-2">{session.room}</span>
          </span>
        )}
      </div>

      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">
        {session.title}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
        {session.speakers && (
          <div className="flex items-start">
            <Mic className="w-5 h-5 text-gray-500 mt-1 mr-3 flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-400">Keynote / Speaker</p>
              <p className="text-sm font-medium text-gray-200">
                {session.speakers}
              </p>
            </div>
          </div>
        )}
        {session.chairs && (
          <div className="flex items-start">
            <Users className="w-5 h-5 text-gray-500 mt-1 mr-3 flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-400">Session Chairs</p>
              <p className="text-sm font-medium text-gray-200">
                {session.chairs}
              </p>
            </div>
          </div>
        )}
        {session.incharge && (
          <div className="flex items-start">
            <UserCheck className="w-5 h-5 text-gray-500 mt-1 mr-3 flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-400">In Charge</p>
              <p className="text-sm font-medium text-gray-200">
                {session.incharge}
              </p>
            </div>
          </div>
        )}
      </div>

      {session.link && (
        <a
          href={session.link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center w-full md:w-auto justify-center bg-indigo-600 hover:bg-indigo-500 text-white py-2 px-5 rounded-lg transition-colors font-medium text-sm mt-2"
        >
          Join Session <ExternalLink className="w-4 h-4 ml-2" />
        </a>
      )}
    </div>
  );
};

export default function ConferenceSchedule() {
  const [activeTab, setActiveTab] = useState("day1");

  return (
    <div className="h-fit bg-slate-950 text-slate-200 pt-32 pb-12 px-4 sm:px-6 lg:px-8 font-sans selection:bg-indigo-500/30 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-indigo-400 font-semibold tracking-wider text-sm uppercase">
            IES College of Technology, Bhopal
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            2nd International IEEE Conference <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Big Data & Machine Learning
            </span>
          </h1>
          <div className="flex items-center justify-center space-x-6 text-gray-400 mt-6 pt-4 border-t border-white/10 max-w-lg mx-auto">
            <span className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" /> Feb 27-28, 2026
            </span>
            <span className="flex items-center">
              <MapPin className="w-5 h-5 mr-2" /> Hybrid (Online/Offline)
            </span>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center mb-10">
          <div className="bg-white/5 p-1 rounded-xl backdrop-blur-md border border-white/10 flex space-x-1">
            <button
              onClick={() => setActiveTab("day1")}
              className={`px-8 py-3 rounded-lg font-medium text-sm transition-all duration-300 ${
                activeTab === "day1"
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/25"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              Day 1 (27th Feb)
            </button>
            <button
              onClick={() => setActiveTab("day2")}
              className={`px-8 py-3 rounded-lg font-medium text-sm transition-all duration-300 ${
                activeTab === "day2"
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/25"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              Day 2 (28th Feb)
            </button>
          </div>
        </div>

        {/* Schedule Container */}
        <div className="space-y-6">
          {(activeTab === "day1" ? scheduleData.day1 : scheduleData.day2).map(
            (session) => (
              <SessionCard key={session.id} session={session} />
            ),
          )}
        </div>
      </div>
    </div>
  );
}
