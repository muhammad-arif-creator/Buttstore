import React from "react";
import Checkout from "../components/Checkout";
import Hoc from "../components/HOC/Hoc";

const CheckOutPage = () => {
  return (
      <Hoc>
          <Checkout/>
      </Hoc>
  );
};
export default CheckOutPage;
