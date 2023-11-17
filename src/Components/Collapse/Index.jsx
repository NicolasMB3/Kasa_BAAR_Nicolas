import React, { useContext } from "react";
import CollapseStyle from "./style.jsx";
import PropTypes from "prop-types";

import Dropdown from "../Dropdown/index.jsx";
import { MyContextFromAboutPageForCollapse } from '../../Pages/About/index';
import { MyContextFromHousingPageForCollapse } from "../../Pages/Housing/index.jsx";

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