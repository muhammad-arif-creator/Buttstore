import React, { useState, useEffect } from "react";
import styles from "./Nav.module.css";
import "font-awesome/css/font-awesome.min.css";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Nav = () => {
  const cartLength = useSelector((state) => state.Cart.cartItems.length);
  const [headerbg, setHeaderBg] = useState("transparent");

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  }, []);

  const listenScrollEvent = (e) => {
    if (window.scrollY > 680) {
      setHeaderBg("black");
    } else {
      setHeaderBg("transparent");
    }
  };
  const location = useLocation();
  return (
    <>
      {location.pathname.includes("/home") ? (
        <header style={{ backgroundColor: headerbg }}>
          <div className={`container`}>
            <nav class="navbar navbar-expand-lg navbar-light">
              <Link
                to={{ pathname: "/home" }}
                className={`navbar-brand ${styles.logo}`}
              >
                ButtStore
              </Link>

              <div
                class="collapse navbar-collapse justify-content-end"
                id="navbarText"
              >
                <ul class={`navbar-nav ml-auto ${styles.Navbar}`}>
                  <li class="nav-item active">
                    <Link class="nav-link" to={{ pathname: "/home" }}>
                      Home{" "}
                    </Link>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link">About</a>
                  </li>

                  <li className={`nav-item ${styles.navItems}`}>
                    <Link
                      className={`nav-link ${styles.navLink}`}
                      to={{ pathname: "/cart" }}
                    >
                      <i
                        className="fa fa-shopping-cart"
                        style={{ fontSize: 24 }}
                      ></i>
                      <span className={styles.cartCounter}>{cartLength}</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>
      ) : (
        <header className={styles.headerChange}>
          <div className={`container`}>
            <nav class="navbar navbar-expand-lg navbar-light">
              <Link
                to={{ pathname: "/home" }}
                class={`navbar-brand ${styles.logo}`}
              >
                ButtStore
              </Link>

              <div
                class="collapse navbar-collapse justify-content-end"
                id="navbarText"
              >
                <ul class={`navbar-nav ml-auto ${styles.Navbar}`}>
                  <li class="nav-item active">
                    <Link class="nav-link" to={{ pathname: "/home" }}>
                      Home{" "}
                    </Link>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      About
                    </a>
                  </li>

                  <li className={`nav-item ${styles.navItems}`}>
                    <Link
                      className={`nav-link ${styles.navLink}`}
                      to={{ pathname: "/cart" }}
                    >
                      <i
                        className="fa fa-shopping-cart"
                        style={{ fontSize: 24 }}
                      ></i>
                      <span className={styles.cartCounter}>{cartLength}</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>
      )}
    </>
  );
};

export default Nav;
