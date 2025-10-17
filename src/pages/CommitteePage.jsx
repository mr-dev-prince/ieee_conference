import React from "react";
import ss from "../assets/sunita_singh.jpg";
import gt from "../assets/gstomar.jpg";

export default function CommitteePage() {
  return (
    <div>
      <section className="relative h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 text-white px-6">
        <div className="absolute inset-0">
          <img
            src="https://iesbpl.ac.in/uploads/slider/icot.jpg"
            alt="conference background"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 }`}
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Conference Committee
          </h1>
          <p className="text-lg leading-relaxed">
            Meet the distinguished team of experts leading ICBDML 2026 - 2nd
            International Conference on Big Data & Machine Learning.
            <br />
            <br />
            Our conference is guided by a prestigious committee of international
            experts, academics, and industry leaders who ensure the highest
            standards of quality and innovation.
          </p>
        </div>
      </section>
      <section className="py-16 px-6 md:px-12 bg-gray-50 text-gray-800">
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-indigo-700">
            Patron
          </h3>
          <div className="space-y-2">
            <div className="p-4 bg-white rounded-xl shadow-md flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold overflow-hidden">
                <img src={ss} alt="avatar" />
              </div>
              <div>
                <div className="font-semibold">Dr. Sunita Singh</div>
                <div className="text-sm">Group Director</div>
                <div className="text-sm text-gray-600">ICOT, Bhopal</div>
              </div>
            </div>
            <div className="p-4 bg-white rounded-xl shadow-md flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-indigo-600 text-white flex items-center justify-center overflow-hidden font-bold">
                <img src={gt} alt="avatar" />
              </div>
              <div>
                <div className="font-semibold">Dr. G.S. Tomar</div>
                <div className="text-sm">Chairperson</div>
                <div className="text-sm text-gray-600">IEEE, M.P. Section</div>
              </div>
            </div>
          </div>
        </div>
        <CommitteeTable
          title="General Chairs/Conference Chairs"
          members={[
            {
              name: "Dr. Anuprita Mishra",
              affiliation: "Principal, IES College of Technology",
            },
          ]}
        />
        <CommitteeTable
          title="Program Committee Chairs"
          members={[
            {
              name: "Prof. Manish Dixit",
              affiliation: "Vice Chair IEEE MP Section",
            },
            {
              name: "Dr. Rajesh Nema",
              affiliation:
                "Head, Dept. of ECE, IES College of Technology, Bhopal",
            },
          ]}
        />
        <CommitteeTable
          title="TPC/Track Chairs"
          members={[
            { name: "Prof. Dr. Ram Bilas Pachori", affiliation: "IIT Indore" },
            {
              name: "Dr. Jitendra Agarwal",
              affiliation: "Director, SOIT, RGPV, Bhopal",
            },
            {
              name: "Dr. Deepak Singh Tomar",
              affiliation: "Professor, MANIT, Bhopal",
            },
            {
              name: "Dr. Vijay Singh Rathore",
              affiliation: "IES College of Technology, Bhopal",
            },
            {
              name: "Mrs. Suman Agrawal",
              affiliation: "Scientist –‘F’ DRDO Hyderabad",
            },
            {
              name: "Dr. Sonali Paunikar",
              affiliation: "EXE Dept., IES College of Technology, Bhopal",
            },
            {
              name: "Prof. Dr. D.K. Yadav",
              affiliation: "Professor, MNIT Allahabad",
            },
            {
              name: "Dr. Nilanjan Dey",
              affiliation: "CSE, Techno International New Town, Kolkata",
            },
          ]}
        />
        <CommitteeTable
          title="Publicity Committee Chairs"
          members={[
            {
              name: "Dr. Jitendra Agarwal",
              affiliation: "Director, SOIT, RGPV, Bhopal",
            },
            {
              name: "Dr. Anubhav Sharma",
              affiliation: "IES College of Technology, Bhopal",
            },
          ]}
        />
        <CommitteeTable
          title="Finance Chairs"
          members={[
            {
              name: "Prof. M P S Chawla",
              affiliation: "Treasurer, IEEE MP Subsection",
            },
            {
              name: "Dr. Shweta Singh",
              affiliation: "IES College of Technology, Bhopal",
            },
          ]}
        />
      </section>
    </div>
  );
}

function CommitteeTable({ title, members }) {
  return (
    <div className="mb-12">
      <h3 className="text-2xl font-semibold mb-4 text-indigo-700">{title}</h3>
      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-xl shadow-md overflow-hidden">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="px-4 py-2">S.No.</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Affiliation</th>
            </tr>
          </thead>
          <tbody>
            {members.map((m, i) => (
              <tr key={i} className="border-t">
                <td className="px-4 py-2 text-center">{i + 1}</td>
                <td className="px-4 py-2">{m.name}</td>
                <td className="px-4 py-2 text-gray-600">{m.affiliation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
