import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import Slider from 'react-slick';
import { FaStar } from 'react-icons/fa'; // Importing an icon for flair
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { benefits } from '../data';
import RecognitionBanner from './RecognitionBanner';

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

  // Determine theme from current route (consistent with Navbar/Newsletter/App)
  const location = useLocation();
  const isAspireChess = location.pathname.startsWith('/aspirechess');
  const themeKey = isAspireChess ? 'aspirechess' : 'kca';

  // Theme configuration for color variants. Add more themes as needed.
  const themeConfig = useMemo(() => {
    const map = {
      kca: {
        container: 'bg-black bg-opacity-10 py-2 border-b-2 border-cyan-400/20 shadow-lg',
        text: 'text-sm sm:text-base text-cyan-300 font-semibold tracking-wider uppercase',
        icon: 'text-cyan-400 text-lg',
      },
      aspirechess: {
        container: 'bg-white bg-opacity-5 py-2 border-b-2 border-amber-500/20 shadow-lg',
        text: 'text-sm sm:text-base text-amber-300 font-semibold tracking-wider uppercase',
        icon: 'text-amber-400 text-lg',
      },
    };
    return map[themeKey] || map.kca;
  }, [themeKey]);

  // computed classes from selected theme
  const sliderClasses = themeConfig.container;
  const textClasses = themeConfig.text;

  return (
    <div className={sliderClasses} role="region" aria-label={`Benefits - ${themeKey}`} data-theme={themeKey}>
      <RecognitionBanner />
      <Slider {...sliderSettings}>
        {benefits.map((benefit, index) => (
          <div key={index} className="text-center px-4">
            {/* Flex container to align icon and text */}
            <div className="flex items-center justify-center gap-4">
              <FaStar className={themeConfig.icon} />
              <p className={textClasses}>{benefit}</p>
              <FaStar className={themeConfig.icon} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BenefitsSlider;