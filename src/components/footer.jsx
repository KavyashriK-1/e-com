import React from 'react';
import './Footer.css';
import nike from '../assets/nike.svg'
import adidas from '../assets/adidas.svg'
import puma from '../assets/puma.svg'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-sections">
                <div className="footer-col">
                    <h4>ABOUT US</h4>
                    <a href="#">Contact Us</a>
                    <a href="#">My Orders</a>
                    <a href="#">FAQ</a>

                    <div className="collab">
                        <p>Our Collaborations</p>
                        <div className="brands">
                            <img src={nike} alt="Nike" />
                            <img src={adidas} alt="Adidas" />
                            <img src={puma} alt="Puma" />
                        </div>
                    </div>
                </div>

                <div className="footer-col">
                    <h4>CATEGORIES</h4>
                    <a href="#">T-shirts</a>
                    <a href="#">Vests</a>
                    <a href="#">Pants</a>
                    <a href="#">Jacket</a>
                </div>
                <div className="footer-col">
                    <h4>CUSTOMER SUPPORT 11 AM - 6 AM (MONDAY-FRIDAY)</h4>
                    <a href="mailto:support@twice.com">support@snappy.com</a>
                    <a href="tel:+911234567890">+91 1234567890</a>

                    <div className="subscribe">
                        <h4>SUBSCRIBE TO US</h4>
                        <p>
                            Sign Up Using Email To Get Special Offers, Better Discounts,<br />
                            Exclusive Access, And Much More
                        </p>
                        <div className="email-subscribe">
                            <input type="email" placeholder="Email" />
                            <button>Subscribe</button>
                        </div>
                    </div>

                    <div className="country">
                        <p>COUNTRY</p>
                        <a href="index.html">UNITED STATES</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
