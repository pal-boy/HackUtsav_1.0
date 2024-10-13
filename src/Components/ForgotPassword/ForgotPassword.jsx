import React from 'react';

const ForgotPassword = () => {
  return (
    <div className="max-w-md w-full bg-white shadow-lg p-8">
      <h2 className="text-2xl font-semibold text-center mb-6">Forgot Password</h2>
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Enter your Email</label>
          <input type="email" className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md" />
        </div>
        <div>
          <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded-md">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
