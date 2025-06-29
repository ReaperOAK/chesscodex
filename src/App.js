import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import SiteHome from './pages/SiteHome';
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
import Newsletter from './components/Newsletter';
import WhatsAppButton from './components/WhatsAppButton';
import NotFound from './pages/NotFound';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import CTA from './components/CTA';
import BenefitsSlider from './components/BenefitsSlider';
import ScrollToTop from './components/ScrollToTop';
import WelcomePage from './pages/WelcomePage'; // Import the WelcomePage component

function AppContent() {
  const location = useLocation();
  const isChessCodex = location.pathname.startsWith('/chesscodex');
  const isAspireChess = location.pathname.startsWith('/aspirechess');
  const isContactPage = location.pathname.endsWith('/contact');
  const theme = isContactPage ? 'contact' : 'default';

  // Set CSS custom properties based on the current site
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    
    // Remove existing theme classes
    body.classList.remove('theme-chesscodex', 'theme-aspirechess', 'theme-kca');
    
    if (isChessCodex) {
      // ChessCodex - Modern Purple & Dark Theme
      body.classList.add('theme-chesscodex');
      root.style.setProperty('--brand-primary', '#200e4a');    // Deep Purple
      root.style.setProperty('--brand-secondary', '#461fa3');  // Medium Purple
      root.style.setProperty('--brand-accent', '#7646eb');     // Bright Purple
      root.style.setProperty('--brand-dark', '#14092e');       // Very Dark Purple
      root.style.setProperty('--brand-light', '#f3f1f9');      // Light Purple Tint
      root.style.setProperty('--brand-highlight', '#af0505');  // Alert Red
      root.style.setProperty('--brand-text', '#270185');       // Dark Purple Text
      root.style.setProperty('--brand-text-light', '#e3e1f7'); // Light Purple Text
      root.style.setProperty('--brand-text-neutral', '#ffffff'); // Pure White
      root.style.setProperty('--brand-gray-light', '#c2c1d3'); // Light Gray
      root.style.setProperty('--brand-gray-dark', '#3b3a52');  // Dark Gray
      root.style.setProperty('--brand-gradient', 'linear-gradient(135deg, #200e4a 0%, #7646eb 100%)');
    } else if (isAspireChess) {
      // AspireChess - Marble & Stone Theme with better contrast
      body.classList.add('theme-aspirechess');
      root.style.setProperty('--brand-primary', '#374151');    // Dark Stone Gray
      root.style.setProperty('--brand-secondary', '#6B7280');  // Medium Stone
      root.style.setProperty('--brand-accent', '#D1D5DB');     // Light Stone
      root.style.setProperty('--brand-dark', '#1F2937');       // Deep Charcoal
      root.style.setProperty('--brand-light', '#F9FAFB');      // Off White
      root.style.setProperty('--brand-highlight', '#4B5563');  // Stone Highlight
      root.style.setProperty('--brand-text', '#111827');       // Almost Black
      root.style.setProperty('--brand-gradient', 'linear-gradient(135deg, #374151 0%, #6B7280 100%)');
    } else {
      // KCA - Royal Heritage & Elegance Theme
      body.classList.add('theme-kca');
      root.style.setProperty('--brand-primary', '#1A365D');    // Deep Royal Blue
      root.style.setProperty('--brand-secondary', '#C53030');  // Rich Burgundy Red
      root.style.setProperty('--brand-accent', '#D69E2E');     // Royal Gold
      root.style.setProperty('--brand-dark', '#0A1929');       // Midnight Navy
      root.style.setProperty('--brand-light', '#FBF8F3');      // Warm Cream
      root.style.setProperty('--brand-highlight', '#E53E3E');  // Vibrant Crimson
      root.style.setProperty('--brand-text', '#2D3748');       // Charcoal Gray
      root.style.setProperty('--brand-text-light', '#F7FAFC'); // Soft White
      root.style.setProperty('--brand-text-neutral', '#FFFFFF'); // Pure White
      root.style.setProperty('--brand-gray-light', '#E2E8F0'); // Light Silver
      root.style.setProperty('--brand-gray-dark', '#4A5568');  // Steel Gray
      root.style.setProperty('--brand-accent-light', '#FAF089'); // Champagne Gold
      root.style.setProperty('--brand-secondary-light', '#FED7D7'); // Rose Blush
      root.style.setProperty('--brand-gradient', 'linear-gradient(135deg, #1A365D 0%, #C53030 50%, #D69E2E 100%)');
    }
  }, [isChessCodex, isAspireChess]);

  return (
    <>
      <Helmet>
        <title>{isChessCodex ? 'ChessCodex - Elevate Your Chess Skills' : isAspireChess ? 'AspireChess - Elevate Your Chess Skills' : 'Chess Academy - Elevate Your Chess Skills'}</title>
        <meta name="description" content={isChessCodex ? 'Join ChessCodex to elevate your chess skills with expert training and comprehensive courses.' : isAspireChess ? 'Join AspireChess to elevate your chess skills with expert training and comprehensive courses.' : 'Join our Chess Academy to elevate your chess skills with expert training and comprehensive courses.'} />
      </Helmet>
      <Navbar />
      <BenefitsSlider />
      <div className="relative bg-brand-light text-brand-text">
        <Newsletter position="left" theme={theme} />
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<WelcomePage />} />
          <Route path="/dashboard" element={<Maintenance />} />

          {/* Default Routes */}
          <Route path="/about" element={<About />} />
          <Route path="/achievements-testimonials" element={<AchievementsTestimonials />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/refund-policy" element={<Navigate to="/contact#refund-policy" />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/exclusives/*" element={<Exclusives />} />
          <Route path="/collaborate-with-us/*" element={<CollaborateWithUs />} />

          {/* ChessCodex Routes */}
          {isChessCodex && (
            <>
              <Route path="/chesscodex" element={<SiteHome />} />
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
              <Route path="/aspirechess" element={<SiteHome />} />
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
          <Route path="*" element={<NotFound />} />
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
        <ScrollToTop />
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}

export default App;
