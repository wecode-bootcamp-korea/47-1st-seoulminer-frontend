import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
  faCircle,
} from '@fortawesome/free-solid-svg-icons';
import './Main.scss';

const Main = () => {
  return (
    <div className="main">
      <div className="mainSlide">
        <Link to="">
          <img
            src="/images/MainSlide.png"
            alt="mainSlide"
            className="mainPicture"
          />
          <div className="icons">
            <FontAwesomeIcon icon={faChevronLeft} />
            <FontAwesomeIcon icon={faChevronRight} className="rightBtn" />
          </div>
          <div className="dots">
            <FontAwesomeIcon icon={faCircle} />
            <FontAwesomeIcon icon={faCircle} className="dot" />
            <FontAwesomeIcon icon={faCircle} className="dot" />
            <FontAwesomeIcon icon={faCircle} className="dot" />
            <FontAwesomeIcon icon={faCircle} className="dot" />
          </div>
        </Link>
        <div className="firstBanner">
          <img
            className="firstMainBanner"
            src="/images/firstBanner.jpg"
            alt="firstBanner"
          />
        </div>
        <div className="recommendItem" />
      </div>
    </div>
  );
};

export default Main;
