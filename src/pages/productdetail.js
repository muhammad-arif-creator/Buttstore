import React from "react";
import DetailPage from "../components/Detail_page";
import Hoc from "../components/HOC/Hoc";

const ProductDetailPage = () => {
  return (
    <Hoc>
      <DetailPage />
    </Hoc>
  );
};

export default ProductDetailPage;
