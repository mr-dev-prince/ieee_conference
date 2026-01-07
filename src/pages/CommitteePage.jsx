import React from "react";
import ss from "../assets/sunita_singh.jpg";
import gt from "../assets/gstomar.jpg";
import an from "../assets/Aravind_Narayanan.jpeg";
import aa from "../assets/ashutosh_agarwal.jpeg";
import svc from "../assets/Sai_Vamsi_Chennupati.jpeg";
import sy from "../assets/Sasikanth_Yangalasetty.jpeg";

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
          <div className="flex justify-center items-center bg-white shadow-2xl p-4 gap-8 rounded-2xl">
            <div className="p-8 bg-white rounded-xl shadow-md flex items-center gap-8 hover:shadow-2xl hover:-translate-y-1 duration-500 ">
              <div className="w-32 h-32 border-2 border-blue-500 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold overflow-hidden">
                <img src={ss} alt="avatar" />
              </div>
              <div>
                <div className="font-semibold">Dr. Sunita Singh</div>
                <div className="text-sm">Group Director</div>
                <div className="text-sm text-gray-600">ICOT, Bhopal</div>
              </div>
            </div>
            <div className="p-8 bg-white rounded-xl shadow-md flex items-center gap-8 hover:shadow-2xl hover:-translate-y-1 duration-500  ">
              <div className="w-32 h-32 border-2 border-blue-500 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold overflow-hidden">
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
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-indigo-700">
            Keynote Speakers
          </h3>
          <div className="flex flex-wrap justify-center items-center bg-white shadow-2xl p-4 gap-8 rounded-2xl">
            <div className="p-8 bg-white rounded-xl shadow-md flex items-center gap-8 hover:shadow-2xl hover:-translate-y-1 duration-500 ">
              <div className="w-32 h-32 border-2 border-blue-500 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold overflow-hidden">
                <img src={aa} alt="avatar" className="object-contain" />
              </div>
              <div>
                <div className="font-semibold">Ashutosh Agarwal</div>
                <div className="text-sm">Keynote Speaker</div>
                <p className="text-sm text-gray-600 max-w-64">
                  School of Business, Stevens Institute of Technology, Hoboken,
                  USA
                </p>
                <p className="text-sm">Email: ashutoshagarwal198@gmail.com</p>
              </div>
            </div>
            <div className="p-8 bg-white rounded-xl shadow-md flex items-center gap-8 hover:shadow-2xl hover:-translate-y-1 duration-500  ">
              <div className="w-32 h-32 border-2 border-blue-500 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold overflow-hidden">
                <img src={an} alt="avatar" />
              </div>
              <div>
                <div className="font-semibold">Aravind Narayanan</div>
                <div className="text-sm">Keynote Speaker</div>
                <p className="text-sm text-gray-600 max-w-64">
                  InsurTech Leader (Fitchburg State University, VM Inc.)
                </p>
                <p className="text-sm">Email: anarayanan.pmp@gmail.com</p>
              </div>
            </div>
            <div className="p-8 bg-white rounded-xl shadow-md flex items-center gap-8 hover:shadow-2xl hover:-translate-y-1 duration-500  ">
              <div className="w-32 h-32 border-2 border-blue-500 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold overflow-hidden">
                <img src={svc} alt="avatar" />
              </div>
              <div>
                <div className="font-semibold">Sai Vamsi Chennupati</div>
                <div className="text-sm">Keynote Speaker</div>
                <p className="text-sm text-gray-600 max-w-64">
                  Senior Software Engineer - Western Union (2023-Present)
                </p>
                <p className="text-sm">Email: vamsi.change20@gmail.com</p>
              </div>
            </div>
            <div className="p-8 bg-white rounded-xl shadow-md flex items-center gap-8 hover:shadow-2xl hover:-translate-y-1 duration-500  ">
              <div className="w-32 h-32 border-2 border-blue-500 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold overflow-hidden">
                <img src={sy} alt="avatar" />
              </div>
              <div>
                <div className="font-semibold">Sasikanth Yangalasetty</div>
                <div className="text-sm">Keynote Speaker</div>
                <p className="text-sm text-gray-600 max-w-64">
                  Product Manager – McKesson (Healthcare & Enterprise Software)
                </p>
                <p className="text-sm">Email: yskanth19@gmail.com</p>
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
            {
              name: "Prof. Dr. Nikhat Raza Khan",
              affiliation: "SMIEEE, Bhopal",
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
              name: "Prof Anubhav Sharma [ CSE ]",
              affiliation: "IES College of Technology, Bhopal",
            },
            {
              name: "Dr. Parmalik [ HOD - CSE ]",
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
              name: "Dr. Gurjeet Singh",
              affiliation: "IES College of Technology, Bhopal",
            },
          ]}
        />
        <CommitteeTable
          title="International Advisory Board"
          members={[
            {
              name: "Dr. Mudiyanselage Sandun Yasantha Konara",
              affiliation:
                "Department of Electrical & Information Engineering, Faculty of Engineering, University of Ruhuna, Hapugala, Galle, Sri Lanka",
            },
            {
              name: "Prof. Alfredo Vaccaro",
              affiliation:
                "Department of Engineering, University of Sannio, Benevento, Italy",
            },
            {
              name: "Dr. (Prof) M. L. Kolhe",
              affiliation: "University of Agder, Norway",
            },
            {
              name: "Dr. Nguyen Ha Huy Cuong",
              affiliation:
                "Deputy Director, Software Development Centre, The University of Danang",
            },
            {
              name: "Dr. Stefanie Mueller",
              affiliation: "Associate Professor, Computer Science and EE",
            },
            {
              name: "Dr. Andrea Goldsmith",
              affiliation:
                "Professor of Electrical and Computer Engineering, Princeton University",
            },
            {
              name: "Dr. Andreas Molisch",
              affiliation:
                "Professor, Department of Electrical and Computer Engineering System",
            },
            {
              name: "Prof. Milan Tuba",
              affiliation:
                "Vice Rector, Singidunum University, Belgrade, Serbia",
            },
            {
              name: "Dr. R.P.S. Chandrasena",
              affiliation:
                "Department of Electrical and Information Engineering, University of Ruhuna, Sri Lanka",
            },
            {
              name: "Dr. Pastor Arguelles",
              affiliation:
                "Dean, College of Computer Studies, Calabarzon, Philippines",
            },
            {
              name: "Dr. Muthmainnah",
              affiliation:
                "Assistant Professor, Universitas Al Asyariah Mandar, West Sulawesi, Indonesia",
            },
            {
              name: "Dr. Ahmed J. Obaid",
              affiliation:
                "Assistant Professor, Faculty of Computer Science and Mathematics, KUFA University",
            },
            {
              name: "Prof. Mike Hinchey",
              affiliation: "University of Limerick, Ireland & President, IFIP",
            },
            {
              name: "Prof. Vincenzo Piuri",
              affiliation: "University of Milan, Italy",
            },
            {
              name: "Mr. Aninda Bose",
              affiliation: "Senior Editor, Springer Nature, UK",
            },
            {
              name: "Prof. João Manuel R S Tavares",
              affiliation:
                "Faculdade de Engenharia da Universidade do Porto, Portugal",
            },
            {
              name: "Prof. Rosalina Babo",
              affiliation: "Polytechnic Institute of Porto, Portugal",
            },
            {
              name: "Prof. Zdzislaw Polkowski",
              affiliation: "Jan Wyzykowski University, Poland",
            },
            {
              name: "Hardik Patel",
              affiliation: "Independent Researcher, USA",
            },
            {
              name: "Riaz Ahmed Mohammed Sait",
              affiliation: "Oracle Corporation, USA",
            },
          ]}
        />
        <CommitteeTable
          title="Local Advisory Board"
          members={[
            {
              name: "Dr. Valentina E. Balas",
              affiliation:
                "Professor of Automation and Applied Informatics, Aurel Vlaicu University of Arad, Romania",
            },
            {
              name: "Dr. Pastor Arguelles",
              affiliation:
                "Dean, College of Computer Studies, Calabarzon, Philippines",
            },
            {
              name: "Dr. Muthmainnah",
              affiliation:
                "Assistant Professor, Universitas Al Asyariah Mandar, West Sulawesi, Indonesia",
            },
            {
              name: "Dr. Mayank Shrivastava",
              affiliation:
                "Associate Professor, Department of Electronic Systems Engineering, Indian Institute of Science, Bangalore",
            },
            {
              name: "Prof. Vivek Shrivastava",
              affiliation:
                "Professor & Dean, Srinagar, Distt-Pauri Garhwal, Uttarakhand",
            },
            {
              name: "Dr. N.K. Yadav",
              affiliation:
                "Research Scientist, Illinois Institute of Technology, Chicago",
            },
            {
              name: "Dr. Ahmed J. Obaid",
              affiliation:
                "Assistant Professor, Computer Science and Mathematics, KUFA University",
            },
            {
              name: "Prof. Arun Sharma",
              affiliation:
                "Professor, Department of Information Technology, Indira Gandhi Delhi Technical University, Delhi",
            },
            {
              name: "Dr. Anupam Sharma",
              affiliation: "Scientist 'H', DSP, DRDO Hyderabad",
            },
            {
              name: "Dr. Samyal Das Mandal",
              affiliation: "Assistant Professor, IIT Kharagpur",
            },
            {
              name: "Mr. Ashish Kumar Gupta",
              affiliation: "Scientist 'F', DRDL, DRDO Hyderabad",
            },
            {
              name: "Mrs. Suman Agrawal",
              affiliation: "Scientist 'F', DRDO Hyderabad",
            },
            {
              name: "Dr. Dilip Singh Sisodia",
              affiliation:
                "Professor & HoD, Department of Computer Science & Engineering, National Institute of Technology Raipur",
            },
            {
              name: "Dr. Abhishek Rawat",
              affiliation:
                "Assistant Professor, Electrical and Computer Science Engineering, IIIT RAM Ahmedabad",
            },
            {
              name: "Dr. Pramod Singhal",
              affiliation: "Chairman, IETE Chapter Bhopal",
            },
            {
              name: "Dr. Maya Ingle",
              affiliation: "Professor, DAVV Indore",
            },
            {
              name: "Dr. Jitendra Agarwal",
              affiliation: "Associate Professor, RGPV Bhopal",
            },
            {
              name: "Prof. Manish Dixit",
              affiliation: "Vice Chair, IEEE MP Section",
            },
            {
              name: "Dr. Amit Ojha",
              affiliation: "Secretary, IEEE MP Section",
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
