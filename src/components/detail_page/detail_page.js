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
  const loading= useSelector(
    (state)=>state.ProductsDetails.loading
  )
  useEffect(() => {
    dispatch(
      allActions.fetchProductDetailsAction.fetchProductDetails(params.id),
    )
  }, [dispatch,params.id])
  let quantity=0;
  const handleAddToCart=()=>{
    let payload={product:productDetails, qty:quantity};
    dispatch(allActions.CartAction.addToCart(payload));
  }
 
  const getQuantity=(e)=>{
    quantity=e.target.value;
  }

  let disabled=false;

  let prodDetail = null
  if (loading) {
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
              
            </div>
          </div>
          <div className="col-md-5">
            <h2>{productDetails.title}</h2>
            <h4>${productDetails.price}</h4>
            <h5>
              Rating:   {productDetails.rating.rate} <span></span>
            </h5>
            <span>Tax included for Pakistan</span>
            <div>
              <div className="form-group">
                <label>Quantity</label>
                <input className="form-control" type="number" onChange={(e)=>{getQuantity(e)}} />
              </div>
              <div className={styles.buttons}>
                {disabled?(<button className={styles.FirstBtn} onClick={handleAddToCart} disabled>ADD TO CART</button>):(<button className={styles.FirstBtn} onClick={handleAddToCart} >ADD TO CART</button>)}
                <button className={styles.SecondBtn}>BUY IT NOW</button>
              </div>
            </div>
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