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
          <div className="inline-flex items-center animate-pulse gap-2 bg-green-700 px-6 py-3 rounded-xl shadow-lg font-semibold">
            <i className="fas fa-exclamation-circle"></i>
            Paper Submission: Ongoing
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
              desc: "Submit your paper electronically through the Microsoft CMT portal. Create an account and follow the author submission guidelines carefully.",
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
      <section id="guidelines" className="pt-16 px-6 md:px-12 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-indigo-700">
            Author Submission Guidelines
          </h2>
          <p className="text-gray-600 mt-2">
            Important author guidelines for paper submission.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-lg shadow-orange-600 transition ">
            <p className="text-gray-600 mb-3">
              Authors should submit their papers online. We use Microsoft CMT
              system for submission of papers and review process. Unregistered
              authors should first create an account on Microsoft CMT to log on.
              To avoid last minutes network problems, authors are strongly
              encouraged to create their Microsoft CMT submission system user
              accounts (if you do not already have one) and register their
              submission well in advance of the deadline. <br /> <br />{" "}
              <strong>
                All submissions are to be done electronically through CMT link.
              </strong>
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 px-6 md:px-12 w-[100%] bg-white flex justify-center items-start">
        <div className="w-[45%]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-indigo-700">Paper Format</h2>
          </div>
          <div className="flex justify-center items-center">
            <div className="p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-lg shadow-orange-600 transition ">
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
        </div>
        <div className="w-[45%]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-indigo-700">How To ?</h2>
          </div>
          <div className="flex justify-center items-center">
            <div className="p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-lg shadow-orange-600 transition ">
              <p className="text-gray-600 mb-3">
                You will need to have a CMT account before you try to submit
                your paper.
              </p>
              <div>
                <div className="flex gap-2">
                  <p>Link to create the account:</p>
                  <a
                    target="_blank"
                    className="text-blue-600 underline"
                    href="https://cmt3.research.microsoft.com/docs/help/general/account-creation.html"
                  >
                    Create CMT Account
                  </a>
                </div>
                <div className="flex gap-2">
                  <p>How to submit a paper :</p>
                  <a
                    target="_blank"
                    className="text-blue-600 underline"
                    href="https://cmt3.research.microsoft.com/docs/help/author/author-submission-form.html"
                  >
                    CMT Paper Submission Guide
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
