import styled from 'styled-components';
import colors from '../../Utils/Colors';

const LogoStyled = styled.div`

  &.header__logo {
    fill: ${colors.primary};
    width: 210.322px;
    height: 68px;
    flex-shrink: 0;

  /* Version mobile */
  @media only screen and (max-width: 767px) {
    width: 145px;
    height: 47px;
    }
  }
  

  /* styles spécifiques à la classe "footer__logo" */
  &.footer__logo {
    fill: ${colors.white};
    width: 122px;
    height: 39.444px;
  }
`;

export default LogoStyled;