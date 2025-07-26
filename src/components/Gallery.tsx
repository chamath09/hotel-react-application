import React, { useState, useEffect } from 'react';
import heroImage from '../assets/images/heroImage.jpg';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Gallery: React.FC = () => {
  // Using the same image for demo purposes - in a real app, you'd have multiple images
  const images = [
    { id: 1, src: heroImage, alt: "Hotel Lobby", title: "Elegant Lobby" },
    { id: 2, src: heroImage, alt: "Hotel Room", title: "Luxury Suite" },
    { id: 3, src: heroImage, alt: "Hotel Restaurant", title: "Fine Dining" },
    { id: 4, src: heroImage, alt: "Hotel Pool", title: "Infinity Pool" },
    { id: 5, src: heroImage, alt: "Hotel Spa", title: "Wellness Center" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="min-h-screen bg-[#2d333a] text-white">

  {/* Hero Section */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img
          src={heroImage}
          alt="Contact Us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#2d333a]/80 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
             Our <span className="text-[#f7ca09]">Gallery</span>
          </h1>
        </div>
      </section>
      
      <section className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-12">
          {/* <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-[#f7ca09]">Gallery</span>
          </h2> */}
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Take a virtual tour of our stunning facilities and discover the perfect blend 
            of comfort, elegance, and world-class service.
          </p>
        </div>

        {/* Image Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Image */}
          <div className="relative h-96 md:h-[500px] rounded-lg shadow-lg overflow-hidden bg-[#3c454c]">
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-[#2d333a]/60 flex items-end">
              <div className="p-6 w-full">
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {images[currentIndex].title}
                </h3>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#2d333a] bg-opacity-80 hover:bg-[#f7ca09] hover:text-[#2d333a] text-white p-3 rounded-full transition-all duration-200"
            aria-label="Previous image"
          >
            <FaChevronLeft className="text-xl" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#2d333a] bg-opacity-80 hover:bg-[#f7ca09] hover:text-[#2d333a] text-white p-3 rounded-full transition-all duration-200"
            aria-label="Next image"
          >
            <FaChevronRight className="text-xl" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-[#f7ca09]'
                    : 'bg-gray-600 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Image Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-[#f7ca09] text-center mb-8">
            More Views
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div
                key={image.id}
                className="relative group cursor-pointer rounded-lg shadow-lg overflow-hidden bg-[#3c454c]"
                onClick={() => goToSlide(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-32 md:h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#2d333a]/40 group-hover:bg-[#f7ca09]/20 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {image.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery; 