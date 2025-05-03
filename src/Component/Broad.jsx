// import React from 'react'

// function Broad() {
//   return (
//     <div className="bg-[#0D1117] text-white px-4 py-8 md:px-8">
//       <main className="max-w-screen-md mx-auto">
//         {/* Header Section */}
//         <div className="flex items-center gap-2 mb-4">
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//           </svg>
//           <span className="text-purple-500 font-medium">BROAD ACCESS</span>
//         </div>

//         {/* Title */}
//         <h1 className="text-2xl md:text-4xl font-bold mb-10 md:mb-14 leading-tight">
//           Easily manage your Gas Fees and Token Purchases
//         </h1>

//         {/* Features Section */}
//         <div className="space-y-8">
//           {/* Feature 1 */}
//           <div className="flex flex-col md:flex-row items-start gap-4">
//             <div className="p-3 rounded-lg bg-purple-500/10">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
//               </svg>
//             </div>
//             <div>
//               <h2 className="text-lg md:text-xl font-semibold mb-2">Easy Token Purchases</h2>
//               <p className="text-gray-400">Navigate the complexities of gas fees with our optimized solutions, ensuring smooth and cost-effective transactions.</p>
//             </div>
//           </div>

//           {/* Feature 2 */}
//           <div className="flex flex-col md:flex-row items-start gap-4">
//             <div className="p-3 rounded-lg bg-purple-500/10">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
//               </svg>
//             </div>
//             <div>
//               <h2 className="text-lg md:text-xl font-semibold mb-2">Support for Multiple Networks</h2>
//               <p className="text-gray-400">Access and manage transactions across various blockchain networks from a single platform.</p>
//             </div>
//           </div>
//         </div>

//         {/* Call to Action */}
//         <div className="mt-12 text-center">
//           <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 mx-auto">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//             </svg>
//             GET STARTED
//           </button>
//         </div>

//         {/* Bottom Section */}
//         <div className="mt-16 text-center">
//           <h2 className="text-2xl md:text-3xl font-bold mb-2">Ready to Revolutionize Your</h2>
//           <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
//             Crypto Gas Fee Management?
//           </div>
//           <p className="text-gray-400 mt-4">Join thousands of users who are already enjoying seamless gas fee transactions.</p>
//           <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium mt-8">
//             Sign Up Now
//           </button>
//         </div>
//       </main>
//     </div>
//   )
// }

// export default Broad

import React from "react";

function Broad() {
  return (
    <div
      style={{ backgroundColor: "var(--color-bg)" }}
      className="text-white px-4 py-8 md:px-8"
    >
      <main className="max-w-screen-md mx-auto">
        {/* Header Section */}
        <div className="flex items-center gap-2 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ color: "var(--color-secondary)" }}
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
          <span
            style={{ color: "var(--color-secondary)" }}
            className="font-medium"
          >
            BROAD ACCESS
          </span>
        </div>

        {/* Title */}
        <h1
          style={{ color: "var(--color-text)" }}
          className="text-2xl md:text-4xl font-bold mb-10 md:mb-14 leading-tight"
        >
          Easily manage your Gas Fees and Token Purchases
        </h1>

        {/* Features Section */}
        <div className="space-y-8">
          {/* Feature 1 */}
          <div className="flex flex-col md:flex-row items-start gap-4">
            <div
              style={{ backgroundColor: "var(--color-card)" }}
              className="p-3 rounded-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "var(--color-secondary)" }}
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                />
              </svg>
            </div>
            <div>
              <h2
                style={{ color: "var(--color-text)" }}
                className="text-lg md:text-xl font-semibold mb-2"
              >
                Easy Token Purchases
              </h2>
              <p style={{ color: "var(--color-subtle)" }}>
                Navigate the complexities of gas fees with our optimized
                solutions, ensuring smooth and cost-effective transactions.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col md:flex-row items-start gap-4">
            <div
              style={{ backgroundColor: "var(--color-card)" }}
              className="p-3 rounded-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "var(--color-secondary)" }}
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
            </div>
            <div>
              <h2
                style={{ color: "var(--color-text)" }}
                className="text-lg md:text-xl font-semibold mb-2"
              >
                Support for Multiple Networks
              </h2>
              <p style={{ color: "var(--color-subtle)" }}>
                Access and manage transactions across various blockchain
                networks from a single platform.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          

          <h2
            style={{
              color: "var(--color-secondary)",
              fontSize: "1.25rem",
              fontWeight: "500",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
            className="mx-auto text-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
            GET STARTED
          </h2>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center">
          <h2
            style={{ color: "var(--color-text)" }}
            className="text-2xl md:text-3xl font-bold mb-2"
          >
            Ready to Revolutionize Your
          </h2>
          <div
            style={{
              background:
                "linear-gradient(to right, var(--color-primary), var(--color-secondary))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            className="text-2xl md:text-3xl font-bold"
          >
            Crypto Gas Fee Management?
          </div>
          <p style={{ color: "var(--color-subtle)" }} className="mt-4">
            Join thousands of users who are already enjoying seamless gas fee
            transactions.
          </p>
          <button
            style={{
              backgroundColor: "var(--color-primary)",
              "--tw-hover-bg": "var(--color-secondary)",
            }}
            className="text-white px-8 py-3 rounded-lg font-medium mt-8 hover:bg-[var(--color-secondary)] transition-colors"
          >
            Sign Up Now
          </button>
        </div>
      </main>
    </div>
  );
}

export default Broad;
