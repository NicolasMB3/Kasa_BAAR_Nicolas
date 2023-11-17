import React from "react";
import BannerStyle from "./style.jsx";
import PropTypes from "prop-types";

function Banner({ className, bannerText }) {
  return (
    <BannerStyle className={className}>
      <h1>{bannerText}</h1>
    </BannerStyle>
  );
}

Banner.propTypes = {
  className: PropTypes.string,
  bannerText: PropTypes.string
};

export default Banner;