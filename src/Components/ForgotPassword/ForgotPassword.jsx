import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Fetch emails and passwords from localStorage
    const emails = JSON.parse(localStorage.getItem('emails')) || [];
    const passwords = JSON.parse(localStorage.getItem('passwords')) || [];

    const emailIndex = emails.indexOf(email);

    // Validate email and password fields
    if (!email || !newPassword || !confirmPassword) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    if (emailIndex === -1) {
      setErrorMessage('Email does not exist.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    // Update password in localStorage
    passwords[emailIndex] = newPassword;
    localStorage.setItem('passwords', JSON.stringify(passwords));

    setSuccessMessage('Password reset successfully! Redirecting to login...');
    setTimeout(() => {
      window.location.href = '/login'; // Redirect to login after successful reset
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Reset Password</h2>
        <form onSubmit={handleSubmit}>
          {errorMessage && <p className="text-red-600 mb-4">{errorMessage}</p>}
          {successMessage && <p className="text-green-600 mb-4">{successMessage}</p>}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border rounded-lg p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              className="border rounded-lg p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="border rounded-lg p-2 w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg w-full"
          >
            Reset Password
          </button>
        </form>
        <div className="mt-4 text-center">
          <p>
            Remembered your password?{' '}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
