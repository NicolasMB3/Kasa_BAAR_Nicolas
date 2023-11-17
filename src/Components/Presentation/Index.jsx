import React from "react";
import PresentationStyle from "./style.jsx";

import PresentationLocation from '../PresentationLocation/index.jsx';
import PresentationHost from '../PresentationHost/index.jsx';

function Presentation() {

  return (
    <PresentationStyle className='presentationPart'>
      <PresentationLocation />
      <PresentationHost />
    </PresentationStyle >
  );
}

export default Presentation;