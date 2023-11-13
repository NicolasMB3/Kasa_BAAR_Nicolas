import React from "react";
import PresentationStyle from "./Style.jsx";

import PresentationLocation from '../PresentationLocation/Index.jsx';
import PresentationHost from '../PresentationHost/Index.jsx';

function Presentation() {

  return (
    <PresentationStyle className='presentationPart'>
      <PresentationLocation />
      <PresentationHost />
    </PresentationStyle >
  );
}

export default Presentation;