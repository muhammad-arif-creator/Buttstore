import React from "react";
import { Link } from "react-router-dom";
import styles from "./products.module.css";
import { useSelector } from "react-redux";
import Spinner from "../Spinner/Spinner";
import { Link } from "react-router-dom";

const Product = (props) => {
  const productItems = useSelector((state) =>
    state.Products.productItems.filter((p) => p.category === props.category)
  );

  console.log(productItems);

  let prod = null;
  if (productItems.length === 0) {
    prod = <Spinner></Spinner>;
  }

  if (productItems.length >= 1) {
    prod =
      productItems &&

        productItems.map((product, index) => {
          return (
            <div className="col-md-4 col-6 product-div" key={index}>
              <Link to={{pathname:`/detail-page/${product.id}`}}>
                <div className={`card py-4 ${styles.product}`}>
                  <div className={styles.productImage}>
                    <img
                     src={product.image}
                      className={`img-fluid ${styles.cardImgTop}`}
                      alt={product.image}
                    />
                  </div>
                  <div className="card-body text-center pb-0">
                    <h6 className={`text-uppercase mb-3 ${styles.cardTitle}`}>
                      {product.title}
                    </h6>
                    <p className={`card-text mb-1 ${styles.cardText}`}>
                      {product.description}
                    </p>
                    <span className={styles.productPrize}> ${product.price}</span>
                  </div>
                </div>
              </Link>

      productItems.slice(0, 4).map((product, index) => {
        return (
          <div className="col-md-3 col-6 product-div" key={index}>
            <div className={`card py-4 ${styles.product}`}>
              <div className={styles.productImage}>
                <img
                  src={product.image}
                  className={`img-fluid ${styles.cardImgTop}`}
                  alt={product.image}
                />
              </div>
              <div className={styles.viewDetail}>
                <Link to="">vieW detail</Link>
              </div>
              <div className="card-body text-center pb-0 px-0">
                <h6 className={`text-uppercase mb-1 ${styles.cardTitle}`}>
                  {product.title}
                </h6>
                <p className={styles.cardText}> {product.description}</p>
                <div className={styles.cardBottom}>
                  <span className={styles.productPrize}> ${product.price}</span>
                  <button className={`btn ${styles.btnCart}`}>
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      });
  }

  return <div className={`row ${styles.productRow}`}>{prod}</div>;
};

export default Product;
