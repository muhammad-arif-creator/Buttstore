import React from 'react';
import styles from '../cart/cart.module.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import allActions from '../../redux/actions';
const Cart = () => {
  const cart=useSelector((state)=>state.Cart);
  const dispatch = useDispatch()
  console.log(cart);
 
  const handleRemove=(product,index)=>{
    let payload={product:product, index:index};
    console.log(payload);
    dispatch(allActions.CartAction.removeFromCart(payload));
  }

  const handleIncrement=(index)=>{
    let payload={index:index};
    console.log(payload);
    dispatch(allActions.CartAction.increaseQuantity(payload));
  }
  
  return (
    <div className={styles.cart}>
      <div className={styles.cartHeader}>
        <h1>Your Cart</h1>
        <span>Continue Shopping</span>
      </div>
      
        <table>
          <thead className={styles.tableHeader}>
            <tr>
              <th className={styles.product}>Product</th>
              <th className={styles.price}>Price</th>
              <th className={styles.quantity}>Quantity</th>
              <th className={styles.total}>Total</th>
            </tr>
          </thead>
          <tbody>
           
            {cart.cartItems.map((product,index)=>{
              
              return(
                <tr>
                <td className={styles.product}>
                  <div className={styles.productImage}>
                   <img src={product.image} alt={product.image} />
                  </div>
                  <div className={styles.productText}>
                    <span >{product.title}</span>
                    <button onClick={()=>{handleRemove(product,index)}}>Remove</button>
                  </div>
                </td>
                <td className={styles.prrice}>
                  <span>${product.price}</span>
                </td>
                <td className={styles.quantity}>
                  <div className={styles.itemsCount}>
                    <button>-</button>
                    {/* <input type="text"></input> */}
                    <input type="number" value={product.quantity}></input>
                    <button onClick={()=>{handleIncrement(index)}}>+</button>
                  </div>
                </td>
                <td className={styles.total}>
                  <span>${product.price*product.quantity}</span>
                </td>
              </tr>
              )

            })}
          </tbody>
        </table>
        <div className={styles.cartFooter}>
          <div className={styles.cartSubtotal}>
            <span>Subtotal</span>
            <span>${cart.price}</span>
          </div>
          <div className={styles.cartShippingRate}>
            <span>Tax included and shipping calculated at checkout</span>
          </div>
          <div className={styles.cartButtons}>
            <button className={styles.checkOutBtn}>CHECK OUT</button>
            <button className={styles.payPalBtn}>PayPal</button>
          </div>
        </div>
     
    </div>
  )
}

export default Cart
