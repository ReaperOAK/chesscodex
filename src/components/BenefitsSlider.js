import React from 'react';
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
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="bg-[#14092e] text-white py-2">
      <Slider {...sliderSettings}>
        {benefits.map((benefit, index) => (
          <div key={index} className="text-center">
            <p className="text-lg">{benefit}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BenefitsSlider;