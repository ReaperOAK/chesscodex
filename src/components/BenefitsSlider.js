import React from 'react';
import { useLocation } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const benefits = [
  "Helps in Problem Solving & Memory Retention",
  "Assured Positive Impact in Academic Performance",
  "Enhances Creativity, Analytical and Critical Thinking",
  "Improves Focus & Time Management",
  "Stimulates Growth of Neuron Dendrites",
  "Can be therapeutic for people dealing with anxiety, ADHD, and other mental health conditions.",
];

const BenefitsSlider = () => {
  const location = useLocation();
  const isAspireChess = location.pathname.startsWith('/aspirechess');
  
  const sliderSettings = {
    dots: false, // Dots can be distracting on a dark bg, removed for aspire
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const sliderClasses = isAspireChess 
    ? "bg-black bg-opacity-10 py-2" 
    : "bg-brand-dark text-white py-2";
  
  const textClasses = isAspireChess 
    ? "text-lg text-amber-300 font-light"
    : "text-lg text-white";

  return (
    <div className={sliderClasses}>
      <Slider {...sliderSettings}>
        {benefits.map((benefit, index) => (
          <div key={index} className="text-center px-4">
            <p className={textClasses}>{benefit}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BenefitsSlider;