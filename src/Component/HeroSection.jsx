








import React from 'react'
import { Link } from 'react-router-dom'

function HeroSection() {
  return (
    <div className="bg-[var(--color-bg)]">
      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center px-4 text-center mt-15">
        <h1 className="text-4xl font-bold mb-2 flex flex-col items-center text-[var(--color-text)]">
          <span>Your</span>
          <span className="flex items-center gap-2">
            <span className="bg-[var(--color-primary)] text-[var(--color-text)] px-4 py-1 rounded-lg">One-Stop</span>
            <span>Solution</span>
          </span>
        </h1>
        
        <h2 className="text-[var(--color-primary)] text-2xl font-semibold mb-6">
          For All Crypto Gas Fees
        </h2>

        <p className="text-[var(--color-subtle)] max-w-md mb-8">
          Purchase any kind of gas fee with just a single funding.
        </p>

        <Link 
          to="/signup"
          className="bg-[var(--color-primary)] text-[var(--color-text)] px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-[var(--color-secondary)] transition-colors"
        >
          Get Started
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </main>
    </div>
  )
}

export default HeroSection