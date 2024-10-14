import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex justify-between items-center">
        <h1 className="text-xl">Plate Again</h1>
        <ul className="flex space-x-4">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/how-it-works">How It Works</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/featured-programs">Featured Programs</Link></li>
          <li><Link to="/reviews">Reviews</Link></li>
          <li><Link to="/join-mission">Join Our Mission</Link></li>
          <li><Link to="/latest-news">Latest News</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/login">Login</Link></li> {/* Link to Login */}
          <li><Link to="/register">Register</Link></li> {/* Link to Register */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
