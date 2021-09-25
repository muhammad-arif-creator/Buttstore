import React from "react";
import logo from "./logo.png";
import styles from "./Nav.module.css";
import "font-awesome/css/font-awesome.min.css";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Nav = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname.includes("/home") ? (
        <header>
          <div className={`container`}>
            <nav class="navbar navbar-expand-lg navbar-light">
              <a class={`navbar-brand ${styles.logo}`}>
                <img src={logo} alt="none"></img>
              </a>

              <div
                class="collapse navbar-collapse justify-content-end"
                id="navbarText"
              >
                <ul class={`navbar-nav ml-auto ${styles.Navbar}`}>
                  <li class="nav-item active">
                    <Link class="nav-link" to={{pathname:'/home'}}>
                      Home{" "}
                    </Link>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      About
                    </a>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to={{pathname:'/cart'}}>
                      <i
                        className="fa fa-shopping-cart"
                        style={{ fontSize: 24 }}
                      ></i>
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
              <a class={`navbar-brand ${styles.logo}`}>
                <img src={logo} alt="none"></img>
              </a>

              <div
                class="collapse navbar-collapse justify-content-end"
                id="navbarText"
              >
                <ul class={`navbar-nav ml-auto ${styles.Navbar}`}>
                  <li class="nav-item active">
                    <Link class="nav-link" to={{pathname:'/home'}}>
                      Home{" "}
                    </Link>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      About
                    </a>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to={{pathname:'/cart'}}>
                      <i
                        className="fa fa-shopping-cart"
                        style={{ fontSize: 24 }}
                      ></i>
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
