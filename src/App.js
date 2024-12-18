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
import Exclusives from './pages/Exclusives';
import CollaborateWithUs from './pages/CollaborateWithUs';
import Newsletter from './components/Newsletter'; // Import the Newsletter component
import WhatsAppButton from './components/WhatsAppButton'; // Import the WhatsAppButton component
import NotFound from './pages/NotFound'; // Import the NotFound component
import { Helmet, HelmetProvider } from 'react-helmet-async';
import CTA from './components/CTA';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Helmet>
          <title>ChessCodex - Elevate Your Chess Skills</title>
          <meta name="description" content="Join ChessCodex to elevate your chess skills with expert training and comprehensive courses." />
        </Helmet>
        <Navbar />
        <div className="relative bg-[#f3f1f9] text-[#270185]">
          <Newsletter position="left" /> {/* Include the Newsletter component */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<AdmissionCourses />} />
            <Route path="/admission" element={<AdmissionCourses />} />
            <Route path="/achievements-testimonials" element={<AchievementsTestimonials />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/events-blogs" element={<Events />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/refund-policy" element={<FAQs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<Maintenance />} />
            <Route path="/exclusives/*" element={<Exclusives />} />
            <Route path="/collaborate-with-us" element={<CollaborateWithUs />} />
            <Route path="*" element={<NotFound />} /> {/* Add this line */}
          </Routes>
          <WhatsAppButton />
        </div>
        <CTA />
        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;
