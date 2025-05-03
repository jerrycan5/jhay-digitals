import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4" style={{ backgroundColor: 'var(--color-bg)' }}>
      {/* Logo */}
      <div className="mb-12 flex items-center space-x-2">
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="var(--color-primary)" />
          <path d="M2 17L12 22L22 17M2 12L12 17L22 12" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-2xl font-bold" style={{ color: 'var(--color-primary)' }}>jhay-digitals</span>
      </div>

      <div className="w-full max-w-md p-8 rounded-2xl space-y-8" style={{ backgroundColor: 'var(--color-card)' }}>
        <div className="text-center">
          <h2 className="text-3xl font-bold" style={{ color: 'var(--color-text)' }}>Welcome back</h2>
          <p className="mt-2" style={{ color: 'var(--color-subtle)' }}>
            Login to continue enjoying our seamless services
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm mb-2" style={{ color: 'var(--color-text)' }}>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg transition-colors duration-200"
              style={{
                backgroundColor: 'var(--color-bg)',
                color: 'var(--color-text)',
                border: '1px solid var(--color-subtle)',
              }}
              required
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm" style={{ color: 'var(--color-text)' }}>Password</label>
              <Link
                to="/forgot-password"
                className="text-sm hover:underline"
                style={{ color: 'var(--color-primary)' }}
              >
                Forgot password?
              </Link>
            </div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg transition-colors duration-200"
              style={{
                backgroundColor: 'var(--color-bg)',
                color: 'var(--color-text)',
                border: '1px solid var(--color-subtle)',
              }}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg font-medium transition-colors duration-200"
            style={{
              backgroundColor: 'var(--color-primary)',
              color: 'var(--color-text)',
            }}
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-sm" style={{ color: 'var(--color-subtle)' }}>
          Don't have an account?{' '}
          <Link
            to="/signup"
            className="hover:underline"
            style={{ color: 'var(--color-primary)' }}
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;