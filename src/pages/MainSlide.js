import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

const slideImages = [
  '/images/MainSlide1.png',
  '/images/MainSlide2.png',
  '/images/MainSlide3.png',
  '/images/MainSlide4.png',
  '/images/MainSlide5.png',
  '/images/MainSlide6.png',
];

const MainSlide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide + 1) % slideImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToPreviousSlide = () => {
    setCurrentSlide(
      prevSlide => (prevSlide - 1 + slideImages.length) % slideImages.length
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide(prevSlide => (prevSlide + 1) % slideImages.length);
  };

  return (
    <div className="mainSlide">
      <img
        src={slideImages[currentSlide]}
        alt="mainSlide"
        className="mainPicture1"
      />

      <div className="icon">
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="backBtn"
          onClick={goToNextSlide}
        />
        <FontAwesomeIcon
          icon={faChevronRight}
          className="nextBtn"
          onClick={goToPreviousSlide}
        />
      </div>
    </div>
  );
};

export default MainSlide;
