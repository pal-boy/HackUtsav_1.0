import React from 'react';
import { Link } from 'react-router-dom';

const vendors = [
  {
    id: 1,
    name: 'Luxury Inn',
    location: 'Downtown',
    description: 'High-end hotel offering surplus gourmet meals.',
    imageUrl: 'https://via.placeholder.com/300x200',
  },
  {
    id: 2,
    name: 'Grand Palace',
    location: 'Uptown',
    description: 'Offering freshly prepared dishes at discounted rates.',
    imageUrl: 'https://via.placeholder.com/300x200',
  },
  {
    id: 3,
    name: 'Cozy Eatery',
    location: 'Suburbs',
    description: 'Surplus food from our family-owned restaurant.',
    imageUrl: 'https://via.placeholder.com/300x200',
  },
  // Add more vendors as needed
];

const VendorList = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">Available Vendors</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {vendors.map((vendor) => (
            <div key={vendor.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={vendor.imageUrl}
                alt={vendor.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{vendor.name}</h3>
                <p className="text-gray-600 mb-4">{vendor.location}</p>
                <p className="text-gray-700 mb-4">{vendor.description}</p>
                <Link
                  to={`/vendor/${vendor.id}`}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VendorList;
