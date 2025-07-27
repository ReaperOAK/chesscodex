import React from 'react';
import Slider from 'react-slick';
import { FaStar } from 'react-icons/fa'; // Importing an icon for flair
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const benefits = [
  "Helps in Problem Solving & Memory Retention",
  "Assured Positive Impact in Academic Performance",
  "Enhances Creativity, Analytical and Critical Thinking",
  "Improves Focus & Time Management",
  "Stimulates Growth of Neuron Dendrites",
  "Therapeutic for Anxiety & ADHD", // Shortened for better display
];

const BenefitsSlider = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 800, // Slightly slower for a smoother feel
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000, // A bit more time to read
    arrows: false,
    fade: true, // Using fade for a classier transition
    cssEase: 'linear',
  };

  // --- NEW STYLING ---
  // A richer, more defined look to make it stand out.
  const sliderClasses = "bg-black bg-opacity-10 py-2 border-b-2 border-amber-300/20 shadow-lg";
  const textClasses = "text-sm sm:text-base text-amber-300 font-semibold tracking-wider uppercase";

  return (
    <div className={sliderClasses}>
      <Slider {...sliderSettings}>
        {benefits.map((benefit, index) => (
          <div key={index} className="text-center px-4">
            {/* Flex container to align icon and text */}
            <div className="flex items-center justify-center gap-4">
              <FaStar className="text-amber-500 text-lg" />
              <p className={textClasses}>{benefit}</p>
              <FaStar className="text-amber-500 text-lg" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BenefitsSlider;