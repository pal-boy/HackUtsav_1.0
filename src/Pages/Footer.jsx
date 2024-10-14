import { Link } from "react-router-dom";
const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2024 Plate Again. All rights reserved.</p>
        <nav className="mt-4">
          <ul className="flex justify-center space-x-4">
            <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
            <li><Link to="/about" className="hover:text-gray-400">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-gray-400">Contact Us</Link></li>
          </ul>
        </nav>
      </footer>
    );
  };
  
  export default Footer;
  