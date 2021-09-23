import React from 'react'
import styles from './Footer.module.css';
import 'font-awesome/css/font-awesome.min.css';

const Footer = () => {
    return (
        <div className={styles.Footer}>
            <div className="d-flex">
                <div className={styles.Icons}>
                
                <a className="nav-link">
                <i className="fa fa-facebook" style={{fontSize:24, color:"black"}}></i>
                </a>
                <a className="nav-link">
                <i className="fa fa-twitter" style={{fontSize:24 ,color:"black"}}></i>
                </a>
                </div>
                <ul className="list m-0 pl-5">
                    <li><a className={styles.link} href="#">Home</a></li>
                    <li><a className={styles.link} href="#">About</a></li>
                    <li><a className={styles.link} href="#">Contact US</a></li>
                </ul>
            </div>
            <div className={styles.copyright}>
                <span>© 2019, Shopatladresse Powered by Shopify</span>
            </div>
        </div>
  
  
    )
}

export default Footer
