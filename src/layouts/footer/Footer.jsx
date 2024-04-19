import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaRegEnvelope, FaYoutube } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

function Footer() {
    const [categoryOpen, setCategoryOpen] = useState(false);

    return (
        <footer className="site-footer footer-dark">
            <div className="footer-category">
                <div className="container">
                    <div className="category-toggle">
                        <a role="button" className="toggle-btn" onClick={() => setCategoryOpen(!categoryOpen)}>
                            Books categories
                        </a>
                        <AnimatePresence>
                            {categoryOpen && (
                                <motion.div
                                    style={{ overflow: "hidden" }}
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    transition={{
                                        duration: 0.5,
                                    }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="toggle-items row book-grid-row "
                                >
                                    <div className="footer-col-book">
                                        <ul>
                                            <li>
                                                <a href="books-grid-view.html">Architecture</a>
                                            </li>
                                            <li>
                                                <a href="books-grid-view.html">Art</a>
                                            </li>
                                            <li>
                                                <a href="books-grid-view.html">Action</a>
                                            </li>
                                            <li>
                                                <a href="books-grid-view.html">Biography</a>
                                            </li>
                                            <li>
                                                <a href="books-grid-view.html">Body, Mind & Spirit</a>
                                            </li>
                                            <li>
                                                <a href="books-grid-view.html">Business & Economics</a>
                                            </li>
                                            <li>
                                                <a href="books-grid-view.html">Children Fiction</a>
                                            </li>
                                            <li>
                                                <a href="books-grid-view.html">Children Non-Fiction</a>
                                            </li>
                                            <li>
                                                <a href="books-grid-view.html">Comics & Graphics</a>
                                            </li>
                                            <li>
                                                <a href="books-grid-view.html">Cooking</a>
                                            </li>
                                            <li>
                                                <a href="books-grid-view.html">Crafts & Hobbies</a>
                                            </li>
                                            <li>
                                                <a href="books-grid-view.html">Design</a>
                                            </li>
                                            <li>
                                                <a href="books-grid-view.html">Drama</a>
                                            </li>
                                            <li>
                                                <a href="books-grid-view.html">Education</a>
                                            </li>
                                            <li>
                                                <a href="books-grid-view.html">Family & Relationships</a>
                                            </li>
                                            <li>
                                                <a href="books-grid-view.html">Fiction</a>
                                            </li>
                                            <li>
                                                <a href="books-grid-view.html">Foreign Language</a>
                                            </li>
                                            <li>
                                                <a href="books-grid-view.html">Games</a>
                                            </li>
                                            <li>
                                                <a href="books-grid-view.html">Gardening</a>
                                            </li>
                                            <li>
                                                <a href="books-grid-view.html">Health & Fitness</a>
                                            </li>
                                            <li>
                                                <a href="books-grid-view.html">History</a>
                                            </li>
                                            <li>
                                                <a href="books-grid-view.html">House & Home</a>
                                            </li>
                                            <li>
                                                <a href="books-grid-view.html">Humor</a>
                                            </li>
                                            <li>
                                                <a href="books-grid-view.html">Literary Collections</a>
                                            </li>
                                            <li>
                                                <a href="books-grid-view.html">Mathematics</a>
                                            </li>
                                            <li>
                                                <a href="books-grid-view.html">Medical</a>
                                            </li>
                                            <li>
                                                <a href="books-grid-view.html">Nature</a>
                                            </li>
                                            <li>
                                                <a href="books-grid-view.html">Performing Arts</a>
                                            </li>
                                            <li>
                                                <a href="books-grid-view.html">Pets</a>
                                            </li>
                                            <li>
                                                <a href="books-grid-view.html">Show others</a>
                                            </li>
                                        </ul>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-12 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="widget widget_about">
                                <div className="footer-logo logo-white">
                                    <a href="index.html">
                                        <img src="images/logo-white.png" alt="" />
                                    </a>
                                </div>
                                <p className="text">Bookland is a Book Store Ecommerce Website Template by DexignZone lorem ipsum dolor sit</p>
                                <div className="dz-social-icon style-1">
                                    <ul>
                                        <li>
                                            <a href="https://www.facebook.com/dexignzone" target="_blank" rel="noreferrer">
                                                <FaFacebookF />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.youtube.com/channel/UCGL8V6uxNNMRrk3oZfVct1g" target="_blank" rel="noreferrer">
                                                <FaYoutube />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/showcase/3686700/admin/" target="_blank" rel="noreferrer">
                                                <FaLinkedinIn />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/website_templates__/" target="_blank" rel="noreferrer">
                                                <FaInstagram />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-4 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="widget widget_services">
                                <h5 className="footer-title">Our Links</h5>
                                <ul>
                                    <li>
                                        <a href="about-us.html">About us</a>
                                    </li>
                                    <li>
                                        <a href="contact-us.html">Contact us</a>
                                    </li>
                                    <li>
                                        <a href="privacy-policy.html">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="pricing.html">Pricing Table</a>
                                    </li>
                                    <li>
                                        <a href="faq.html">FAQ</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-sm-4 col-4 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="widget widget_services">
                                <h5 className="footer-title">Bookland ?</h5>
                                <ul>
                                    <li>
                                        <a href="index.html">Bookland</a>
                                    </li>
                                    <li>
                                        <a href="services.html">Services</a>
                                    </li>
                                    <li>
                                        <a href="books-detail.html">Book Details</a>
                                    </li>
                                    <li>
                                        <a href="blog-detail.html">Blog Details</a>
                                    </li>
                                    <li>
                                        <a href="books-grid-view.html">Shop</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-4 wow fadeInUp" data-wow-delay="0.4s">
                            <div className="widget widget_services">
                                <h5 className="footer-title">Resources</h5>
                                <ul>
                                    <li>
                                        <a href="services.html">Download</a>
                                    </li>
                                    <li>
                                        <a href="help-desk.html">Help Center</a>
                                    </li>
                                    <li>
                                        <a href="shop-cart.html">Shop Cart</a>
                                    </li>
                                    <li>
                                        <a href="shop-login.html">Login</a>
                                    </li>
                                    <li>
                                        <a href="about-us.html">Partner</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="widget widget_getintuch">
                                <h5 className="footer-title">Get in Touch With Us</h5>
                                <ul>
                                    <li>
                                        <FaMapMarkerAlt />

                                        <span>832 Thompson Drive, San Fransisco CA 94107,US</span>
                                    </li>
                                    <li>
                                        <FaPhone />

                                        <span>
                                            +123 345123 556
                                            <br />
                                            +123 345123 556
                                        </span>
                                    </li>
                                    <li>
                                        <FaRegEnvelope />

                                        <span>
                                            support@bookland.id
                                            <br />
                                            info@bookland.id
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row fb-inner">
                        <div className="col-lg-6 col-md-12 text-start">
                            <p className="copyright-text">Editorial Dudas - © 2024 All Rights Reserved</p>
                        </div>
                        <div className="col-lg-6 col-md-12 text-end">
                            <p>
                                Owned by <span className="heart" /> by <a href="#">Ray Bolivar Sosa</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
