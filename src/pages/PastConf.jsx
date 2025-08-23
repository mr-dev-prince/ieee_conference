import { Calendar, Clock, Info, CalendarPlus } from "lucide-react";

const PastConf = () => {
  return (
    <div>
      <header
        className="h-screen bg-gradient-to-r from-blue-900/80 to-black/70 bg-cover bg-center flex items-center justify-center text-center relative"
        style={{
          backgroundImage:
            "url('https://iesbpl.ac.in/uploads/slider/icot.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-3xl text-white px-6">
          <h1 className="text-5xl font-bold mb-4">Past Conferences</h1>
          <p className="text-lg">
            Explore our successful conferences and events that have brought
            together researchers, academics, and industry professionals from
            around the world.
          </p>
        </div>
      </header>
      <main className="section py-16 px-6 lg:px-20 bg-gray-50">
        <div className="events-container">
          <h2 className="text-3xl font-bold text-center mb-4">
            Conference History
          </h2>
          <p className="text-gray-600 text-center mb-10">
            A comprehensive overview of all our past international conferences,
            virtual events, and collaborative initiatives.
          </p>
          <div className="overflow-x-auto shadow-lg rounded-xl bg-white">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 font-semibold text-gray-700">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" /> Event
                    </div>
                  </th>
                  <th className="px-6 py-3 font-semibold text-gray-700">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" /> Date
                    </div>
                  </th>
                  <th className="px-6 py-3 font-semibold text-gray-700">
                    <div className="flex items-center gap-2">
                      <Info className="w-4 h-4" /> Details
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {[
                  {
                    title:
                      "3rd International Conference on Energy, Power and Electrical Engineering",
                    subtitle: "EPEE2023",
                    date: "15-17 Sept 2023",
                    details:
                      "Huazhong University of Science and Technology, China (Faculty of Engineering and Science, University of Agder, Norway) + MANIT, BHOPAL",
                    badge: "IEEE Xplore",
                  },
                  {
                    title:
                      "3rd International Conference on Universal Threats in Expert Applications and Solutions",
                    subtitle: "UNI-TEAS",
                    date: "8-9 Jan 2024",
                    details: "Shree Karni Universe College, Jaipur",
                    badge: "Springer Nature",
                  },
                  {
                    title:
                      "1st International Conference on Big Data & Machine Learning",
                    subtitle: "ICBDML-2024",
                    date: "24-25 Feb 2024",
                    details: "IES College of Technology",
                    badge: "IEEE Xplore",
                  },
                  {
                    title:
                      "Modern Practices and Trends in Expert Applications and Security",
                    subtitle: "MP-TEAS 2024",
                    date: "22-23 Nov 2024",
                    details: "IES University",
                    badge: "Springer Nature",
                  },
                  {
                    title: "2nd International Conference on IHCSP2024",
                    subtitle: "IEEE IHCSP2024",
                    date: "6-8 Dec 2024",
                    details: "MANIT",
                    badge: "IEEE Xplore",
                  },
                  {
                    title:
                      "4th International Conference on Universal Threats in Expert Applications and Solutions",
                    subtitle: "UNI-TEAS",
                    date: "1-2 Feb 2025",
                    details: "Shree Karni Universe College, Jaipur",
                    badge: "Springer Nature",
                  },
                ].map((event, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="font-semibold">{event.title}</div>
                      <div className="text-sm text-gray-500">
                        {event.subtitle}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="bg-blue-600 text-white px-3 py-1 rounded-lg inline-block text-sm font-semibold">
                        {event.date}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-gray-700 font-medium">
                        {event.details}
                      </div>
                      <div className="inline-block mt-1 bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                        {event.badge}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-3">Join Our Upcoming Events</h3>
          <p className="text-gray-600 mb-6">
            Stay updated with our latest conferences and be part of the global
            academic community.
          </p>
          <a
            href="/#schedule"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
          >
            <CalendarPlus className="w-5 h-5" />
            View Current Events
          </a>
        </div>
      </main>
    </div>
  );
};

export default PastConf;
