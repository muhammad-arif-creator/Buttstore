import React, { useState, useEffect } from 'react'
import Product from '../products/product'
import styles from './categories.module.css'
import { useDispatch, useSelector } from 'react-redux'
import allActions from '../../redux/actions'

const Categories = () => {
  const dispatch = useDispatch()
  const categoriesItems = useSelector(
    (state) => state.Categories.categoriesItems,
  )
  useEffect(() => {
    dispatch(allActions.FetchProductAction.fetchProducts())
    dispatch(allActions.FetchCategoriesAction.fetchCategories())
  }, [])
  return (
    <div className={styles.categoriesWrapper}>
      {categoriesItems.map((category, index) => {
        return (
          <section className={styles.categorySection} key={index}>
            <h1 className="text-uppercase ">{category}</h1>
            <Product category={category} />
          </section>
        )
      })}
    </div>
  )
}

export default Categories
