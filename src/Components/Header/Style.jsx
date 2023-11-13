import styled from 'styled-components';

const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 40px 7% 0 7%;

  nav {
    display: flex;
    align-items: center;
    width: 27%;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 142.6%;
    justify-content: flex-end;
    gap: 45px;
  }

  /* Version tablette */
  @media only screen and (max-width: 992px) {
    nav {
      width: auto;
      gap: 10px;
    }
  }

  /* Version mobile */
  @media only screen and (max-width: 767px) {
    padding: 20px 5% 0 5%;

    nav {
      font-size: 12px;
    }
  }
`;

export default HeaderStyle;
