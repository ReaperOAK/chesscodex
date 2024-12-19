import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Media data
const media = [
  { src: 'https://drive.google.com/uc?id=1x1mk8qlb1jZEcWAddzUdmGLi1o9Rkmag', type: 'image', alt: 'Chess Event 1' },
  { src: 'https://drive.google.com/uc?id=1TMWD6MeSbStBnVAOoo7E8KydNq0AZ9Rf', type: 'image', alt: 'Chess Event 2' },
  { src: 'https://drive.google.com/uc?id=1NynISGt9IWPAD-jdKzwhKr1Bz11ZPXot', type: 'image', alt: 'Chess Training Session' },
  { src: 'https://drive.google.com/uc?id=1NynISGt9IWPAD-jdKzwhKr1Bz11ZPXot', type: 'image', alt: 'Tournament Final' },
  { src: 'https://drive.google.com/uc?id=1NynISGt9IWPAD-jdKzwhKr1Bz11ZPXot', type: 'video', alt: 'Chess Event Video 1' },
  { src: 'https://drive.google.com/uc?id=1NynISGt9IWPAD-jdKzwhKr1Bz11ZPXot', type: 'video', alt: 'Chess Event Video 2' },
];

const Gallery = () => {
  const [index, setIndex] = useState(-1); // Lightbox state
  const [filter, setFilter] = useState('all'); // Media filter state

  const filteredMedia = media.filter(
    (item) => filter === 'all' || item.type === filter
  );

  const slides = filteredMedia.map((item) => ({
    src: item.src,
    type: item.type,
    alt: item.alt,
  }));

  return (
    <>
      <Helmet>
        <title>Gallery - ChessCodex</title>
        <meta name="description" content="Explore the vibrant moments from ChessCodex's events, tournaments, and training sessions. View our gallery of images and videos." />
        <meta name="keywords" content="ChessCodex, chess gallery, chess events, chess tournaments, chess training, chess photos, chess videos" />
      </Helmet>
      <div className="bg-[#f3f1f9] min-h-screen p-6 md:p-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-[#200e4a]">Gallery</h1>
          <p className="text-lg text-[#270185] mt-4">
            Dive into the vibrant moments from our academy's events, tournaments, and training sessions.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-8 space-x-4">
          {['all', 'image', 'video'].map((type) => (
            <button
              key={type}
              className={`px-6 py-2 rounded-full font-semibold text-sm ${
                filter === type
                  ? 'bg-[#461fa3] text-white'
                  : 'bg-[#c2c1d3] text-[#3b3a52] hover:bg-[#3b3a52] hover:text-white'
              } transition duration-300`}
              onClick={() => setFilter(type)}
            >
              {type === 'all' ? 'All' : type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredMedia.map((item, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group"
              onClick={() => setIndex(idx)}
            >
              {item.type === 'image' ? (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              ) : (
                <video
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
                  controls
                />
              )}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-semibold text-lg">{item.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        <Lightbox
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          slides={slides}
          captions={slides.map((slide) => slide.alt)} // Adds captions
        />
      </div>
    </>
  );
};

export default Gallery;