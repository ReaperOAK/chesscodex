import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Achievements from './pages/Achievements';
import Gallery from './pages/Gallery';
import Events from './pages/Events';
import FAQs from './pages/FAQs';
import Contact from './pages/Contact';
import Testimonials from './pages/Testimonials';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Maintenance from './pages/Maintenance';
import AdmissionCourses from './pages/AdmissionCourses';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<AdmissionCourses />} />
        <Route path="/admission" element={<AdmissionCourses />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/events" element={<Events />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/dashboard" element={<Maintenance/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
