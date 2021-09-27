import React from "react";
import Cart from "../components/cart";
import Hoc from "../components/HOC/Hoc";

const CartPage = () => {
  return (
    <Hoc>
      <Cart />
    </Hoc>
  );
};
export default CartPage;
