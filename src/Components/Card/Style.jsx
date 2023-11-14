import styled from 'styled-components';
import colors from '../../Utils/Colors';
import variables from '../../Utils/Variables';
import { Link } from 'react-router-dom';

const GalleryCardStyle = styled(Link)`

  display: flex;
  justify-content: center;
  align-items: center;
  width: ${variables.w100};
  height: 340px;
  border-radius: 10px;
  position: relative;

  div {
    position: absolute;
    top: 0;
    left: 0;
    width: ${variables.w100};
    height: ${variables.w100};
    border-radius: 10px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(0, 0, 0, 0.50) ${variables.w100} );
    }

  img {
    width: ${variables.w100};
    height: ${variables.w100};
    border-radius: 10px;
    object-fit: cover;
  }

  p {
    position: absolute;
    bottom: 0;
    left: 6%;
    width: 60%;
    font-size: ${variables.fSize18};
    font-style: normal;
    font-weight: 500;
    line-height: 142.6%;
    z-index: 1;
    color: ${colors.white};
  }
  
  @media only screen and (max-width: 767px) {
    width: ${variables.w100};
    height: 255px;

    img {
      width: ${variables.w100};
      height: ${variables.w100};
    }
  }
`;

export default GalleryCardStyle;
