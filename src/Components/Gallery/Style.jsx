import styled from 'styled-components';
import colors from '../../Utils/Colors';

const GalleryStyle = styled.section`

  display: grid; 
  grid-template-columns: 1fr 1fr 1fr; 
  grid-template-rows: auto; 
  box-sizing: border-box;
  height: auto;
  width: 86%;
  border-radius: 25px;
  background: #F6F6F6;
  margin: 43px 0 43px 0;
  padding: 56px 50px 56px 50px;
  row-gap: 50px;
  column-gap: 50px;
  
  @media only screen and (max-width: 992px) {
    padding: 56px 10px 56px 10px;
    grid-template-columns: 1fr 1fr; 
    grid-template-rows: auto; 
  }

  @media only screen and (max-width: 767px) {
    border-radius: 0;
    grid-template-columns: 1fr; 
    background-color: ${colors.white};
    padding: 0;
    width: 90%;
  }
`;

export default GalleryStyle;
