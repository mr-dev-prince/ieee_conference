import React from "react";

export default function RegistrationFee() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 bg-linear-90 from-blue-800 p-2 rounded-l-lg text-white">
        Registration Fee
      </h2>
      <table className="w-full border-collapse text-left">
        <thead>
          <tr>
            <th className="border p-3"></th>
            <th className="border p-3 text-center" colSpan={2}>
              Early Bird (1st Jan - 10th Jan 2026)
            </th>
            <th className="border p-3 text-center" colSpan={2}>
              Late Registration
            </th>
          </tr>
          <tr>
            <th className="border p-3">Participation Type</th>
            <th className="border p-3">
              Professionals (Faculty & Industry Persons)
            </th>
            <th className="border p-3">Students</th>
            <th className="border p-3">
              Professionals (Faculty & Industry Persons)
            </th>
            <th className="border p-3">Students</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-3 font-semibold">Non-IEEE Members</td>
            <td className="border p-3">Rs 7000</td>
            <td className="border p-3">Rs 5000</td>
            <td className="border p-3">Rs 8000</td>
            <td className="border p-3">Rs 5500</td>
          </tr>
          <tr>
            <td className="border p-3 font-semibold">IEEE Members</td>
            <td className="border p-3">Rs 6000</td>
            <td className="border p-3">Rs 4000</td>
            <td className="border p-3">Rs 7000</td>
            <td className="border p-3">Rs 5000</td>
          </tr>
          <tr>
            <td className="border p-3 font-semibold">
              Foreign Participants (Non-IEEE Members)
            </td>
            <td className="border p-3">USD 200</td>
            <td className="border p-3">USD 150</td>
            <td className="border p-3">USD 250</td>
            <td className="border p-3">USD 200</td>
          </tr>
          <tr>
            <td className="border p-3 font-semibold">
              Foreign Participants (IEEE Members)
            </td>
            <td className="border p-3">USD 150</td>
            <td className="border p-3">USD 100</td>
            <td className="border p-3">USD 200</td>
            <td className="border p-3">USD 150</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
