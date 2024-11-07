import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import AchievementsTestimonials from './pages/AchievementsTestimonials';
import Gallery from './pages/Gallery';
import Events from './pages/Events';
import FAQs from './pages/FAQs';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Maintenance from './pages/Maintenance';
import AdmissionCourses from './pages/AdmissionCourses';
import RefundPolicy from './pages/RefundPolicy';
import Exclusives from './pages/Exclusives';
import CollaborateWithUs from './pages/CollaborateWithUs'; // Import the CollaborateWithUs component

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<AdmissionCourses />} />
        <Route path="/achievements-testimonials" element={<AchievementsTestimonials />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/events-blogs" element={<Events />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Maintenance />} />
        <Route path="/exclusives" element={<Exclusives />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/collaborate" element={<CollaborateWithUs />} /> {/* Add the route for CollaborateWithUs */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;