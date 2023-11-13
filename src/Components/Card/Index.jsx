import React from "react";
import GalleryCardStyle from "../Card/Style.jsx";
import datas from '../../Ressources/housings.json';

function GalleryCard() {

  const dataArrayForCards = datas.map(item => ({
    id: item.id,
    title: item.title,
    image: item.cover
  }));

  return (
    <>
      {dataArrayForCards.map(card => (
        <GalleryCardStyle key={`card-${card.id}`} to={`../housing/${card.id}`} >
          <p>{card.title}</p>
          <img src={card.image} alt={card.title} />
          <div></div>
        </GalleryCardStyle >
      ))
      }
    </>
  );
}

export default GalleryCard;