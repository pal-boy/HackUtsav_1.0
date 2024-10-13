import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="max-w-md w-full bg-white shadow-lg p-8">
      <h2 className="text-2xl font-semibold text-center mb-6">Create Your Account</h2>
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">First Name</label>
          <input type="text" className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Last Name</label>
          <input type="text" className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input type="password" className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md" />
        </div>
        <div className="text-sm">
          <label className="flex items-center">
            <input type="checkbox" className="h-4 w-4 text-blue-600" />
            <span className="ml-2 text-gray-600">I agree with the <a href="#" className="text-blue-600 hover:underline">Terms of Use</a> & <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a></span>
          </label>
        </div>
        <div>
          <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded-md">Register</button>
        </div>
      </form>
      <div className="text-center mt-4">
        <p>Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Log in here</Link></p>
      </div>
      <div className="flex justify-between mt-6">
        <button className="w-full mx-2 py-2 px-4 bg-red-600 text-white rounded-md">G</button>
        <button className="w-full mx-2 py-2 px-4 bg-blue-700 text-white rounded-md">F</button>
        <button className="w-full mx-2 py-2 px-4 bg-gray-600 text-white rounded-md">E</button>
      </div>
    </div>
  );
};

export default Register;
