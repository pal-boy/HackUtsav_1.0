import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './Components/Home/Home';
import HowItWork from './Pages/HowItWork';
import AboutUs from './Pages/AboutUs';
import FeaturedPrograms from './Pages/FeaturedPrograms';
import Reviews from './Pages/REviews';
import JoinOurMission from './Pages/JoinOurMisson';
import LatestNew from './Pages/LatestNews';
import ContactUs from './Pages/ContactUs';
import VendorDetails from './Components/VendorDetails/VendorDetails'; 
import VendorList from './Components/VendorList/VendorList';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';

function App() {
  return (
    <Router>
      <Routes>
        {/* Define routes inside the Layout */}
        <Route path="/" element={<Layout />}>
          {/* Home route */}
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />

          {/* Other routes */}
          <Route path="how-it-works" element={<HowItWork />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="featured-programs" element={<FeaturedPrograms />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="join-mission" element={<JoinOurMission />} />
          <Route path="latest-news" element={<LatestNew />} />
          <Route path="contact" element={<ContactUs />} />
          
          {/* Vendor List route */}
          <Route path="vendorlist" element={<VendorList />} />
          <Route path="vendor/:id" element={<VendorDetails />} />

          {/* Login and Register routes */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
