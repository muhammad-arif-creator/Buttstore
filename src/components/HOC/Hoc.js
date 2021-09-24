import React from "react";
import Nav from "../Navbar/Nav";
import Footer from "../footer/Footer";
import Aux from "./Hoc-Aux";

 const Hoc = (props) => {
    return (
        <Aux>
             <Nav></Nav>
            {props.children}
            <Footer></Footer>
        </Aux>
    )
}

export default Hoc;
