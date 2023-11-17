import React, { useState } from "react";
import PropTypes from 'prop-types';

import SlideshowStyled from './style';

function Slideshow({ pictureArray, pictureAlt }) {

  const [currentPicture, setCurrentPicture] = useState(0);

  function previousPicture() {
    setCurrentPicture((prevIndex) => (prevIndex === 0 ? pictureArray.length - 1 : prevIndex - 1));
  }

  function nextPicture() {
    setCurrentPicture((prevIndex) => (prevIndex === pictureArray.length - 1 ? 0 : prevIndex + 1));
  }

  return (
    <SlideshowStyled role="region" aria-label="Carousel principal">
      <img src={pictureArray[currentPicture]} alt={pictureAlt} className="slideshow__picture" />
      <div className={pictureArray.length === 1 ? 'hide' : ''}>
        <button className="slideshow__leftArrow" onClick={previousPicture}>
          <img src='../Pictures/FlecheVersLaGauche.png' alt="Fleche vers la gauche" className="slideshow__leftArrow--Desktop" />
          <img src='../Pictures/FlecheVersLaGaucheMobile.png' alt="Fleche vers la gauche" className="slideshow__leftArrow--Mobile" />
        </button>
        <p >{currentPicture + 1} / {pictureArray.length} </p>
        <button className="slideshow__rightArrow" onClick={nextPicture}>
          <img src='../Pictures/FlecheVersLaDroiteMobile.png' alt="Fleche vers la droite" className="slideshow__rightArrow--Mobile" />
          <img src='../Pictures/FlecheVersLaDroite.png' alt="Fleche vers la droite" className="slideshow__leftArrow--Desktop" />
        </button>
      </div>
    </SlideshowStyled >
  );
}

Slideshow.propTypes = {
  pictureArray: PropTypes.array,
  pictureAlt: PropTypes.string
};

export default Slideshow;