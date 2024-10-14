import { Outlet, Link } from 'react-router-dom'; // Import Link for navigation
import Header from './Pages/Header';
import Footer from './Pages/Footer';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header will be displayed on all pages */}
      <Header />

      {/* This Outlet will render the routed components */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Navigation links for Login and Register */}
      <nav className="bg-gray-200 p-4">
        <ul className="flex space-x-4">
          <li>
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </li>
          <li>
            <Link to="/register" className="text-blue-500 hover:underline">
              Register
            </Link>
          </li>
        </ul>
      </nav>

      {/* Footer will be displayed on all pages */}
      <Footer />
    </div>
  );
};

export default Layout;
