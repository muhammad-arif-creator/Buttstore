import React from "react";
import styles from "./Banner.module.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const Banner = () => {
  return (
    <OwlCarousel
      items={1}
      className="owl-theme"
      loop
      nav
      margin={3}
      dots={false}
    >
      <div className={styles.item}>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className={styles.bannerText}>
                <h6>Summer Collection</h6>
                <h2>Fall - Winter Collections 2030</h2>
                <p>
                  A specialist label creating luxury essentials. Ethically
                  crafted with an unwavering commitment to exceptional quality.
                </p>
                <button href="#" class="primary-btn">
                  Shop now <span class="arrow_right"></span>
                </button>
              </div>
            </div>
            <div className="col-6">
              <img src="images/hero.png" alt="none" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.item}>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className={styles.bannerText}>
                <h6>Summer Collection</h6>
                <h2>Fall - Winter Collections 2030</h2>
                <p>
                  A specialist label creating luxury essentials. Ethically
                  crafted with an unwavering commitment to exceptional quality.
                </p>
                <button href="#" class="primary-btn">
                  Shop now <span class="arrow_right"></span>
                </button>
              </div>
            </div>
            <div className="col-6">
              <img src="images/hero.png" alt="none" />
            </div>
          </div>
        </div>
      </div>
    </OwlCarousel>
  );
};

export default Banner;
