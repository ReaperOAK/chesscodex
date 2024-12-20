import React from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

export const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow custom-arrow-next`}
      style={{ ...style, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', backgroundColor: '#200e4a', borderRadius: '50%', right: '10px', zIndex: 1, cursor: 'pointer' }}
      onClick={onClick}
    >
      <FaArrowRight style={{ color: 'white' }} />
    </div>
  );
};

export const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow custom-arrow-prev`}
      style={{ ...style, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', backgroundColor: '#200e4a', borderRadius: '50%', left: '10px', zIndex: 1, cursor: 'pointer' }}
      onClick={onClick}
    >
      <FaArrowLeft style={{ color: 'white' }} />
    </div>
  );
};