import React from "react";
import { Logo, Footer } from "../../components";

function LoggedOutTemplate({ children }) {
  return (
    <>
      <Logo />
      { children }
      <Footer />
    </>
  );
}

export default LoggedOutTemplate;