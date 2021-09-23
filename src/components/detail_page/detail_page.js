import React from 'react'
import styles from './detail_page.module.css';
import image1 from './image4.png'

const DetailPage = () => {
    return (
        <div className={styles.Detail_page}>
           <div className="row justify-content-between">
                <div className="col-md-6">
                    <div className={styles.Detail_page_images}>
                        <div className={styles.Detail_image}>
                            <img src={image1} alt="product img"></img>
                        </div>
                        <div className={styles.Detail_image}></div>
                    </div>
                </div>
                <div className="col-md-3">
                    <h2>NATIA X LAKO</h2>
                    <h3>Turtle Earrings With Sparklings</h3>
                     <h4>Rs.29,762.50 PKR</h4>
                     <h5>Rs.26,786.25 PKR Sale</h5>
                     <span>Tax included for Pakistan</span>
                     <form>
                        <div className="form-group">
                            <label>Quantity</label>
                            <input className="form-control" 
                                type="number"
                            />
                            </div> 
                            <button className={styles.FirstBtn}>ADD TO CARD</button>
                            <button className={styles.SecondBtn}>BUY IT NOW</button>
                     </form>
                     <h6>Details</h6>
                     <p>Turtle Earrings with Sparklings and push-back fastening</p>
                </div>
           </div>
        </div>
    )
}

export default DetailPage 
