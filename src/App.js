import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import About from './pages/About';
import AchievementsTestimonials from './pages/AchievementsTestimonials';
import Gallery from './pages/Gallery';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import Maintenance from './pages/Maintenance';
import AdmissionCourses from './pages/AdmissionCourses';
import WelcomePage from './pages/WelcomePage';
import Newsletter from './components/Newsletter';
import BenefitsSlider from './components/BenefitsSlider';
import Exclusives from './pages/Exclusives';
import CollaborateWithUs from './pages/CollaborateWithUs';
import WhatsAppButton from './components/WhatsAppButton';
import CTA from './components/CTA';
import NotFound from './pages/NotFound';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './components/ScrollToTop';
import SiteHome from './pages/SiteHome';

function AppContent() {
  const location = useLocation();
  const isAspireChess = location.pathname.startsWith('/aspirechess');
  useEffect(() => {
    const body = document.body;
    body.classList.remove('theme-aspirechess', 'theme-kca');
    if (isAspireChess) {
      body.classList.add('theme-aspirechess');
    } else {
      body.classList.add('theme-kca');
    }
  }, [isAspireChess]);

  return (
    <div>
      <Helmet>
        <title>{isAspireChess ? 'AspireChess - Elevate Your Chess Skills' : 'Chess Academy - Elevate Your Chess Skills'}</title>
        <meta name="description" content={isAspireChess ? 'Join AspireChess to elevate your chess skills with expert training and comprehensive courses.' : 'Join our Chess Academy to elevate your chess skills with expert training and comprehensive courses.'} />
      </Helmet>
      <Navbar />
      <BenefitsSlider />
      <div className={`relative ${isAspireChess ? 'bg-transparent' : 'bg-brand-light'} text-brand-text`}>
        <Newsletter position="left" theme={isAspireChess ? 'aspirechess' : 'default'} />
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/dashboard" element={<Navigate to="https://dashboard.kolkatachessacademy.in" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/achievements-testimonials" element={<AchievementsTestimonials />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/refund-policy" element={<Navigate to="/contact#refund-policy" />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/exclusives/*" element={<Exclusives />} />
          <Route path="/collaborate-with-us/*" element={<CollaborateWithUs />} />
          {/* AspireChess and Kolkata Chess Academy are now the only brands. */}
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
              <Route path="/aspirechess/dashboard" element={<Navigate to="https://dashboard.kolkatachessacademy.in" replace />} />
              <Route path="/aspirechess/exclusives/*" element={<Exclusives />} />
              <Route path="/aspirechess/collaborate-with-us/*" element={<CollaborateWithUs />} />
            </>
          )}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <WhatsAppButton />
      </div>
      {!location.pathname.startsWith('/collaborate-with-us') && <CTA />}
      <Footer />
    </div>
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
