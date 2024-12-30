import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import AchievementsTestimonials from './pages/AchievementsTestimonials';
import Gallery from './pages/Gallery';
import Events from './pages/Events';
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
import BenefitsSlider from './components/BenefitsSlider'; // Import the BenefitsSlider component
import ScrollToTop from './components/ScrollToTop'; // Import the ScrollToTop component

function AppContent() {
  const location = useLocation();
  const isChessCodex = location.pathname.startsWith('/chesscodex');
  const isAspireChess = location.pathname.startsWith('/aspirechess');
  const isContactPage = location.pathname.endsWith('/contact');
  const theme = isContactPage ? 'contact' : 'default';

  return (
    <>
      <Helmet>
        <title>{isChessCodex ? 'ChessCodex - Elevate Your Chess Skills' : 'AspireChess - Elevate Your Chess Skills'}</title>
        <meta name="description" content={isChessCodex ? 'Join ChessCodex to elevate your chess skills with expert training and comprehensive courses.' : 'Join AspireChess to elevate your chess skills with expert training and comprehensive courses.'} />
      </Helmet>
      <Navbar />
      <BenefitsSlider /> {/* Include the BenefitsSlider component */}
      <div className="relative bg-[#f3f1f9] text-[#270185]">
        <Newsletter position="left" theme={theme} /> {/* Include the Newsletter component */}
        <Routes>
          {/* ChessCodex Routes */}
          {isChessCodex && (
            <>
              <Route path="/chesscodex" element={<Home />} />
              <Route path="/chesscodex/about" element={<About />} />
              <Route path="/chesscodex/courses" element={<AdmissionCourses />} />
              <Route path="/chesscodex/admission" element={<AdmissionCourses />} />
              <Route path="/chesscodex/achievements-testimonials" element={<AchievementsTestimonials />} />
              <Route path="/chesscodex/gallery" element={<Gallery />} />
              <Route path="/chesscodex/events-blogs" element={<Events />} />
              <Route path="/chesscodex/faqs" element={<Contact />} />
              <Route path="/chesscodex/refund-policy" element={<Navigate to="/chesscodex/contact#refund-policy" />} />
              <Route path="/chesscodex/contact" element={<Contact />} />
              <Route path="/chesscodex/dashboard" element={<Maintenance />} />
              <Route path="/chesscodex/exclusives/*" element={<Exclusives />} />
              <Route path="/chesscodex/collaborate-with-us/*" element={<CollaborateWithUs />} />
            </>
          )}

          {/* AspireChess Routes */}
          {isAspireChess && (
            <>
              <Route path="/aspirechess" element={<Home />} />
              <Route path="/aspirechess/about" element={<About />} />
              <Route path="/aspirechess/courses" element={<AdmissionCourses />} />
              <Route path="/aspirechess/admission" element={<AdmissionCourses />} />
              <Route path="/aspirechess/achievements-testimonials" element={<AchievementsTestimonials />} />
              <Route path="/aspirechess/gallery" element={<Gallery />} />
              <Route path="/aspirechess/events-blogs" element={<Events />} />
              <Route path="/aspirechess/faqs" element={<Contact />} />
              <Route path="/aspirechess/refund-policy" element={<Navigate to="/aspirechess/contact#refund-policy" />} />
              <Route path="/aspirechess/contact" element={<Contact />} />
              <Route path="/aspirechess/dashboard" element={<Maintenance />} />
              <Route path="/aspirechess/exclusives/*" element={<Exclusives />} />
              <Route path="/aspirechess/collaborate-with-us/*" element={<CollaborateWithUs />} />
            </>
          )}

          {/* Not Found Route */}
          <Route path="*" element={<NotFound />} /> {/* Add this line */}
        </Routes>
        <WhatsAppButton />
      </div>
      {!location.pathname.startsWith('/collaborate-with-us') && <CTA />}
      <Footer />
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop /> {/* Include the ScrollToTop component */}
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}

export default App;