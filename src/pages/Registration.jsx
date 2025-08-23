import { Calendar, CreditCard, FileText, Info } from "lucide-react";

export default function Registration() {
  return (
    <main className="bg-gray-50 text-gray-800">
      <section className="relative bg-gradient-to-r h-screen text-white flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://iesbpl.ac.in/uploads/slider/icot.jpg"
            alt="conference background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Conference Registration
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Join us for <span className="font-semibold">ICBDML-2026</span> and
            be part of cutting-edge research in optimization techniques.
            Register now to secure your spot!
          </p>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-center mb-8">
          Registration Process
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: "1",
              title: "Choose Your Category",
              desc: "Select your participation type from the fee structure below based on your IEEE membership status and location.",
            },
            {
              step: "2",
              title: "Make Payment",
              desc: "Transfer the registration fee to our bank account using the provided bank details.",
            },
            {
              step: "3",
              title: "Complete Registration",
              desc: "Fill out the registration form with your payment details to complete the process.",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="bg-white p-6 shadow rounded-xl text-center border-t-4 border-blue-600"
            >
              <div className="text-3xl font-bold text-blue-700 mb-3">
                {item.step}
              </div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-6 mb-12">
        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">
            ⏰ Early Bird Registration Deadline
          </h3>
          <p>
            Register before <strong>10th January 2026</strong> to avail special
            early bird pricing!
          </p>
        </div>
      </div>
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-center mb-8">
          Registration Fees
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-sm text-center bg-white shadow rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th rowSpan={2} className="px-6 py-3 border">
                  Participation Type
                </th>
                <th colSpan={2} className="px-6 py-3 border">
                  Early Bird (Till 30th Jan 2024)
                </th>
                <th colSpan={2} className="px-6 py-3 border">
                  Late Registration
                </th>
              </tr>
              <tr>
                <th className="px-6 py-3 border">Professionals</th>
                <th className="px-6 py-3 border">Students</th>
                <th className="px-6 py-3 border">Professionals</th>
                <th className="px-6 py-3 border">Students</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-6 py-3 font-semibold">
                  Non-IEEE Members
                </td>
                <td className="border px-6 py-3">₹ 5,000</td>
                <td className="border px-6 py-3">₹ 3,000</td>
                <td className="border px-6 py-3">₹ 6,000</td>
                <td className="border px-6 py-3">₹ 3,500</td>
              </tr>
              <tr>
                <td className="border px-6 py-3 font-semibold">IEEE Members</td>
                <td className="border px-6 py-3">₹ 4,000</td>
                <td className="border px-6 py-3">₹ 2,000</td>
                <td className="border px-6 py-3">₹ 5,000</td>
                <td className="border px-6 py-3">₹ 3,000</td>
              </tr>
              <tr>
                <td className="border px-6 py-3 font-semibold">
                  Foreign (Non-IEEE)
                </td>
                <td className="border px-6 py-3">USD 200</td>
                <td className="border px-6 py-3">USD 150</td>
                <td className="border px-6 py-3">USD 250</td>
                <td className="border px-6 py-3">USD 200</td>
              </tr>
              <tr>
                <td className="border px-6 py-3 font-semibold">
                  Foreign (IEEE Members)
                </td>
                <td className="border px-6 py-3">USD 150</td>
                <td className="border px-6 py-3">USD 100</td>
                <td className="border px-6 py-3">USD 200</td>
                <td className="border px-6 py-3">USD 150</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6">Payment Details</h2>
        <div className="bg-white shadow rounded-lg p-6 space-y-3">
          <p>
            <strong>Account Holder:</strong> IES COLLEGE OF TECHNOLOGY
          </p>
          <p>
            <strong>Bank Name:</strong> INDIAN BANK
          </p>
          <p>
            <strong>City:</strong> BHOPAL ARERA COLONY
          </p>
          <p>
            <strong>IFSC Code:</strong> IDIB000B796
          </p>
          <p>
            <strong>Branch:</strong> E-2/60, NEAR 7 BUS STOP, ARERA COLONY,
            BHOPAL
          </p>
          <p>
            <strong>Account Number:</strong> 20027236539
          </p>
        </div>
      </section>
      <section className="text-center py-12">
        <h3 className="text-xl font-semibold mb-4">
          ✅ Complete Your Registration
        </h3>
        <p className="mb-6">
          After making the payment, please fill out the registration form to
          complete your process.
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSftlYlOvgqXcoXgmqHR1CrwK-OuivmAySDh3YvBnOjBtlLsTg/closedform"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
        >
          📝 Fill Registration Form
        </a>
      </section>
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6">Important Information</h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>
            <strong>Review Process:</strong> All submitted papers reviewed by at
            least three reviewers.
          </li>
          <li>
            <strong>Publication:</strong> Accepted papers will be submitted to
            IEEE Xplore (subject to IEEE checks).
          </li>
          <li>
            <strong>Committee Approval:</strong> Fee structure approved by IES
            College & committees.
          </li>
          <li>
            <strong>Registration Includes:</strong> Access to sessions,
            proceedings, welcome reception, lunch, certificate, and networking
            events.
          </li>
        </ul>
      </section>
    </main>
  );
}
