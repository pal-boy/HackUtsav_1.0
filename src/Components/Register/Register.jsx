import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Fetch existing emails and passwords from localStorage
    const existingEmails = JSON.parse(localStorage.getItem('emails')) || [];
    const existingPasswords = JSON.parse(localStorage.getItem('passwords')) || [];

    // Check if email is already registered
    if (existingEmails.includes(email)) {
      setErrorMessage('Email is already registered.');
      return;
    }

    // Basic validation for password
    if (!email || !password || !confirmPassword) {
      setErrorMessage('Please fill in all the fields.');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    // Store email and password in localStorage
    existingEmails.push(email);
    existingPasswords.push(password);
    localStorage.setItem('emails', JSON.stringify(existingEmails));
    localStorage.setItem('passwords', JSON.stringify(existingPasswords));

    // Show success message and redirect to login
    setSuccessMessage('Account created successfully! Redirecting to login...');
    setTimeout(() => {
      navigate('/login');
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Register</h2>
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
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            Register
          </button>
        </form>
        <div className="mt-4 text-center">
          <p>
            Already have an account?{' '}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
