import styled from 'styled-components';
import colors from '../../Utils/Colors';

const DropdownStyle = styled.div`

  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;

  .dropdown__title {
    display: flex;
    height: 47px;
    z-index: 1;

    h2 {
      display: flex;
      align-items: center;
      box-sizing: border-box;
      width: 100%;
      margin: 0px;
      padding-left: 10px;
      border-radius: 10px 0 0 10px;
      background-color: ${colors.primary};
      color: ${colors.white};
      font-size: 24px;
      font-weight: 500;
      line-height: 34px;
    }

    button {
      width: fit-content;
      border: 0;
      border-radius: 0 10px 10px 0;
      background-color: ${colors.primary};
      color: ${colors.white};
      padding-right: 12px;
      cursor: pointer;
    }
  }

  .dropdown__title--housing h2 {
    font-size: 18px;
    line-height: 25.67px
  }

  .dropdown__datas {
    box-sizing: border-box;
    height: auto;
    padding: 40px 20px;
    border-radius: 0 0 10px 10px;
    color: ${colors.primary};
    background-color: ${colors.secondary};
    font-size: 24px;
    line-height: 34px;
    position: relative;
    top: -8px;
    z-index: 0;

    p {
      margin: 0;
    }
    
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
  }

  .dropdown__datas--housing {
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
  }

  /* Version mobile */
  @media only screen and (max-width: 767px) {

      width: 100%;
    
      .dropdown__title {
        height : 30px;
    
        h2 {
          font-size: 13px;
          line-height: 18.54px;
        }
      }

      .dropdown__datas {
        padding: 18px 11px 40px 11px;
        font-size: 12px;
        line-height: 17px;
      }
    }
`;

export default DropdownStyle;
