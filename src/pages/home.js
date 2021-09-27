import React from "react";
import Home from "../components/Home";
import Hoc from "../components/HOC/Hoc";

const HomePage = () => {
  return (
    <Hoc>
      <Home />
    </Hoc>
  );
};
export default HomePage;
