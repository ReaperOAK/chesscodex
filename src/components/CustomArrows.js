import React from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

export const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow custom-arrow-next bg-gradient-to-r from-cyan-500 to-pink-500 hover:opacity-95 transition-all duration-200`}
      style={{ 
        ...style, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        width: '40px', 
        height: '40px', 
        borderRadius: '50%', 
        right: '10px', 
        zIndex: 1, 
        cursor: 'pointer' 
      }}
      onClick={onClick}
    >
      <FaArrowRight className="text-white" />
    </div>
  );
};

export const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow custom-arrow-prev bg-gradient-to-r from-cyan-500 to-pink-500 hover:opacity-95 transition-all duration-200`}
      style={{ 
        ...style, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        width: '40px', 
        height: '40px', 
        borderRadius: '50%', 
        left: '10px', 
        zIndex: 1, 
        cursor: 'pointer' 
      }}
      onClick={onClick}
    >
      <FaArrowLeft className="text-white" />
    </div>
  );
};
