import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Signup = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    referralCode: '',
    phoneNumber: '',
    transactionPIN: '',
    confirmPIN: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleContinue = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="w-full max-w-md p-8 rounded-2xl space-y-6" style={{ backgroundColor: 'var(--color-card)' }}>
        {/* Progress Indicator */}
        <div className="flex justify-center space-x-2 mb-8">
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: step === 1 ? 'var(--color-primary)' : 'var(--color-subtle)' }}></div>
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: step === 2 ? 'var(--color-primary)' : 'var(--color-subtle)' }}></div>
        </div>

        {step === 1 ? (
          <form onSubmit={handleContinue} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-2" style={{ color: 'var(--color-text)' }}>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg"
                  style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text)', border: '1px solid var(--color-subtle)' }}
                />
              </div>
              <div>
                <label className="block text-sm mb-2" style={{ color: 'var(--color-text)' }}>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg"
                  style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text)', border: '1px solid var(--color-subtle)' }}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-2" style={{ color: 'var(--color-text)' }}>Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg"
                style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text)', border: '1px solid var(--color-subtle)' }}
              />
            </div>

            <div>
              <label className="block text-sm mb-2" style={{ color: 'var(--color-text)' }}>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg"
                style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text)', border: '1px solid var(--color-subtle)' }}
              />
            </div>

            <div>
              <label className="block text-sm mb-2" style={{ color: 'var(--color-text)' }}>Referral Code (Optional)</label>
              <input
                type="text"
                name="referralCode"
                value={formData.referralCode}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg"
                style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text)', border: '1px solid var(--color-subtle)' }}
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors duration-200"
              style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-text)' }}
            >
              <span>Continue</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </form>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm mb-2" style={{ color: 'var(--color-text)' }}>Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg"
                style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text)', border: '1px solid var(--color-subtle)' }}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-2" style={{ color: 'var(--color-text)' }}>Transaction PIN</label>
                <input
                  type="password"
                  name="transactionPIN"
                  value={formData.transactionPIN}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg"
                  style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text)', border: '1px solid var(--color-subtle)' }}
                />
              </div>
              <div>
                <label className="block text-sm mb-2" style={{ color: 'var(--color-text)' }}>Confirm PIN</label>
                <input
                  type="password"
                  name="confirmPIN"
                  value={formData.confirmPIN}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg"
                  style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text)', border: '1px solid var(--color-subtle)' }}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-2" style={{ color: 'var(--color-text)' }}>Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg"
                  style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text)', border: '1px solid var(--color-subtle)' }}
                />
              </div>
              <div>
                <label className="block text-sm mb-2" style={{ color: 'var(--color-text)' }}>Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg"
                  style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text)', border: '1px solid var(--color-subtle)' }}
                />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                className="rounded"
                style={{ accentColor: 'var(--color-primary)' }}
              />
              <label className="text-sm" style={{ color: 'var(--color-text)' }}>
                I agree to the{' '}
                <Link to="/terms" className="hover:underline" style={{ color: 'var(--color-primary)' }}>Terms of Service</Link>
                {' '}and{' '}
                <Link to="/privacy" className="hover:underline" style={{ color: 'var(--color-primary)' }}>Privacy Policy</Link>
              </label>
            </div>

            <div className="flex items-center justify-between space-x-4">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-6 py-3 rounded-lg flex items-center justify-center transition-colors duration-200"
                style={{ backgroundColor: 'transparent', color: 'var(--color-text)', border: '1px solid var(--color-subtle)' }}
              >
                Back
              </button>
              <button
                type="submit"
                className="flex-1 py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors duration-200"
                style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-text)' }}
              >
                <span>Sign Up</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </form>
        )}

        <p className="text-center text-sm" style={{ color: 'var(--color-subtle)' }}>
          Already have an account?{' '}
          <Link to="/signin" className="hover:underline" style={{ color: 'var(--color-primary)' }}>Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;