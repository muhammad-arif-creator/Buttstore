import React from "react";
import Summary from "../components/Summary";
import Hoc from "../components/HOC/Hoc";

const SummaryPage = () => {
  return (
    <Hoc>
      <Summary />
    </Hoc>
  );
};
export default SummaryPage;
