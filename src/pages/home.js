import React from "react";
import Home from "../components/home";
import Hoc from "../components/HOC/Hoc";

const HomePage = () => {
  return (
    <Hoc>
      <Home />
    </Hoc>
  );
};
export default HomePage;
