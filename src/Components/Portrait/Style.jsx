import styled from 'styled-components';
import colors from '../../Utils/Colors';
import variables from '../../Utils/Variables';

const HostPortraitStyle = styled.div`

  display: flex;
  align-items: center;
  color: ${colors.primary};

  h3 {
    padding-right: 10px;
    font-size: ${variables.fSize18};
    font-weight: 500;
    line-height: 26px;
    text-align: right;
    margin: 0;
    }

  img {
    height: 64px;
    width: 64px;
    border-radius: 50%;
  }

  /* Version mobile */
  @media only screen and (max-width: 767px) {

    h3 {
      font-size: 12px;
      line-height: 17.112px;
      }

    img {
      height: 32px;
      width: 32px;
    }
  }
`;

export default HostPortraitStyle;
