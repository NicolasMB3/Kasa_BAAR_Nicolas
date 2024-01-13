import styled from 'styled-components';
import colors from './Colors';

const Style = styled.div`

  list-style: none;
  font-family: Montserrat, 'Courier New', Courier, sans-serif;
  color: ${colors.primary};
  background-color: ${colors.white};
  width: 100%;

  main {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    height: auto;
    width: 100%;
    max-width: 1510px;
    margin-left: auto;
    margin-right: auto;
    min-height: 72vh;
  }

  a {
    text-decoration: none;
    color: ${colors.primary};
  }

  ::placeholder {
    color: ${colors.white};
  }

  @media only screen and (max-width : 992px) {
    max-width: 992px;
  }

  @media only screen and (max-width : 767px) {
    max-width: 767px;
  }

`;

export default Style;
