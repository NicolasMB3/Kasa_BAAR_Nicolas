import React, { useState } from "react";
import PropTypes from "prop-types";
import DropdownStyle from "./style.jsx";

function Dropdown({ page, title, text }) {

  const [isOpen, setIsOpen] = useState(false);

  return (

    <DropdownStyle className={`dropdown--${page}`}>
      <div className={`dropdown__title dropdown__title--${page}`}  aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <h2> {title} </h2>
        <button>
          {isOpen ?
            <img src='/Pictures/FlecheVersLeBas.png' alt="Flèche vers le bas"></img> :
            <img src='/Pictures/FlecheVersLeHaut.png' alt="Flèche vers le haut"></img>}
        </button>
      </div>

      {isOpen ?
        <div className={`dropdown__datas dropdown__datas--${page}`}>
          {typeof text === 'string' ?
            <p> {text} </p> :
            <ul>
              {text.map((item, index) =>
                <li key={`Dropdown-li-${index}`}> {item} </li>
              )}
            </ul>
          }
        </div> :
        <div></div>
      }
    </DropdownStyle >
  );
}

Dropdown.propTypes = {
  page: PropTypes.string,
  title: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
};

export default Dropdown;