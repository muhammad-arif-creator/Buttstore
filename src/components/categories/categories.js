import React, { useEffect } from "react";
import Product from "../products/product";
import styles from "./categories.module.css";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../redux/actions";
import Spinner from "../Spinner/Spinner";
import { Link } from "react-router-dom";

const Categories = () => {
  const dispatch = useDispatch();
  const categoriesItems = useSelector(
    (state) => state.Categories.categoriesItems
  );
  useEffect(() => {
    dispatch(allActions.FetchProductAction.fetchProducts());
    dispatch(allActions.FetchCategoriesAction.fetchCategories());
  }, [dispatch]);

  let categories = null;
  if (categoriesItems.length === 0) {
    console.log("in spinner");
    categories = <Spinner></Spinner>;
  }

  if (categoriesItems.length >= 1) {
    categories = categoriesItems.map((category, index) => {
      return (
        <section className={`container ${styles.categorySection}`} key={index}>
          <h3 className={`text-uppercase ${styles.categoryTitle}`}>
            {category}
            <span>
              <Link>view all products</Link>
            </span>
          </h3>
          <Product category={category} />
        </section>
      );
    });
  }
  return <div className={styles.categoriesWrapper}>{categories}</div>;
};

export default Categories;
