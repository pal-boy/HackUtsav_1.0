import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Welcome to Plate Again</h1>
        <p className="text-lg text-gray-700 mb-8">
          A platform connecting high-end hotels with surplus food to individuals in need.
        </p>
        <Link to="/vendorlist" className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg">
          Explore Vendors
        </Link>
      </div>

      {/* Section with more details */}
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">How it works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Donate Surplus Food</h3>
            <p className="text-gray-600">
              High-end hotels and restaurants can list their surplus food here to prevent wastage.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Access Affordable Meals</h3>
            <p className="text-gray-600">
              Individuals can explore vendors offering affordable meals nearby.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Efficient Redistribution</h3>
            <p className="text-gray-600">
              Facilitating food redistribution in a safe, efficient, and dignified manner.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
