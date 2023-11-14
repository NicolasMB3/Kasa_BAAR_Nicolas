import styled from 'styled-components';
import variables from '../../Utils/Variables';

const RatingStyle = styled.div`

  display: flex;
  align-items: center;
  height: 36px;
  width: auto;

  img {
    height: 24px;
    width: 24px;
  }

  /* Version mobile */
  @media only screen and (max-width: 767px) {
    height: ${variables.fSize18};

    img {
      height: 13px;
      width: 13px;
    }
  }
`;

export default RatingStyle;
