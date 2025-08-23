export default function Submission() {
  return (
    <div>
      <header
        className="relative h-screen flex flex-col justify-center items-center text-center text-white"
        style={{
          backgroundImage:
            "url('https://iesbpl.ac.in/uploads/slider/icot.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Paper Submission
          </h1>
          <p className="text-lg md:text-xl leading-relaxed mb-6">
            Submit your research papers for{" "}
            <span className="font-semibold">
              ICBDML-2026 - International Conference on Optimization Techniques
            </span>
          </p>
          <div className="inline-flex items-center animate-pulse gap-2 bg-red-600 px-6 py-3 rounded-xl shadow-lg font-semibold">
            <i className="fas fa-exclamation-circle"></i>
            Paper Submission: Currently Closed
          </div>
        </div>
      </header>
      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-indigo-700">
            Submission Process
          </h2>
          <p className="text-gray-600 mt-2">
            Follow these simple steps to submit your research paper for
            ICBDML-2026
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            {
              step: "1",
              title: "Prepare Your Paper",
              desc: "Format your paper according to IEEE 2-column standard template. Download the template and ensure your paper meets all formatting requirements.",
            },
            {
              step: "2",
              title: "Online Submission",
              desc: "Submit your paper through the EDAS online submission system. Create an account and follow the submission guidelines carefully.",
            },
            {
              step: "3",
              title: "Peer Review",
              desc: "Your paper will be reviewed by at least three independent reviewers and undergo plagiarism check as per IEEE standards.",
            },
            {
              step: "4",
              title: "Publication",
              desc: "Accepted papers will be published in conference proceedings and linked on IEEE Xplore after presentation at the conference.",
            },
          ].map((s, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-lg transition"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-lg">
                {s.step}
              </div>
              <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-gray-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-indigo-700">
            Submission Guidelines
          </h2>
          <p className="text-gray-600 mt-2">
            Important guidelines and requirements for paper submission
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-lg shadow-orange-600 transition ">
            <div className="flex items-center gap-3 mb-4 text-indigo-600 text-xl">
              <i className="fas fa-file-alt"></i>
              <h3 className="font-semibold text-lg">Paper Format</h3>
            </div>
            <p className="text-gray-600 mb-3">
              Papers must be submitted in IEEE 2-column standard format:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 text-sm">
              <li>Word (.doc) or PDF (.pdf) format only</li>
              <li>Maximum 6 pages including references</li>
              <li>Use provided IEEE template</li>
              <li>Font: Times New Roman, 10pt</li>
              <li>Double-column format with 0.25" column spacing</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
