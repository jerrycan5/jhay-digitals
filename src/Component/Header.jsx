
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, LogIn, UserPlus } from 'lucide-react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header style={{ backgroundColor: 'var(--color-bg)' }} className="text-white p-4 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div style={{ backgroundColor: 'var(--color-primary)' }} className="w-6 h-6 rounded-sm"></div>
          <span style={{ color: 'var(--color-primary)' }} className="text-lg font-bold">jhay-digitals</span>
        </div>

        {/* Mobile Hamburger */}
        <button onClick={toggleMenu} className="md:hidden">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" style={{ color: 'var(--color-subtle)', transition: 'color 0.3s ease' }} className="hover:text-[var(--color-primary)]">Home</Link>
          <Link to="/features" style={{ color: 'var(--color-subtle)', transition: 'color 0.3s ease' }} className="hover:text-[var(--color-primary)]">Features</Link>
          <Link to="/statistics" style={{ color: 'var(--color-subtle)', transition: 'color 0.3s ease' }} className="hover:text-[var(--color-primary)]">Statistics</Link>
          <Link to="/legal" style={{ color: 'var(--color-subtle)', transition: 'color 0.3s ease' }} className="hover:text-[var(--color-primary)]">Legal</Link>
          <div className="flex gap-2 ml-4">
            <Link 
              to="/signin" 
              style={{ borderColor: 'var(--color-subtle)', color: 'var(--color-text)', transition: 'all 0.3s ease' }}
              className="px-3 py-1 border rounded hover:border-[var(--color-primary)] flex items-center gap-2"
            >
              <LogIn size={16} /> Sign In
            </Link>
            <Link 
              to="/signup" 
              style={{ backgroundColor: 'var(--color-primary)', transition: 'background-color 0.3s ease' }}
              className="px-3 py-1 text-white rounded hover:bg-[var(--color-secondary)] flex items-center gap-2"
            >
              <UserPlus size={16} /> Sign Up
            </Link>
          </div>
        </nav>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div 
          style={{ backgroundColor: 'var(--color-card)', borderColor: 'var(--color-subtle)' }} 
          className="absolute top-full left-0 w-full shadow-lg p-6 z-40 flex flex-col gap-4 border-t border-opacity-10"
        >
          <Link to="/" onClick={toggleMenu} style={{ color: 'var(--color-subtle)', transition: 'color 0.3s ease' }} className="hover:text-[var(--color-primary)]">Home</Link>
          <Link to="/features" onClick={toggleMenu} style={{ color: 'var(--color-subtle)', transition: 'color 0.3s ease' }} className="hover:text-[var(--color-primary)]">Features</Link>
          <Link to="/statistics" onClick={toggleMenu} style={{ color: 'var(--color-subtle)', transition: 'color 0.3s ease' }} className="hover:text-[var(--color-primary)]">Statistics</Link>
          <Link to="/legal" onClick={toggleMenu} style={{ color: 'var(--color-subtle)', transition: 'color 0.3s ease' }} className="hover:text-[var(--color-primary)]">Legal</Link>

          <div className="flex gap-3 mt-4">
            <Link
              to="/signin"
              onClick={toggleMenu}
              style={{ borderColor: 'var(--color-subtle)', color: 'var(--color-text)', transition: 'all 0.3s ease' }}
              className="flex items-center gap-2 px-4 py-2 border rounded hover:border-[var(--color-primary)]"
            >
              <LogIn size={16} /> Sign In
            </Link>
            <Link
              to="/signup"
              onClick={toggleMenu}
              style={{ backgroundColor: 'var(--color-primary)', transition: 'background-color 0.3s ease' }}
              className="flex items-center gap-2 px-4 py-2 text-white rounded hover:bg-[var(--color-secondary)]"
            >
              <UserPlus size={16} /> Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header

