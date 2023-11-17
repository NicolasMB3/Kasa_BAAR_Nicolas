import React, { useContext } from "react";
import PresentationHostStyle from "./style.jsx";
import HostPortrait from '../Portrait/index.jsx';
import Rating from '../Notation/index.jsx';
import { MycontextFromHousingPageForPresentation } from '../../Pages/Housing/index.jsx';

function PresentationHost() {

  const PresentationDatasFromContext = useContext(MycontextFromHousingPageForPresentation);

  return (
    <PresentationHostStyle className='presentation__host'>
      <HostPortrait hostName={PresentationDatasFromContext.hostName} hostPicture={PresentationDatasFromContext.hostPicture} />
      <Rating rating={PresentationDatasFromContext.rating} />
    </PresentationHostStyle >
  );
}

export default PresentationHost;