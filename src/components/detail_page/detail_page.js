import React, { useEffect } from 'react'
import styles from './detail_page.module.css'
import Spinner from '../Spinner/Spinner'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import allActions from '../../redux/actions'

const DetailPage = () => {
  let params = useParams()
  const dispatch = useDispatch()
  const productDetails = useSelector(
    (state) => state.ProductsDetails.productDetails,
  )
  useEffect(() => {
    dispatch(
      allActions.fetchProductDetailsAction.fetchProductDetails(params.id),
    )
  }, [dispatch])

  let prodDetail = null
  if (Object.entries(productDetails).length === 0) {
    prodDetail = <Spinner></Spinner>
  } else {
    prodDetail = (
      <div className={styles.container}>
        <div className="row justify-content-between">
          <div className="col-md-7">
            <div className={styles.Detail_page_images}>
              <div className={styles.Detail_image}>
                <img src={productDetails.image} alt="product img"></img>
              </div>
              <div className={styles.Detail_image}></div>
            </div>
          </div>
          <div className="col-md-5">
            <h2>{productDetails.title}</h2>
            <h4>${productDetails.price}</h4>
            <h5>
              Rating:{productDetails.rating.rate} <span></span>
            </h5>
            <span>Tax included for Pakistan</span>
            <form>
              <div className="form-group">
                <label>Quantity</label>
                <input className="form-control" type="number" />
              </div>
              <div className={styles.buttons}>
                <button className={styles.FirstBtn}>ADD TO CART</button>
                <button className={styles.SecondBtn}>BUY IT NOW</button>
              </div>
            </form>
            <h6>Details</h6>
            <p className={styles.details}>{productDetails.description}</p>
          </div>
        </div>
      </div>
    )
  }
  return <div className={styles.Detail_page}>{prodDetail}</div>
}

export default DetailPage
