import React, { useState } from "react";
import styles from "./Checkout.module.css";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../../redux/actions";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [user, setUser] = useState({
    email: "",
    firstName: "",
    lastName: "",
    company: "",
    address: "",
    aprtment: "",
    city: "",
    phone: "",
  });
  const cart = useSelector((state) => state.Cart);
  const dispatch = useDispatch();
  console.log(cart);

  const handelChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(allActions.chekoutAction.getUser(user));
  };

  return (
    <>
      <div className="container">
        <div className={styles.cartWrapper}>
          <div className={styles.cartLeft}>
            <div className={styles.checkoutForm}>
              <div className={styles.formData}>
                <div className={styles.contactInfo}>
                  <h3>Contact Information</h3>
                  <input
                    onChange={handelChange}
                    name="email"
                    type="text"
                    placeholder="Email or mobile phone  number"
                  ></input>

                  <h3>Shipping Address</h3>
                  <div className={styles.Name}>
                    <input
                      autoComplete={false}
                      onChange={handelChange}
                      name="firstName"
                      type="text"
                      placeholder="First Name"
                    ></input>
                    <input
                      onChange={handelChange}
                      name="lastName"
                      type="text"
                      placeholder="Last Name"
                    ></input>
                  </div>
                  <input
                    onChange={handelChange}
                    name="company"
                    type="text"
                    placeholder="Company"
                  ></input>
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    onChange={handelChange}
                  ></input>
                  <input
                    onChange={handelChange}
                    type="text"
                    name="aprtment"
                    placeholder="Apartment, suite, etc"
                  ></input>
                  <input
                    onChange={handelChange}
                    name="city"
                    type="text"
                    placeholder="City"
                  ></input>
                  <input
                    onChange={handelChange}
                    name="phone"
                    type="text"
                    placeholder="Phone"
                  ></input>

                  <div className={styles.shippingBtn}>
                    <button type="button" onClick={handleSubmit}>
                      <Link to="/Summary">Continue to Shipping</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.cartRight}>
            <table>
              <thead>
                {cart.cartItems.map((cartItem) => {
                  return (
                    <tr>
                      <th scope="col" colSpan="1">
                        <div className={styles.image}>
                          <div className={styles.thumbnail}>
                            <img
                              alt="Apricot Midi Skirt"
                              class="product-thumbnail__image"
                              src={cartItem.image}
                            />
                          </div>
                          <span
                            className="product-thumbnail__quantity"
                            aria-hidden="true"
                          >
                            {cartItem.quantity}
                          </span>
                        </div>
                      </th>
                      <th className={`pl-4 ${styles.second}`} scope="row">
                        <span>{cartItem.title}</span>
                        <span className={styles.small}>Small</span>
                      </th>
                      <td
                        scope="col"
                        colSpan="2"
                        className={`${styles.subTotal}`}
                      >
                        ${cartItem.price}
                      </td>
                    </tr>
                  );
                })}
              </thead>
              <tbody>
                <tr>
                  <td>Subtotal</td>
                  <td scope="col" colSpan="2" className={`${styles.subTotal}`}>
                    ${cart.price}
                  </td>
                </tr>
                <tr>
                  <td className="pt-0">Shipping</td>
                  <td
                    scope="col"
                    colSpan="2"
                    className={`pt-0 ${styles.subTotal}`}
                  >
                    calculated in next step
                  </td>
                </tr>
              </tbody>
              <tfoot className={styles.totalLineTableFooter}>
                <tr className={styles.totalLine}>
                  <th>
                    <span>Total</span>
                  </th>
                  <th scope="col" colSpan="2" className={`${styles.subTotal}`}>
                    ${cart.price}
                  </th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
