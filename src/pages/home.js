import React from "react";
import Home from "../components/home/home";
import Hoc from "../components/HOC/Hoc";

const HomePage = () => {
  return (
    <Hoc>
      <Home />
    </Hoc>
  );
};
export default HomePage;
