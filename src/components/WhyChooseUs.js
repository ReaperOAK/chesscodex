
import React from 'react';
import Slider from 'react-slick';
import { NavLink, useLocation } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { highlightedFeatures, features } from '../data';

const WhyChooseUs = () => {
  const location = useLocation();
  const isAspireChess = location.pathname.startsWith('/aspirechess');
  const siteName = isAspireChess ? 'AspireChess' : 'Kolkata Chess Academy';

  // ...existing code...

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Define classes based on the theme
  // Keep section neutral so background shows; cards are frosted for both brands
  const sectionClasses = 'py-20';
  const titleClasses = isAspireChess ? 'text-4xl font-extrabold mb-6 text-amber-400' : 'text-4xl font-extrabold mb-6 text-cyan-300';
  const descriptionClasses = isAspireChess ? 'text-lg mb-12 text-gray-300' : 'text-lg mb-12 text-gray-200';
  const cardClasses = isAspireChess
    ? 'flex flex-col items-center justify-start bg-black bg-opacity-30 backdrop-blur-sm border border-gray-700 p-6 rounded-lg shadow-md transform hover:scale-105 hover:shadow-xl transition-all duration-300 h-full min-h-[200px]'
    : 'flex flex-col items-center justify-start bg-black bg-opacity-18 backdrop-blur-sm border border-gray-700/40 p-6 rounded-lg shadow-md transform hover:scale-105 hover:shadow-xl transition-all duration-300 h-full min-h-[200px]';
  const cardTitleClasses = isAspireChess ? 'text-lg font-semibold text-white mb-2' : 'text-lg font-semibold text-cyan-300 mb-2';
  const cardDescriptionClasses = isAspireChess ? 'text-gray-300 text-center text-sm' : 'text-gray-200 text-center text-sm';

  // Set correct links for highlightedFeatures and features based on isAspireChess
  const highlightedFeaturesWithLinks = highlightedFeatures.map((feature, idx) => {
    let link = null;
    if (idx === 0) link = isAspireChess ? "/aspirechess/courses" : "/kca/contact";
    if (idx === 1) link = isAspireChess ? "/aspirechess/about#team" : "/kca/about#team";
    if (idx === 2) link = isAspireChess ? "/aspirechess/about#team" : "/kca/about#team";
    return { ...feature, link };
  });
  const featuresWithLinks = features.map((feature, idx) => {
    let link = null;
    if (idx === 0 || idx === 1 || idx === 2 || idx === 3) link = isAspireChess ? "/aspirechess/courses" : "/kca/courses";
    if (idx === 4) link = isAspireChess ? "/aspirechess/achievements-testimonials" : "/kca/achievements-testimonials";
    if (idx === 5) link = "https://chat.whatsapp.com/ClWJgf6t1v1LPDhs7NqpCI";
    if (idx === 6) link = isAspireChess ? "/aspirechess/events-blogs" : "/kca/events-blogs";
    if (idx === 7 || idx === 8) link = "https://dashboard.kolkatachessacademy.in";
    if (idx === 8) link = "https://dashboard.kolkatachessacademy.in/";
    return { ...feature, link };
  });

  return (
    <section className={sectionClasses}>
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className={titleClasses}>Why Choose {siteName}?</h1>
        <p className={descriptionClasses}>
          At {siteName}, we empower chess enthusiasts with unparalleled coaching, a world-class curriculum, and the tools needed to succeed at any level.
        </p>

        {/* Highlighted Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {highlightedFeaturesWithLinks.map((feature, index) => (
            <NavLink key={index} to={feature.link} className={cardClasses}>
              <div className="flex justify-center items-center mb-2">{feature.icon}</div>
              <h2 className={cardTitleClasses}>{feature.title}</h2>
              <p className={cardDescriptionClasses}>{feature.description}</p>
            </NavLink>
          ))}
        </div>

        {/* Slider for Other Features */}
        <div className="relative">
          <Slider {...sliderSettings}>
            {featuresWithLinks.map((feature, index) => (
              <div key={index} className="px-4 py-6 h-full flex items-stretch">
                <NavLink to={feature.link} className={cardClasses + " w-full"}>
                  <div className="flex justify-center items-center mb-2">{feature.icon}</div>
                  <h2 className={cardTitleClasses}>{feature.title}</h2>
                  <p className={cardDescriptionClasses}>{feature.description}</p>
                </NavLink>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;