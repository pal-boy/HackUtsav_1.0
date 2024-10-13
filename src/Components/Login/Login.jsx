import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <section className="relative w-screen h-screen flex justify-center items-center flex-wrap overflow-hidden m-0 bg-black">
      <div className="absolute w-full h-full bg-gradient-to-b from-black to-yellow-500 animate-scroll"></div>

      {/* Background animation spans */}
      {Array.from({ length: 120 }).map((_, i) => (
        <span
          key={i}
          className="relative block w-[calc(6.25vw-2px)] h-[calc(6.25vw-2px)] bg-gray-800 transition duration-1500 hover:bg-yellow-500 m-[1px]"
        ></span>
      ))}

      <div className="absolute w-96 bg-gray-900 z-50 flex justify-center items-center p-10 rounded-lg shadow-xl">
        <div className="w-full flex flex-col items-center gap-10">
          <h2 className="text-3xl font-bold uppercase text-yellow-500">Sign In</h2>

          <form className="w-full flex flex-col gap-6">
            <div className="relative">
              <input
                type="text"
                required
                className="w-full bg-gray-700 border-none outline-none py-4 px-3 rounded text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500"
              />
              <i className="absolute left-3 top-2.5 text-gray-500">Username</i>
            </div>

            <div className="relative">
              <input
                type="password"
                required
                className="w-full bg-gray-700 border-none outline-none py-4 px-3 rounded text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500"
              />
              <i className="absolute left-3 top-2.5 text-gray-500">Password</i>
            </div>

            <div className="flex justify-between text-white">
              <label className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-yellow-500" />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <Link to="/forgot-password" className="text-yellow-500 font-semibold text-sm">
                Forgot Password?
              </Link>
            </div>

            <div>
              <input
                type="submit"
                value="Login"
                className="w-full py-2 bg-yellow-500 text-black font-bold text-xl rounded hover:opacity-90 cursor-pointer"
              />
            </div>
          </form>

          <div className="text-center text-white">
            <p>
              Don't have an account?{' '}
              <Link to="/register" className="text-yellow-500 font-semibold">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
