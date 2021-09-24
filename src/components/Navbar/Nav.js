import React from "react";
import logo from "./logo.png";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";

const Nav = () => {
  return (
    <header>
      <div className={`container`}>
        <nav class="navbar navbar-expand-lg navbar-light">
          <a class={`navbar-brand ${styles.logo}`} href="#">
            <img src={logo}></img>
          </a>

          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarText"
          >
            <ul class={`navbar-nav ml-auto ${styles.Navbar}`}>
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Home{" "}
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to={{ pathname: `/cart` }}>
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
  );
};

export default Nav;
