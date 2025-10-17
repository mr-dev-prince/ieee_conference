import ss from "../assets/sunita_singh.jpg";
import gt from "../assets/gstomar.jpg";

const committeeData = {
  patron: [
    {
      name: "Dr. Sunita Singh",
      title: "Group Director",
      affiliation: "ICOT, Bhopal",
      initials: "DS",
      image: ss,
    },
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
      title: "General Chair",
      affiliation: "Principal, IES College of Technology",
    },
  ],
  programChairs: [
    {
      name: "Prof. Manish Dixit",
      title: "Program Committee Chair",
      affiliation: "Vice Chair IEEE MP Section",
    },
    {
      name: "Dr. Rajesh Nema",
      title: "Program Committee Chair",
      affiliation: "Head, Dept. of ECE, IES College of Technology, Bhopal",
    },
  ],
};

const CommitteeSection = ({ title, members }) => (
  <div className="mb-10">
    <h3 className="text-3xl font-bold text-gray-800 mb-8 bg-gradient-to-r from-blue-500 to-transparent text-center rounded-l-full py-2">
      {title}
    </h3>
    <div className="flex flex-col gap-4">
      {members?.map((m, i) => (
        <div
          key={i}
          className="flex items-center gap-4 p-4 rounded-lg mb-3 shadow-sm h-[20vh] hover:scale-105 duration-200 hover:shadow-sm shadow-blue-600 "
        >
          <div className="w-18 h-18 md:w-24 md:h-24 rounded-full flex items-center justify-center overflow-hidden bg-blue-600 text-white">
            {m?.image ? (
              <img src={m?.image} alt="" />
            ) : (
              <p className="text-2xl font-bold">{m.name[0]}</p>
            )}
          </div>
          <div>
            <p className="text-orange-500 font-semibold">{m.title}</p>
            <p className="font-bold text-3xl">{m.name}</p>
            <p className="text-xl text-gray-500">{m.affiliation}</p>
          </div>
        </div>
      ))}
    </div>
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
      <CommitteeSection title="Patron" members={committeeData.patron} />
      <CommitteeSection
        title="General Chairs / Conference Chairs"
        members={committeeData.generalChairs}
      />
      <CommitteeSection
        title="Program Committee Chairs"
        members={committeeData.programChairs}
      />
    </div>
  );
}
