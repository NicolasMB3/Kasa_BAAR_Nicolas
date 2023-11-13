import React, { useContext } from "react";
import CollapseStyle from "./Style.jsx";
import PropTypes from "prop-types";

{/*Components*/ }
import Dropdown from "../Dropdown/Index.jsx";

{/*Contextes des provider*/ }
import { MyContextFromAboutPageForCollapse } from '../../Pages/About/index';
import { MyContextFromHousingPageForCollapse } from "../../Pages/Housing";

function Collapse({ page }) {

  const contextData = page === "about" ? useContext(MyContextFromAboutPageForCollapse) : useContext(MyContextFromHousingPageForCollapse);

  return (

    <CollapseStyle className={`${contextData[0].className}`} >

      {contextData.map((item, index) => (
        <Dropdown
          page={page}
          key={`Collapse-${index}`}
          title={item.title}
          text={item.text}
        />
      ))
      }

    </ CollapseStyle >
  );
}

Collapse.propTypes = {
  page: PropTypes.string
};

export default Collapse;