import ss from "../assets/sunita_singh.jpg";
import gt from "../assets/gstomar.jpg";
const committeeData = {
  chiefPatron: [
    {
      name: "Dr. Sunita Singh",
      title: "Group Director",
      affiliation: "ICOT, Bhopal",
      initials: "DS",
      image: ss,
    },
  ],
  patron: [
    {
      name: "Dr. G.S. Tomar",
      title: "Chairperson",
      affiliation: "IEEE, M.P. Section",
      initials: "SG",
      image: gt,
    },
  ],
  generalChairs: [
    {
      name: "Dr. Anuprita Mishra",
      affiliation: "Principal, IES College of Technology",
    },
    {
      name: "Dr. Nikhat Raza Khan",
      affiliation: "HoD, CSE, IES College of Technology",
    },
  ],
  programChairs: [
    {
      name: "Prof. Manish Dixit",
      affiliation: "Vice Chair IEEE MP Section",
    },
    {
      name: "Dr. Rajesh Nema",
      affiliation: "Head, Dept. of ECE, IES College of Technology, Bhopal",
    },
  ],
  trackChairs: [
    { name: "Prof. Dr. Ram Bilas Pachori", affiliation: "IIT Indore" },
    {
      name: "Dr. Jitendra Agarwal",
      affiliation: "Director, SOIT, RGPV, Bhopal",
    },
    { name: "Dr. Deepak Singh Tomar", affiliation: "Professor, MANIT, Bhopal" },
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
    { name: "Prof. Dr. D.K. Yadav", affiliation: "Professor, MNIT, Allahabad" },
    {
      name: "Dr. Nilanjan Dey",
      affiliation: "CSE, Techno International New Town, Kolkata",
    },
  ],
  publicityChairs: [
    {
      name: "Dr. Jitendra Agarwal",
      affiliation: "Director, SOIT, RGPV, Bhopal",
    },
    {
      name: "Dr. Anubhav Sharma",
      affiliation: "IES College of Technology, Bhopal",
    },
  ],
  financeChairs: [
    {
      name: "Prof. M P S Chawla",
      affiliation: "Treasurer, IEEE MP Subsection",
    },
    {
      name: "Dr. Shweta Singh",
      affiliation: "IES College of Technology, Bhopal",
    },
  ],
};

const CommitteeSection = ({ title, members, showSerial }) => (
  <div className="mb-10">
    <h3 className="text-3xl font-bold text-gray-800 mb-3">{title}</h3>
    {showSerial ? (
      <table className="w-full border border-gray-300 rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">S.No.</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Affiliation</th>
          </tr>
        </thead>
        <tbody>
          {members.map((m, i) => (
            <tr key={i} className="hover:bg-gray-50">
              <td className="p-2 border text-center">{i + 1}</td>
              <td className="p-2 border">{m.name}</td>
              <td className="p-2 border">{m.affiliation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : (
      members.map((m, i) => (
        <div
          key={i}
          className="flex items-center gap-4 p-4 rounded-lg mb-3 shadow-sm h-[25vh] hover:scale-105 duration-200 hover:shadow-sm shadow-blue-600"
        >
          <div className="w-24 h-24 rounded-full flex items-center justify-center overflow-hidden bg-blue-600 text-white">
            <img src={m?.image} alt="" />
          </div>
          <div>
            <p className="font-bold text-3xl">{m.name}</p>
            <p className="text-2xl text-gray-600">{m.title}</p>
            <p className="text-xl text-gray-500">{m.affiliation}</p>
          </div>
        </div>
      ))
    )}
  </div>
);

export default function Committee() {
  return (
    <div className="px-6 py-12 max-w-5xl mx-auto">
      <section className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Conference Committee</h1>
        <p className="text-gray-700">
          Meet the distinguished team of experts leading ICBDML 2026. Our
          conference is guided by international experts, academics, and industry
          leaders ensuring the highest standards of quality and innovation.
        </p>
      </section>

      <CommitteeSection
        title="Chief Patron"
        members={committeeData.chiefPatron}
      />
      <CommitteeSection title="Patron" members={committeeData.patron} />
      <CommitteeSection
        title="General Chairs / Conference Chairs"
        members={committeeData.generalChairs}
        showSerial
      />
      <CommitteeSection
        title="Program Committee Chairs"
        members={committeeData.programChairs}
        showSerial
      />
      <CommitteeSection
        title="TPC / Track Chairs"
        members={committeeData.trackChairs}
        showSerial
      />
      <CommitteeSection
        title="Publicity Committee Chairs"
        members={committeeData.publicityChairs}
        showSerial
      />
      <CommitteeSection
        title="Finance Chairs"
        members={committeeData.financeChairs}
        showSerial
      />
    </div>
  );
}
