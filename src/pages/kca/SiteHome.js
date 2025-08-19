import SEO from '../../components/SEO';
import React from 'react';
import { Link } from 'react-router-dom';
import { testimonials } from '../../data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

const KCAHome = () => {
  // Theme / utility classes reused from AchievementsTestimonials
  const titleClasses = "text-brand-dark";
  const textClasses = "text-brand-text";
  const cardClasses = "group bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer flex flex-col justify-between";
  const currentTestimonials = testimonials;

  return (
    <>
      <SEO
        title="Welcome - Kolkata Chess Academy & Aspire Chess Academy"
        description="Kolkata Chess Academy is our fully online head, providing all online coaching and dashboard support. Aspire Chess Academy (a unit of KCA) operates primarily offline; all its services are under KCA, and online students are redirected to KCA."
        keywords="chess, Kolkata Chess Academy, Aspire Chess Academy, online chess, offline chess, dashboard, training, courses, welcome"
        image="https://kolkatachessacademy.in/aca.png"
        url="https://kolkatachessacademy.in/"
        type="website"
        canonical="https://kolkatachessacademy.in/"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Welcome',
          url: 'https://kolkatachessacademy.in/',
          description: 'Kolkata Chess Academy is fully online and provides dashboard support. Aspire Chess Academy is a unit of KCA, operates offline, and redirects online students to KCA.'
        }}
      />
      <section className="bg-gradient-to-r from-brand-subtle via-white to-brand-subtle py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-10 text-brand-dark">Welcome to Our Chess Academies</h1>
          <p className="text-lg text-brand-text mb-12">
            <strong>Kolkata Chess Academy</strong> is our fully online head, providing all online coaching and dashboard support.<br/>
            <strong>Aspire Chess Academy</strong> (A Unit of Kolkata Chess Academy) operates primarily offline, and all its services are under KCA. 
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
            <Link to="/" className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <h2 className="text-3xl font-bold text-brand-dark mb-4">Kolkata Chess Academy</h2>
              <p className="text-lg text-brand-text">All online coaching and dashboard support. For online students and digital services.</p>
            </Link>
            <Link to="/aspirechess" className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <h2 className="text-3xl font-bold text-brand-dark mb-4">Aspire Chess Academy</h2>
              <p className="text-lg text-brand-text">Primarily offline operations. All online students and services are redirected to Kolkata Chess Academy.</p>
            </Link>
          </div>
        </div>
      </section>

        {/* Testimonials Section */}
        <section className="bg-gradient-to-r from-brand-light via-brand-accent to-brand-light py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className={`text-4xl font-bold text-center mb-12 ${titleClasses}`}>
              What Our Students Say
            </h2>
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              breakpoints={{ 1024: { slidesPerView: 2 }, 1440: { slidesPerView: 3 } }}
              className="pb-12"
            >
              {currentTestimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className={`${cardClasses} min-h-[220px]`}>
                    <div className="flex items-center mb-4">
                      <img className="w-16 h-16 rounded-full mr-4 border-2 border-amber-400/50" src={testimonial.avatar} alt={`${testimonial.name}'s avatar`} />
                      <div>
                        <h4 className="text-xl font-bold text-brand-dark">{testimonial.name}</h4>
                        <p className="text-brand-primary">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className={textClasses}>"{testimonial.quote}"</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
    </>
  );
};

export default KCAHome;
