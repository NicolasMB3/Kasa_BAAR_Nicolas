import React, { useContext } from "react";
import PresentationHostStyle from "./Style.jsx";
import HostPortrait from '../HostPortrait/Index.jsx';
import Rating from '../Rating/Index.jsx';
import { MycontextFromHousingPageForPresentation } from '../../Pages/Housing';

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