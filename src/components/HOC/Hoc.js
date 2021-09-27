import React from "react";
import Nav from "../Navbar";
import Footer from "../footer";
import Aux from "./Hoc-Aux";

const Hoc = (props) => {
  return (
    <Aux>
      <Nav></Nav>
      {props.children}
      <Footer></Footer>
    </Aux>
  );
};

export default Hoc;
