import React, { useEffect } from "react";
import styles from "./products.module.css";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../../redux/actions";

const Product = (props) => {
  const dispatch = useDispatch();
  const productItems = useSelector((state) =>
    state.Products.productItems.filter((p) => p.category === props.category)
  );

  return (
    <div className="row product-row">
      {productItems &&
        productItems.map((product, index) => {
          return (
            <div className="col-md-4 col-6 product-div" key={index}>
              <div className={`card py-4 ${styles.product}`}>
                <div className={styles.productImage}>
                  <img
                    src={product.image}
                    className={`img-fluid ${styles.cardImgTop}`}
                    alt="product image"
                  />
                </div>
                <div className="card-body text-center pb-0">
                  <h6 className={`text-uppercase mb-3 ${styles.cardTitle}`}>
                    {product.title}
                  </h6>
                  <p className={`card-text mb-1 ${styles.cardText}`}>
                    {product.description}
                  </p>
                  <span className={styles.productPrize}> {product.price}</span>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Product;
