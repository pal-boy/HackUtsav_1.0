import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-blue-600 p-4 text-white">
        <nav className="container mx-auto flex justify-between">
          <ul className="flex space-x-4">
            <li><Link to="/login" className="hover:underline">Login</Link></li>
            <li><Link to="/register" className="hover:underline">Register</Link></li>
            <li><Link to="/forgot-password" className="hover:underline">Forgot Password</Link></li>
          </ul>
        </nav>
      </header>
      <main className="flex-grow container mx-auto flex justify-center items-center">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
