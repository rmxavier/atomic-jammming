import React from "react";
import { LogoA, FooterA } from "../../components";

function LoggedOutTemplate({ children }) {
  return (
    <>
      <LogoA />
      { children }
      <FooterA />
    </>
  );
}

export default LoggedOutTemplate;