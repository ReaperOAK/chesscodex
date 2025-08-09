import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Popup from './components/Popup';
import Footer from './components/Footer';
import NotFound from './pages/kca/NotFound';
import Newsletter from './components/Newsletter';
import BenefitsSlider from './components/BenefitsSlider';
import WhatsAppButton from './components/WhatsAppButton';
import CTA from './components/CTA';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './components/ScrollToTop';
// KCA imports
import KCAHome from './pages/kca/SiteHome';
import About from './pages/kca/About';
import AchievementsTestimonials from './pages/kca/AchievementsTestimonials';
import Gallery from './pages/kca/Gallery';
import Events from './pages/kca/Events';
import Contact from './pages/kca/Contact';
import AdmissionCourses from './pages/kca/AdmissionCourses';
import Exclusives from './pages/kca/Exclusives';
import CollaborateWithUs from './pages/kca/CollaborateWithUs';
// Aspire imports
import AspireAbout from './pages/aspire/About';
import AspireAchievementsTestimonials from './pages/aspire/AchievementsTestimonials';
import AspireGallery from './pages/aspire/Gallery';
import AspireEvents from './pages/aspire/Events';
import AspireContact from './pages/aspire/Contact';
import AspireAdmissionCourses from './pages/aspire/AdmissionCourses';
import AspireExclusives from './pages/aspire/Exclusives';
import AspireCollaborateWithUs from './pages/aspire/CollaborateWithUs';
import AspireHome from './pages/aspire/SiteHome';

function AppContent() {
  const location = useLocation();
  // Default to Aspire homepage if root
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
  <Popup />
      <Helmet>
        <title>{isAspireChess ? 'AspireChess - Elevate Your Chess Skills' : 'Chess Academy - Elevate Your Chess Skills'}</title>
        <meta name="description" content={isAspireChess ? 'Join AspireChess to elevate your chess skills with expert training and comprehensive courses.' : 'Join our Chess Academy to elevate your chess skills with expert training and comprehensive courses.'} />
      </Helmet>
      <Navbar />
      <BenefitsSlider />
      <div className={`relative ${isAspireChess ? 'bg-transparent' : 'bg-brand-light'} text-brand-text`}>
        <Newsletter position="left" theme={isAspireChess ? 'aspirechess' : 'default'} />
        <Routes>
          {/* Redirect root to Aspire homepage */}
          <Route path="/" element={<Navigate to="/aspirechess" replace />} />
          <Route path="/kca/" element={<KCAHome />} />
          <Route path="/kca/about" element={<About />} />
          <Route path="/kca/courses" element={<AdmissionCourses />} />
          <Route path="/kca/admission" element={<AdmissionCourses />} />
          <Route path="/kca/achievements-testimonials" element={<AchievementsTestimonials />} />
          <Route path="/kca/gallery" element={<Gallery />} />
          <Route path="/kca/events-blogs" element={<Events />} />
          <Route path="/kca/faqs" element={<Contact />} />
          <Route path="/kca/refund-policy" element={<Navigate to="/kca/contact#refund-policy" />} />
          <Route path="/kca/contact" element={<Contact />} />
          <Route path="/kca/dashboard" element={<Navigate to="https://dashboard.kolkatachessacademy.in" replace />} />
          <Route path="/kca/exclusives/*" element={<Exclusives />} />
          <Route path="/kca/collaborate-with-us/*" element={<Navigate to="/kca/exclusives/collaboration" replace />} />
          {/* Aspire routes */}
          <Route path="/aspirechess" element={<AspireHome />} />
          <Route path="/aspirechess/about" element={<AspireAbout />} />
          <Route path="/aspirechess/courses" element={<AspireAdmissionCourses />} />
          <Route path="/aspirechess/admission" element={<AspireAdmissionCourses />} />
          <Route path="/aspirechess/achievements-testimonials" element={<AspireAchievementsTestimonials />} />
          <Route path="/aspirechess/gallery" element={<AspireGallery />} />
          <Route path="/aspirechess/events-blogs" element={<AspireEvents />} />
          <Route path="/aspirechess/faqs" element={<AspireContact />} />
          <Route path="/aspirechess/refund-policy" element={<Navigate to="/aspirechess/contact#refund-policy" />} />
          <Route path="/aspirechess/contact" element={<AspireContact />} />
          <Route path="/aspirechess/dashboard" element={<Navigate to="https://dashboard.kolkatachessacademy.in" replace />} />
          <Route path="/aspirechess/exclusives/*" element={<AspireExclusives />} />
          <Route path="/aspirechess/collaborate-with-us/*" element={<Navigate to="/aspirechess/exclusives/collaboration" replace />} />
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
