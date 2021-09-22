import React, { useState, useEffect } from "react";
import Product from "../products/product";
import styles from "./categories.module.css";

const Categories = () => {
  const [Categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setCategories(json));
  }, []);
  return (
    <div className={styles.categoriesWrapper}>
      {Categories.map((category, index) => {
        return (
          <section className={styles.categorySection} key={index}>
            <h1 className="text-uppercase ">{category}</h1>
            <Product category={category} />
          </section>
        );
      })}
    </div>
  );
};

export default Categories;
