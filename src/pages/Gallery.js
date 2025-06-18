import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import Slider from 'react-slick';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NextArrow, PrevArrow } from '../components/CustomArrows';

const ITEMS_PER_PAGE = 8;

const Gallery = () => {
  const location = useLocation();
  const isChessCodex = location.pathname.startsWith('/chesscodex');
  const siteName = isChessCodex ? 'ChessCodex' : 'AspireChess';
  const siteDescription = isChessCodex
    ? "Explore the vibrant moments from ChessCodex's events, tournaments, and training sessions. View our gallery of images and videos."
    : "Explore the vibrant moments from AspireChess's events, tournaments, and training sessions. View our gallery of images and videos.";
  const siteKeywords = isChessCodex
    ? 'ChessCodex, chess gallery, chess events, chess tournaments, chess training, chess photos, chess videos'
    : 'AspireChess, chess gallery, chess events, chess tournaments, chess training, chess photos, chess videos';

  const [index, setIndex] = useState(-1); // Lightbox state
  const [filter, setFilter] = useState('all'); // Media filter state
  const [media, setMedia] = useState([]); // Media state
  const [currentPage, setCurrentPage] = useState(1); // Pagination state

  useEffect(() => {
    async function fetchGallery() {
      try {
        const response = await fetch('/php/gallery.php');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const gallery = await response.json();
        const formattedMedia = gallery.flatMap(folder =>
          folder.files.map(file => ({
            ...file,
            folder: folder.folder
          }))
        );
        setMedia(formattedMedia);
        console.log('Fetched gallery:', formattedMedia); // Debugging log
      } catch (error) {
        console.error('Error fetching gallery:', error);
      }
    }

    fetchGallery();
  }, []);

  const filteredMedia = media.filter(
    (item) => filter === 'all' || item.type === filter
  );

  const groupedMedia = filteredMedia.reduce((acc, item) => {
    if (!acc[item.folder]) {
      acc[item.folder] = [];
    }
    acc[item.folder].push(item);
    return acc;
  }, {});

  const totalPages = Math.ceil(Object.keys(groupedMedia).length / ITEMS_PER_PAGE);
  const paginatedFolders = Object.keys(groupedMedia).slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const slides = filteredMedia.map((item) => ({
    src: item.src,
    type: item.type,
    alt: item.alt,
  }));

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const handleLightboxOpen = (index) => {
    const item = media[index];
    if (item.type === 'youtube') {
      window.open(item.src, '_blank');
    } else {
      console.log('Opening lightbox at index:', index); // Debugging log
      setIndex(index);
    }
  };

  const handleLightboxClose = () => {
    console.log('Closing lightbox'); // Debugging log
    setIndex(-1);
  };

  return (
    <>
      <Helmet>
        <title>Gallery - {siteName}</title>
        <meta name="description" content={siteDescription} />
        <meta name="keywords" content={siteKeywords} />
      </Helmet>
      <div className="bg-brand-light min-h-screen p-6 md:p-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-brand-dark">Gallery</h1>
          <p className="text-lg text-brand-text mt-4">
            Dive into the vibrant moments from our academy's events, tournaments, and training sessions.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-8 space-x-4">
          {['all', 'image', 'video', 'youtube'].map((type) => (
            <button
              key={type}              className={`px-6 py-2 rounded-full font-semibold text-sm ${
                filter === type
                  ? 'bg-brand-primary text-white'
                  : 'bg-brand-light text-brand-text hover:bg-brand-secondary hover:text-white'
              } transition duration-300`}
              onClick={() => setFilter(type)}
            >
              {type === 'all' ? 'All' : type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        {/* Media Sliders */}
        {paginatedFolders.map((folder, idx) => (
          <div key={idx} className="mb-12">
            <h2 className="text-3xl font-bold text-brand-dark mb-6">{folder}</h2>
            <Slider {...sliderSettings}>
              {groupedMedia[folder].map((item, idx) => (
                <div
                  key={idx}
                  className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group mx-2"
                  onClick={() => handleLightboxOpen(media.indexOf(item))}
                >
                  {item.type === 'image' ? (
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : item.type === 'video' ? (
                    <video
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
                      controls
                    />
                  ) : (
                    <iframe
                      src={item.src}
                      title={item.alt}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  )}
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white font-semibold text-lg">{item.alt}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        ))}

        {/* Pagination */}
        <div className="flex justify-center mt-8">          <button
            className="px-4 py-2 mx-1 rounded-full bg-brand-light text-brand-text hover:bg-brand-secondary hover:text-white transition duration-300"
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}              className={`px-4 py-2 mx-1 rounded-full ${
                currentPage === i + 1
                  ? 'bg-brand-primary text-white'
                  : 'bg-brand-light text-brand-text hover:bg-brand-secondary hover:text-white'
              } transition duration-300`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}          <button
            className="px-4 py-2 mx-1 rounded-full bg-brand-light text-brand-text hover:bg-brand-secondary hover:text-white transition duration-300"
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>

        {/* Lightbox */}
        <Lightbox
          open={index >= 0}
          index={index}
          close={handleLightboxClose}
          slides={slides.map((slide) => ({
            src: slide.src,
            type: slide.type,
            alt: slide.alt,
            content: slide.type === 'youtube' ? (
              <div className="w-full h-full flex items-center justify-center">
                <iframe
                  src={slide.src}
                  title={slide.alt}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ) : slide.type === 'video' ? (
              <div className="w-full h-full flex items-center justify-center">
                <video
                  src={slide.src}
                  className="w-full h-full"
                  controls
                ></video>
              </div>
            ) : (
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
            ),
          }))}
        />
      </div>
    </>
  );
};

export default Gallery;