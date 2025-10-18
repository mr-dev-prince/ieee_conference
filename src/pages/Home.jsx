import {
  FaBrain,
  FaMapMarkerAlt,
  FaHandshake,
  FaBullseye,
  FaCodeBranch,
  FaFileAlt,
  FaGlobe,
} from "react-icons/fa";
import Committee from "../components/Committee";
import ImpDates from "../components/ImpDates";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="font-sans text-gray-800">
      <Hero />
      <section id="about" className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Conference Overview
        </h2>
        <p className="text-lg leading-7 mb-12 text-justify shadow-sm shadow-black/50 p-3 rounded-xl">
          ICBDML-2026 aims to provide an opportunistic forum and vibrant
          platform for researchers and industry practitioners to build business
          or research relationships, find global partners for future
          collaboration on emerging issues, and share state-of-the-art knowledge
          gained from their original research work and practical developments on
          specific new challenges, applications, and experiences. <br />
          <br />
          The conference's "Expert Application" theme will focus on the most
          recent advancements in research and the application of expert systems,
          with a particular focus on the part that these advancements play in
          upholding academic standards while disseminating cutting-edge
          discoveries in the fields of computer system security using
          cryptographic algorithms and other security schemes for system as well
          as for cloud. <br />
          <br />
          We are seeking for unique entries that have never been published and
          aren't currently being considered by any other journals or
          conferences.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <InfoCard
            icon={<FaBrain />}
            title="Topic Focus"
            content="Big Data & Machine Learning, AI, Deep Learning models..."
          />
          <InfoCard
            icon={<FaMapMarkerAlt />}
            title="Venue"
            content="IES College of Technology, Bhopal, MP India"
          />
          <InfoCard
            icon={<FaHandshake />}
            title="Sponsors"
            content="IEEE M.P. Section, ACM M.P. Section..."
          />
          <InfoCard
            icon={<FaBullseye />}
            title="Objective"
            content="To provide a vibrant platform for researchers..."
          />
          <InfoCard
            icon={<FaCodeBranch />}
            title="Research Tracks"
            content="AI, ML, Cryptographic Security Systems..."
          />
          <InfoCard
            icon={<FaFileAlt />}
            title="Publication"
            content="Accepted papers will be submitted to IEEE Xplore..."
          />
          <InfoCard
            icon={<FaGlobe />}
            title="Global Platform"
            content="Opportunistic forum for industry practitioners..."
          />
        </div>
      </section>
      <Committee />
      <ImpDates />
      <CMTAck />
    </div>
  );
}

function InfoCard({ icon, title, content }) {
  return (
    <div className="bg-white shadow rounded-xl p-6 text-center hover:shadow-lg transition">
      <div className="text-3xl text-blue-600 mb-4 flex justify-center">
        {icon}
      </div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{content}</p>
    </div>
  );
}

function TimelineItem({ icon, title, date, status }) {
  return (
    <div className="flex items-start gap-4">
      <div className="text-blue-600 text-2xl">{icon}</div>
      <div>
        <div className="flex items-center gap-2">
          <h3 className="font-semibold">{title}</h3>
          <span className="px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded">
            {status}
          </span>
        </div>
        <p className="text-sm text-gray-500">{date}</p>
      </div>
    </div>
  );
}

function CMTAck() {
  return (
    <div className="mt-4 mx-10 px-10 py-2 space-y-2 rounded-xl bg-gray-400/50">
      <h1 className="text-xl font-semibold text-blue-900">CMT ACKNOWLEDGEMENT</h1>
      <p>
        The Microsoft CMT service was used for managing the peer-reviewing
        process for this conference. This service was provided for free by
        Microsoft and they bore all expenses, including costs for Azure cloud
        services as well as for software development and support.
      </p>
    </div>
  );
}
