import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Fetch emails and passwords from local storage
    const emails = JSON.parse(localStorage.getItem('emails')) || [];
    const passwords = JSON.parse(localStorage.getItem('passwords')) || [];

    const email = e.target.email.value;
    const password = e.target.password.value;

    // Basic validation
    if (!email || !password) {
      setErrorMessage('Please enter both email and password.');
      return;
    }

    // Simulate server-side validation
    let emailFlag = false;
    let passwordFlag = false;
    let emailPasswordFlag = false;

    for (let i = 0; i < emails.length; i++) {
      if (email === emails[i] && password === passwords[i]) {
        // Redirect to home if login is successful
        navigate('/home'); // Change '/home' to the desired route after login
        return;
      } else {
        if (email !== emails[i] && password === passwords[i]) {
          emailFlag = true;
        }
        if (email === emails[i] && password !== passwords[i]) {
          passwordFlag = true;
        }
        if (email !== emails[i] && password !== passwords[i]) {
          emailPasswordFlag = true;
        }
      }
    }

    if (emails.length === 0) {
      setErrorMessage('Account does not exist. Please register.');
    } else if (emailPasswordFlag) {
      setErrorMessage('Account does not exist. Please register.');
    } else if (emailFlag) {
      setErrorMessage('Invalid email.');
    } else if (passwordFlag) {
      setErrorMessage('Invalid password.');
    }
  };

  const togglePasswordVisibility = (e) => {
    const passwordInput = e.target.previousSibling;
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      e.target.innerHTML = '🙈'; // Change to eye off emoji
    } else {
      passwordInput.type = 'password';
      e.target.innerHTML = '👀'; // Change to eye emoji
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
        <form onSubmit={handleSubmit} id="loginForm">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              required
              className="border rounded-lg p-2 w-full"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700">
            Password
            </label>
            <div className="relative">
              <input
                type="password"
                name="password"
                required
                className="border rounded-lg p-2 w-full"
              />
              <span
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-3 text-gray-600 cursor-pointer"
              >
                👀
              </span>
            </div>
          </div>
          <button
            type="submit"
            id="loginBtn"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg w-full"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <p>
            Don't have an account?{' '}
            <a href="/register" className="text-blue-600 hover:underline">
              Register
            </a>
          </p>
          <p className="mt-2">
            <a href="/forgot-password" className="text-blue-600 hover:underline">
              Forgot Password?
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

