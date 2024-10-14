import React from 'react';
import { useParams, Link } from 'react-router-dom';

// Dummy data (you can replace this with dynamic data fetching from an API later)
const vendorData = [
  {
    id: '1',
    name: 'Vendor A',
    location: 'Location A',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    rating: 4.5,
    image: 'https://www.investopedia.com/thmb/8HWFwMcDj1k8a3GoK8ekvdXAywQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1368552631-e540388cb5a24b4f9c6a060640177073.jpg',
  },
  {
    id: '2',
    name: 'Vendor B',
    location: 'Location B',
    description: 'Pellentesque in ipsum id orci porta dapibus.',
    rating: 4.2,
    image: 'https://media.licdn.com/dms/image/D4E12AQE7JSYCmiOl-Q/article-cover_image-shrink_720_1280/0/1674155557766?e=2147483647&v=beta&t=plRwv4Zd0QCeKPj7aoaJSaK6xMTXP6Se38zzaYZmi_Y',
  },
  {
    id: '3',
    name: 'Vendor C',
    location: 'Location C',
    description: 'Curabitur aliquet quam id dui posuere blandit.',
    rating: 4.8,
    image: 'https://blog.bakersmakers.com/wp-content/uploads/2021/04/how-to-donate-leftover-food-from-your-restaurant-999x640.jpg',
  },
];

const VendorDetails = () => {
  const { id } = useParams();
  const vendor = vendorData.find((vendor) => vendor.id === id);

  if (!vendor) {
    return <p>Vendor not found.</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img
            src={vendor.image}
            alt={vendor.name}
            className="w-full h-64 object-cover rounded-md mb-6"
          />
          <h2 className="text-3xl font-bold mb-4">{vendor.name}</h2>
          <p className="text-gray-700 mb-4">Location: {vendor.location}</p>
          <p className="text-gray-700 mb-4">{vendor.description}</p>
          <p className="text-yellow-500 mb-4">Rating: {vendor.rating} ★</p>
          <Link
            to="/vendorlist"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded"
          >
            Back to Vendor List
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VendorDetails;
