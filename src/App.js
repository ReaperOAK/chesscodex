import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
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

  return (
    <>
      <Helmet>
        <title>{isChessCodex ? 'ChessCodex - Elevate Your Chess Skills' : isAspireChess ? 'AspireChess - Elevate Your Chess Skills' : 'Chess Academy - Elevate Your Chess Skills'}</title>
        <meta name="description" content={isChessCodex ? 'Join ChessCodex to elevate your chess skills with expert training and comprehensive courses.' : isAspireChess ? 'Join AspireChess to elevate your chess skills with expert training and comprehensive courses.' : 'Join our Chess Academy to elevate your chess skills with expert training and comprehensive courses.'} />
      </Helmet>
      <Navbar />
      <BenefitsSlider />
      <div className={`relative ${
        isChessCodex 
          ? 'bg-codex-bg-light text-codex-text-dark' 
          : isAspireChess 
          ? 'bg-aspire-bg-light text-aspire-text-dark' 
          : 'bg-kca-bg-light text-kca-text-dark'
      }`}>
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