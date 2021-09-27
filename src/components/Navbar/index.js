import React, { useState, useEffect } from "react";
import styles from "./Nav.module.css";
import "font-awesome/css/font-awesome.min.css";
import { useLocation, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Nav = () => {
  const cartLength = useSelector((state) => state.Cart.cartItems.length);
  const [headerBg, setHeaderBg] = useState("transparent");

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
  const history = useHistory();
  const handleButtonClick = (e) => {
    e.preventDefault();
    localStorage.clear();
    history.push("/");
  };
  return (
    <>
      {location.pathname.includes("/home") ? (
        <header style={{ backgroundColor: headerBg }}>
          <div className={`container`}>
            <nav className="navbar navbar-expand-lg navbar-light">
              <Link
                to={{ pathname: "/home" }}
                className={`navbar-brand ${styles.logo}`}
              >
                ButtStore
              </Link>

              <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarText"
              >
                <ul className={`navbar-nav ml-auto ${styles.Navbar}`}>
                  <li className="nav-item active">
                    <Link className="nav-link" to={{ pathname: "/home" }}>
                      Home{" "}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={{ pathname: "/home" }} className="nav-link">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link" onClick={handleButtonClick}>
                      Log Out
                    </button>
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
                      {cartLength ? (
                        <span className={styles.cartCounter}>{cartLength}</span>
                      ) : null}
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
            <nav className="navbar navbar-expand-lg navbar-light">
              <Link
                to={{ pathname: "/home" }}
                className={`navbar-brand ${styles.logo}`}
              >
                ButtStore
              </Link>

              <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarText"
              >
                <ul className={`navbar-nav ml-auto ${styles.Navbar}`}>
                  <li className="nav-item active">
                    <Link className="nav-link" to={{ pathname: "/home" }}>
                      Home{" "}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={{ pathname: "/home" }}>
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link" onClick={handleButtonClick}>
                      Log Out
                    </button>
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
                      {cartLength ? (
                        <span className={styles.cartCounter}>{cartLength}</span>
                      ) : null}
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
