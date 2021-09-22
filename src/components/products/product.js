import React, { useState, useEffect } from "react";
import styles from "./products.module.css";

const Product = (props) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/" + props.category)
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        // console.log(json);
      });
  }, []);

  return (
    <div className="row product-row">
      {console.log(products)}
      {products &&
        products.map((product, index) => {
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
