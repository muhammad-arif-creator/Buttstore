import React, { useEffect } from "react";
import Product from "../products/product";
import styles from "./ProductListing.module.css";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import allActions from "../../redux/actions";

const ProductListing = () => {
  let params = useParams();
  console.log(params);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(allActions.FetchProductAction.fetchProducts(params.category));
  }, [dispatch]);

  return (
    <div className={`container-fluid ${styles.ProductListing}`}>
      <Product category={params.category} />
    </div>
  );
};

export default ProductListing;
