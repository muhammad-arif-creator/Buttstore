import React from "react";
import ProductListing from "../components/ProductListing/ProductListing";
import Hoc from "../components/HOC/Hoc";

const ProductListingPage = () => {
  return (
    <Hoc>
      <ProductListing/>
    </Hoc>
  );
};

export default ProductListingPage;
