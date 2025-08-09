import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WelcomePage from './pages/WelcomePage';
import NotFound from './pages/kca/NotFound';
import Newsletter from './components/Newsletter';
import BenefitsSlider from './components/BenefitsSlider';
import WhatsAppButton from './components/WhatsAppButton';
import CTA from './components/CTA';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './components/ScrollToTop';
// KCA imports
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
              <Route path="/about" element={<About />} />
              <Route path="/courses" element={<AdmissionCourses />} />
              <Route path="/admission" element={<AdmissionCourses />} />
              <Route path="/achievements-testimonials" element={<AchievementsTestimonials />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/events-blogs" element={<Events />} />
              <Route path="/faqs" element={<Contact />} />
              <Route path="/refund-policy" element={<Navigate to="/contact#refund-policy" />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/dashboard" element={<Navigate to="https://dashboard.kolkatachessacademy.in" replace />} />
                <Route path="/exclusives/*" element={<Exclusives />} />
                <Route path="/collaborate-with-us/*" element={<CollaborateWithUs />} />
          {isAspireChess && (
            <>
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
                <Route path="/aspirechess/collaborate-with-us/*" element={<AspireCollaborateWithUs />} />
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
