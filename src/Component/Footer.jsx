

import React from 'react'

function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--color-card)' }} className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src="/logo.svg" alt="jhay-digitals" className="w-8 h-8" />
              <span style={{ color: 'var(--color-text)' }} className="text-xl font-semibold">jhay-digitals</span>
            </div>
            <p style={{ color: 'var(--color-subtle)' }}>Your trusted partner for seamless crypto gas fee transactions.</p>
          </div>
          
          <div>
            <h4 style={{ color: 'var(--color-text)' }} className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" style={{ color: 'var(--color-subtle)', transition: 'color 0.3s ease' }} className="hover:text-[var(--color-primary)]">Home</a></li>
              <li><a href="#" style={{ color: 'var(--color-subtle)', transition: 'color 0.3s ease' }} className="hover:text-[var(--color-primary)]">Features</a></li>
              <li><a href="#" style={{ color: 'var(--color-subtle)', transition: 'color 0.3s ease' }} className="hover:text-[var(--color-primary)]">Statistics</a></li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ color: 'var(--color-text)' }} className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" style={{ color: 'var(--color-subtle)', transition: 'color 0.3s ease' }} className="hover:text-[var(--color-primary)]">Terms of Service</a></li>
              <li><a href="#" style={{ color: 'var(--color-subtle)', transition: 'color 0.3s ease' }} className="hover:text-[var(--color-primary)]">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ color: 'var(--color-text)' }} className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li style={{ color: 'var(--color-subtle)' }}>support@jhay-digitals.com</li>
              <li style={{ color: 'var(--color-subtle)' }}>+234-8060-470874</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t" style={{ borderColor: 'var(--color-bg)', textAlign: 'center', color: 'var(--color-subtle)' }}>
          <p>© 2025 jhay-digitals Pay. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer