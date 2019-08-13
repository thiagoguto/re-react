import React from "react";
import FooterLinks from "./footer/FooterLinks";
import Assinatura from "./footer/Assinatura";

const Footer = () => {
  return (
    <footer className="bg-footer">
      <FooterLinks />
      <Assinatura />
    </footer>
  );
};
export default Footer;
