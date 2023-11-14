import styled from 'styled-components';
import colors from '../../Utils/Colors';
import variables from '../../Utils/Variables';

const TagStyle = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 115px;
  height: 25px;
  background-color: ${colors.primary};
  color: ${colors.white};
  padding: 0 10px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;

/* Version mobile */
  @media only screen and (max-width: 767px) {
    min-width: 84px;
    font-size: 10px;
    height: ${variables.fSize18};

    p {
      height: ${variables.fSize18};
    }
  }

`;

export default TagStyle;
