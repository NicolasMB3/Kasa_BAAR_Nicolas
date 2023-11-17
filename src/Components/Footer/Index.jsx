import React from "react";
import Logo from '../Logo/index.jsx'
import FooterStyle from "./style.jsx";

function Footer() {
  return (
    <FooterStyle>
      <Logo className="footer__logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </FooterStyle>
  );
}

export default Footer;