// FILE: src/pages/Gallery.js
// ACTION: The component is now fully theme-aware, applying the 'aspirechess'
// glassy aesthetic to all sections, cards, and filters.

import React, { useState, useEffect } from 'react';
import SEO from '../../components/SEO';
import Slider from 'react-slick';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NextArrow, PrevArrow } from '../../components/CustomArrows';

const ITEMS_PER_PAGE = 8;

const Gallery = () => {

    const siteName = 'Kolkata Chess Academy';

    const [index, setIndex] = useState(-1);
    const [filter, setFilter] = useState('all');
    const [media, setMedia] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        async function fetchGallery() {
            try {
                const response = await fetch('/php/gallery.php');
                if (!response.ok) throw new Error('Network response was not ok');
                const gallery = await response.json();
                const formattedMedia = gallery.flatMap(folder =>
                    folder.files.map(file => ({ ...file, folder: folder.folder }))
                );
                setMedia(formattedMedia);
            } catch (error) {
                console.error('Error fetching gallery:', error);
            }
        }
        fetchGallery();
    }, []);

    const filteredMedia = media.filter(item => filter === 'all' || item.type === filter);
    const groupedMedia = filteredMedia.reduce((acc, item) => {
        if (!acc[item.folder]) acc[item.folder] = [];
        acc[item.folder].push(item);
        return acc;
    }, {});

    const totalPages = Math.ceil(Object.keys(groupedMedia).length / ITEMS_PER_PAGE);
    const paginatedFolders = Object.keys(groupedMedia).slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    // ...removed unused slides variable...

    const sliderSettings = {
        dots: true,
        infinite: false,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 640, settings: { slidesToShow: 1 } },
        ],
    };

    const handleLightboxOpen = (item) => {
        if (item.type === 'youtube') {
            window.open(item.src, '_blank');
        } else {
            const globalIndex = media.findIndex(m => m.src === item.src);
            setIndex(globalIndex);
        }
    };


    // KCA Theme Classes
    const pageClasses = "bg-brand-light min-h-screen";
    const titleClasses = "text-5xl font-extrabold text-brand-dark";
    const subtitleClasses = "text-lg text-brand-text mt-4";
    const folderTitleClasses = "text-3xl font-bold text-brand-dark mb-6";
    const filterButtonActiveClasses = "bg-brand-primary text-white";
    const filterButtonIdleClasses = "bg-brand-light text-brand-text hover:bg-brand-secondary hover:text-white";
    const paginationButtonActiveClasses = "bg-brand-primary text-white";
    const paginationButtonIdleClasses = "bg-brand-light text-brand-text hover:bg-brand-secondary hover:text-white";


    return (
        <>
                        <SEO
                                title={`Gallery - ${siteName}`}
                                description={`Explore the gallery of ${siteName}: photos and videos from our chess events, tournaments, and training sessions.`}
                                keywords={'Kolkata Chess Academy, gallery, chess events, chess photos, chess videos'}
                                image={'https://kolkatachessacademy.in/kca.png'}
                                url={'https://kolkatachessacademy.in/gallery'}
                                type="gallery"
                                canonical={'https://kolkatachessacademy.in/gallery'}
                                structuredData={{
                                    '@context': 'https://schema.org',
                                    '@type': 'ImageGallery',
                                    name: `${siteName} Gallery`,
                                    url: 'https://kolkatachessacademy.in/gallery',
                                    description: `Explore the gallery of ${siteName}: photos and videos from our chess events, tournaments, and training sessions.`
                                }}
                        />
            <div className={pageClasses}>
                 {/* Header */}
                <div className="text-center p-6 md:p-12 mb-12">
                    <h1 className={titleClasses}>Gallery</h1>
                    <p className={subtitleClasses}>
                        Dive into the vibrant moments from our academy's events, tournaments, and training sessions.
                    </p>
                </div>

                <div className="">
                    {/* Filter Buttons */}
                    <div className="flex justify-center mb-12 space-x-2 sm:space-x-4">
                        {['all', 'image', 'video', 'youtube'].map((type) => (
                            <button
                                key={type}
                                className={`px-4 py-2 rounded-full font-semibold text-sm transition duration-300 ${filter === type ? filterButtonActiveClasses : filterButtonIdleClasses}`}
                                onClick={() => setFilter(type)}
                            >
                                {type.charAt(0).toUpperCase() + type.slice(1)}
                            </button>
                        ))}
                    </div>

                    {/* Media Sliders */}
                    <div className="space-y-16">
                        {paginatedFolders.map((folder, idx) => (
                            <div key={idx}>
                                <h2 className={folderTitleClasses}>{folder}</h2>
                                <Slider {...sliderSettings}>
                                    {groupedMedia[folder].map((item, itemIdx) => (
                                        <div key={itemIdx} className="px-2">
                                            <div
                                                className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group h-56"
                                                onClick={() => handleLightboxOpen(item)}
                                            >
                                                <img
                                                    src={item.type === 'image' ? item.src : `https://img.youtube.com/vi/${item.src.split('/').pop()}/hqdefault.jpg`}
                                                    alt={item.alt}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                                />
                                                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    <p className="text-white font-semibold text-lg text-center px-2">{item.alt}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center mt-12 pb-12">
                        <button
                            className={`px-4 py-2 mx-1 rounded-full font-semibold transition duration-300 ${paginationButtonIdleClasses}`}
                            onClick={() => setCurrentPage(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </button>
                        {Array.from({ length: totalPages }, (_, i) => (
                            <button
                                key={i}
                                className={`px-4 py-2 mx-1 rounded-full font-semibold transition duration-300 ${currentPage === i + 1 ? paginationButtonActiveClasses : paginationButtonIdleClasses}`}
                                onClick={() => setCurrentPage(i + 1)}
                            >
                                {i + 1}
                            </button>
                        ))}
                        <button
                            className={`px-4 py-2 mx-1 rounded-full font-semibold transition duration-300 ${paginationButtonIdleClasses}`}
                            onClick={() => setCurrentPage(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>

            {/* Lightbox */}
            <Lightbox
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                slides={media.map(item => ({ src: item.src }))}
            />
        </>
    );
};

export default Gallery;
