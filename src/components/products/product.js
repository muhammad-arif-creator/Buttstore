import React from "react";
import { Link } from "react-router-dom";
import styles from "./products.module.css";
import { useSelector } from "react-redux";
import Spinner from "../Spinner/Spinner";

const Product = (props) => {
  const productItems = useSelector((state) =>
    state.Products.productItems.filter((p) => p.category === props.category)
  );

  let prod=null;
  if(productItems.length===0)
  { 
    prod=(<Spinner></Spinner>);
  }

  if(productItems.length>=1)
  { 
    prod=(
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
            </div>
          );
        })
    )
  }

  return (
    <div className="row product-row">
      {prod}
    </div>
  );
};

export default Product;
