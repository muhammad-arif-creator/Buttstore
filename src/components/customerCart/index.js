import React from 'react'
import styles from './CustomerCart.module.css'

const CustomerCart = () => {
  return (
    <>
        <div className="container">
            <div className={styles.cartWrapper}>
                <div className={styles.cartLeft}>
                     <div className={styles.summaryForm}>
                        <div className={styles.formData}>
                        <h2>Butt Store</h2>
                        <div className={styles.payPal}>
                            <span>Express Checkout</span>
                            <button type="button">PayPal</button>
                        </div>
                        <p className={styles.or}>or</p>
                        <div className={styles.contactInfo}>
                            <h3>Contact Information</h3>
                            <input
                            type="text"
                            placeholder="Email or mobile phone  number"
                            ></input>

                            <div className={styles.checkBox}>
                            <input type="checkbox"></input>
                            <span>Keep me up to date on news</span>
                            </div>
                            <h3>Shipping Address</h3>
                            <div className={styles.Name}>
                            <input type="text" placeholder="First Name"></input>
                            <input type="text" placeholder="Last Name"></input>
                            </div>
                            <input type="text" placeholder="Company (optional)"></input>
                            <input type="text" placeholder="Address"></input>
                            <input type="text" placeholder="Apartment, suite, etc"></input>
                            <input type="text" placeholder="City"></input>
                            <input type="text" placeholder="Phone"></input>
                            <div className={styles.checkBox}>
                            <input type="checkbox"></input>
                            <span>Save this for next time</span>
                            </div>
                            <div className={styles.shippingBtn}>
                            <button type="button">Continue to Shipping</button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className={styles.cartRight}>
                    <table>
                        <thead>
                            <tr>
                                <th scope="col" colSpan="1">
                                    <div className={styles.image}>
                                        <div className={styles.thumbnail}>
                                            <img alt="Apricot Midi Skirt" class="product-thumbnail__image" src="//cdn.shopify.com/s/files/1/0201/6542/7254/products/c39_small.jpg?v=1591285628" />
                                        </div>
                                        <span class="product-thumbnail__quantity" aria-hidden="true">1</span>
                                    </div>
                                </th>
                                <th className={`pl-4 ${styles.second}`} scope="row">
                                    <span>Apricot Midi Skirt</span>
                                    <span className={styles.small}>Small</span>
                                </th>
                                <td scope="col" colSpan="2" className={`${styles.subTotal}`}>$231.00</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                   Subtotal
                                </td>
                                <td scope="col" colSpan="2" className={`${styles.subTotal}`}>$231.00</td>
                            </tr>
                            <tr>
                                <td className="pt-0">
                                   Shipping
                                </td>
                                <td scope="col" colSpan="2" className={`pt-0 ${styles.subTotal}`}>calculated in next step</td>
                            </tr>
                        </tbody>
                        <tfoot class="total-line-table__footer">
                            <tr class="total-line">
                                <th>
                                    <span >Total</span>
                                </th>
                                <th scope="col" colSpan="2" className={`${styles.subTotal}`}>
                                $231.00
                                </th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    </>
  );
}

export default CustomerCart
