import React, { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import CTA from '../components/CTA';

// Replace these URLs with the actual URLs of your images and videos from Google Drive
const media = [
  { src: 'https://drive.google.com/file/d/1x1mk8qlb1jZEcWAddzUdmGLi1o9Rkmag/view?usp=drive_link', type: 'image', alt: 'Chess Event 1' },
  { src: 'https://drive.google.com/file/d/1TMWD6MeSbStBnVAOoo7E8KydNq0AZ9Rf/view?usp=drive_link', type: 'image', alt: 'Chess Event 2' },
  { src: 'https://drive.google.com/uc?id=1NynISGt9IWPAD-jdKzwhKr1Bz11ZPXot', type: 'image', alt: 'Chess Training Session' },
  { src: 'https://drive.google.com/uc?id=1NynISGt9IWPAD-jdKzwhKr1Bz11ZPXot', type: 'image', alt: 'Tournament Final' },
  { src: 'https://drive.google.com/uc?id=1NynISGt9IWPAD-jdKzwhKr1Bz11ZPXot', type: 'image', alt: 'Chess Club Meetup' },
  { src: 'https://drive.google.com/uc?id=1NynISGt9IWPAD-jdKzwhKr1Bz11ZPXot', type: 'video', alt: 'Chess Event Video 1' },
  { src: 'https://drive.google.com/uc?id=1NynISGt9IWPAD-jdKzwhKr1Bz11ZPXot', type: 'video', alt: 'Chess Event Video 2' },
];

function Gallery() {
  const [index, setIndex] = useState(-1); // Lightbox open state: -1 means closed

  const openLightbox = (idx) => {
    setIndex(idx); // Set index of clicked media
  };

  const slides = media.map((item) => ({
    src: item.src,
    alt: item.alt,
    type: item.type,
  }));

  return (
    <div>
      <div className="min-h-screen bg-gray-100 p-10">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">Gallery</h1>
          <p className="mt-2 text-lg text-gray-600">Explore the moments captured during our academy events.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {media.map((item, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden bg-gray-200 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            >
              {item.type === 'image' ? (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-60 object-cover cursor-pointer"
                  onClick={() => openLightbox(idx)}
                />
              ) : (
                <video
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-60 object-cover cursor-pointer"
                  onClick={() => openLightbox(idx)}
                  controls
                />
              )}
              <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-semibold text-lg">{item.alt}</p>
              </div>
            </div>
          ))}
        </div>

        <Lightbox
          open={index >= 0} // Open the lightbox if index is set
          index={index}
          close={() => setIndex(-1)} // Close lightbox
          slides={slides} // Array of media for lightbox
        />
      </div>
      <CTA/>
    </div>
  );
}

export default Gallery;