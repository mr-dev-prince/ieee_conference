import aa from "../assets/ashutosh_agarwal.jpeg";
import akp from "../assets/akshar-patel.jpeg";
import an from "../assets/Aravind_Narayanan.jpeg";
import dsj from "../assets/divyaraj-singh-jatav.jpeg";
import gt from "../assets/gstomar.jpg";
import rg from "../assets/Raghu-Gollapudi.jpg";
import spp from "../assets/Sree-Pranathi-Pallela.jpg";
import ssr from "../assets/Sridhar-Sriharsha-Rachakonda.jpeg";
import tv from "../assets/Tharakesavulu-Vangalapat.jpeg";
import sd from "../assets/sudhakar-tiwari.jpeg";
import sfr from "../assets/saifur-rahman.jpeg";
import spk from "../assets/saiprakash-kodela.jpeg";
import srg from "../assets/Sasidhar-Reddy-Gaddam.jpeg";
import ss from "../assets/sunita_singh.jpg";
import st from "../assets/sandeep-dommari.jpeg";
import svc from "../assets/Sai_Vamsi_Chennupati.jpeg";
import sy from "../assets/Sasikanth_Yangalasetty.jpeg";
import sm from "../assets/sm.jpeg";
import svr from "../assets/Saravanan-Raj.jpeg";
import rsg from "../assets/Ranjith-Singhu-Ganapathy.jpeg";
import ts from "../assets/Thilakavathi-Sankaran.jpeg";

const patrons = [
  {
    name: "Dr. Sunita Singh",
    role: "Group Director",
    org: "ICOT, Bhopal",
    img: ss,
  },
  {
    name: "Dr. G.S. Tomar",
    role: "Chairperson",
    org: "IEEE, M.P. Section",
    img: gt,
  },
];

const keynoteSpeakers = [
  {
    name: "Ashutosh Agarwal",
    role: "Keynote Speaker",
    desc: "Senior Business Analyst - CBRE | Turner and Townsend (USA)",
    email: "ashutoshagarwal198@gmail.com",
    img: aa,
  },
  {
    name: "Aravind Narayanan",
    role: "Keynote Speaker",
    desc: "InsurTech Leader (Fitchburg State University, VM Inc.)",
    email: "anarayanan.pmp@gmail.com",
    img: an,
  },
  {
    name: "Raghu Gollapudi",
    role: "Keynote Speaker",
    desc: "Company - Fiserv",
    email: "Reacheaghu251@gmail.com",
    img: rg,
  },
  {
    name: "Sasidhar Reddy Gaddam",
    role: "Keynote Speaker",
    desc: "Staff Software Engineer, AI & Cybersecurity Specialist, IEEE Senior Member",
    email: "zeesasidhar@gmail.com",
    img: srg,
  },
  {
    name: "Sai Vamsi Chennupati",
    role: "Keynote Speaker",
    desc: "Senior Software Engineer - Western Union",
    email: "vamsi.change20@gmail.com",
    img: svc,
  },
  {
    name: "Sasikanth Yangalasetty",
    role: "Keynote Speaker",
    desc: "Product Manager – McKesson",
    email: "yskanth19@gmail.com",
    img: sy,
  },
  {
    name: "Sandeep Dommari",
    role: "Keynote Speaker",
    desc: "Prinicipal Cybersecurity Architect",
    email: "sandeep.dommari@ieee.org",
    img: sd,
  },
  {
    name: "Sudhakar Tiwari",
    role: "Keynote Speaker",
    desc: "Principal Cybersecurity Architect ",
    email: "sudhakar.tiwari@ieee.org",
    img: st,
  },
  {
    name: "Divyaraj Singh Jatav",
    role: "Keynote Speaker",
    desc: "Independent Researcher - Westcliff University",
    email: "divyaraj.singh.dj@gmail.com",
    img: dsj,
  },
  {
    name: "Akshar Patel",
    role: "Keynote Speaker",
    desc: " Department Of Computer Science, City College Of New York, NY, USA",
    email: "patel.akshar111@gmail.com",
    img: akp,
  },
  {
    name: "Saiprakash Kodela",
    role: "Keynote Speaker",
    desc: "Software Engineer, USA",
    email: "kodela.saiprakash29@gmail.com",
    img: spk,
  },
  {
    name: "Md. Saifur Rahman",
    role: "Keynote Speaker",
    desc: "Central Washington University | Erecyclee.org (own org)",
    email: "Safiadmission@gmail.com",
    img: sfr,
  },
];

const invitedSpeaker = [
  {
    name: "Somnath Banerjee",
    role: "Invited Speaker",
    desc: "Senior Data Engineer | American Family Insurance | Madison, Wisconsin, USA.",
    email: "somnathbanerjeedwbi@gmail.com",
    img: sm,
  },
  {
    name: "Sree Pranathi Pallela",
    role: "Invited Speaker",
    desc: "Senior Cybersecurity Engineer at Elanco, IEEE Senior Member",
    email: "sreepranu29@gmail.com",
    img: spp,
  },
  {
    name: "Tharakesavulu Vangalapat",
    role: "Invited Speaker",
    desc: "Senior Principal Data Scientist and AI Leader",
    email: "vtharak@gmail.com",
    img: tv,
  },
  {
    name: "Sridhar Sriharsha Rachakonda",
    role: "Invited Speaker",
    desc: "Senior Staff Engineer, Austin, Texas",
    email: "rssharsha4@gmail.com",
    img: ssr,
  },
  {
    name: "Saravanan Raj",
    role: "Invited Speaker",
    desc: "Senior Product Manager, Microsoft, Seattle, USA",
    email: "reach.saravanan.raj@gmail.com",
    img: svr,
  },
  {
    name: "Ranjith Singhu Ganapathy",
    role: "Invited Speaker",
    desc: "Senior Software Developer, Arch Insurance. Toronto,Canada",
    email: "ranjithsinghu@gmail.com",
    img: rsg,
  },
  {
    name: "Thilakavathi Sankaran",
    role: "Invited Speaker",
    desc: "Data Analytics Professional, Independent Researcher,California, USA",
    email: "Thila.sankaran@gmail.com",
    img: ts,
  },
];

const tpc = [
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
    name: "Shailesh Sayarmal Chaudhary",
    affiliation: "Independent Researcher, USA",
  },
  {
    name: "Faiz Mohiuddin Mulla",
    affiliation: "Independent Researcher, USA",
  },
  {
    name: "Anokh Kishore",
    affiliation: "Independent Researcher, USA",
  },
  {
    name: "Shekar Vollem",
    affiliation: "Independent Researcher, Dallas, Texas, USA",
  },
  {
    name: "Virendra Singh Chawra",
    affiliation: "Senior Specialist, Deloitte Consulting LLP, Raleigh, NC, USA",
  },
  {
    name: "Vivek Nayan",
    affiliation: "Independent Researcher, USA",
  },
  {
    name: "Vishal Nayan",
    affiliation: "Independent Researcher, USA",
  },
  {
    name: "Saiprakash Kodela",
    affiliation: "Software Engineer, USA",
  },
  {
    name: "Bhasker Reddy Ande",
    affiliation: "Manager Solutions Architect, Ashburn, Virginia, USA",
  },
  {
    name: "Himani Fnu",
    affiliation: "Project Manager, Independent Researcher, Chicago IL",
  },
  {
    name: "Maniruzzaman Bhuiyan",
    affiliation: "M.S in Business Analytics | The University of Dallas.",
  },
  {
    name: "Tarun Vallabhaneni",
    affiliation: "Independent Researcher",
  },
  {
    name: "Nandakishore leburu",
    affiliation: "Independent Researcher",
  },
];

const SectionTitle = ({ title }) => (
  <h3 className="text-2xl font-semibold mb-6 text-indigo-700">{title}</h3>
);

const PersonCard = ({ person }) => (
  <div className="p-8 bg-white rounded-xl shadow-md flex flex-col lg:flex-row items-center gap-8 hover:shadow-2xl hover:-translate-y-1 transition">
    <div className="w-32 h-32 border-2 border-blue-500 rounded-full overflow-hidden">
      <img
        src={person.img}
        alt={person.name}
        className="object-cover w-full h-full"
      />
    </div>
    <div>
      <div className="font-semibold">{person.name}</div>
      <div className="text-sm">{person.role}</div>
      {person.org && <div className="text-sm text-gray-600">{person.org}</div>}
      {person.desc && (
        <p className="text-sm text-gray-600 max-w-64">{person.desc}</p>
      )}
      {person.email && <p className="text-sm">Email: {person.email}</p>}
    </div>
  </div>
);

const CommitteeTable = ({ title, members }) => (
  <div className="mb-12">
    <SectionTitle title={title} />
    <div className="overflow-x-auto">
      <table className="w-full bg-white rounded-xl shadow-md">
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

export default function CommitteePage() {
  return (
    <div>
      <section className="relative h-screen flex items-center justify-center text-center text-white px-6">
        <img
          src="https://iesbpl.ac.in/uploads/slider/icot.jpg"
          alt="conference"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Conference Committee
          </h1>
          <p className="text-lg">
            Meet the distinguished team leading ICBDML 2026.
          </p>
        </div>
      </section>
      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <SectionTitle title="Patron" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {patrons.map((p) => (
            <PersonCard key={p.name} person={p} />
          ))}
        </div>
        <SectionTitle title="Keynote Speakers" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {keynoteSpeakers.map((k) => (
            <PersonCard key={k.name} person={k} />
          ))}
        </div>
        <SectionTitle title="Invited Speakers" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {invitedSpeaker.map((k) => (
            <PersonCard key={k.name} person={k} />
          ))}
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
        <CommitteeTable title="TPC/Track Chairs" members={tpc} />
        <CommitteeTable
          title="Publicity Committee Chairs"
          members={[
            {
              name: "Dr. Parmalik [ HOD - CSE ]",
              affiliation: "IES College of Technology, Bhopal",
            },
            {
              name: "Prof Anubhav Sharma [ CSE ]",
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
            {
              name: "Manoj Parasa",
              affiliation:
                "Senior SAP Successfactors Consultant, Ernst & Young City, Dallas, USA",
            },
            {
              name: "Saravanan Raj",
              affiliation: "Senior Product Manager, Microsoft, Seattle, USA",
            },
            {
              name: "Dedeepya Sai Gondi",
              affiliation: "Lead Engineer at Ascendion",
            },
            {
              name: "Prabal Pathak",
              affiliation: "Principal PM Architect, Microsoft",
            },
            {
              name: "Sourabh Subhash Rajput",
              affiliation: "Sr Software Engineer, Independent Researcher, USA",
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
