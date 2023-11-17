import React from "react";
import GalleryStyle from "./style.jsx";
import GalleryCard from "../Card/index.jsx";

function Gallery() {
  return (
    <GalleryStyle className="gallery__home">
      <GalleryCard />
    </GalleryStyle>
  );
}

export default Gallery;