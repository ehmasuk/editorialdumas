import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";

import { IoSearch } from "react-icons/io5";
import { RiShoppingCartLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { authUnCheck } from "../../features/AuthCheckerSlice";

function Header() {
    const dispatch = useDispatch();

    const { isLogedin } = useSelector((store) => store.AuthCheckerSlice);

    const [cartisOpen, setCartisOpen] = useState(false);
    const [profileDropisOpen, setProfileDropisOpen] = useState(false);

    document.addEventListener("click", () => {
        setCartisOpen(false);
        setProfileDropisOpen(false);
    });

    const handleShowProfileDrop = (e) => {
        e.stopPropagation();
        setProfileDropisOpen(!profileDropisOpen);
        setCartisOpen(false);
    };

    const [smallScreenNavOpen, setSmallScreenNavOpen] = useState(false);

    const handleSmallScreenNavbar = () => {
        setSmallScreenNavOpen(!smallScreenNavOpen);
    };

    return (
        <header className="site-header mo-left header style-1">
            <div className="header-info-bar">
                <div className="container clearfix">
                    <div className="logo-header logo-dark">
                        <Link to="/">
                            <div className="dev-logo">editorial<p>dumas</p></div>
                        </Link>
                    </div>
                    <div className="extra-nav">
                        <div className="extra-cell">
                            <ul className="navbar-nav header-right">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/wishlist">
                                        <FaRegHeart color="#000" />
                                        <span className="badge">21</span>
                                    </Link>
                                </li>
                                <li className="nav-item" onClick={(e) => e.stopPropagation()}>
                                    <button type="button" className="nav-link box cart-btn" onClick={() => setCartisOpen(!cartisOpen)}>
                                        <RiShoppingCartLine color="#000" />
                                        <span className="badge">5</span>
                                    </button>
                                    <AnimatePresence>
                                        {cartisOpen && (
                                            <motion.ul
                                                style={{ overflow: "hidden" }}
                                                initial={{ height: 0 }}
                                                animate={{ height: "auto" }}
                                                transition={{
                                                    duration: 0.2,
                                                }}
                                                exit={{ height: 0 }}
                                                className="dropdown-menu cart-list d-block"
                                            >
                                                <li className="cart-item">
                                                    <div className="media">
                                                        <div className="media-left">
                                                            <a href="books-detail.html">
                                                                <img alt="" className="media-object" src="https://picsum.photos/500/300?random=1" />
                                                            </a>
                                                        </div>
                                                        <div className="media-body">
                                                            <h6 className="dz-title">
                                                                <a href="books-detail.html" className="media-heading">
                                                                    Real Life
                                                                </a>
                                                            </h6>
                                                            <span className="dz-price">$28.00</span>
                                                            <span className="item-close">×</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                
                                                <li className="cart-item text-center">
                                                    <h6 className="text-secondary">Totle = $500</h6>
                                                </li>
                                                <li className="text-center d-flex">
                                                    <a href="shop-cart.html" className="btn btn-sm btn-primary me-2 btnhover w-100">
                                                        View Cart
                                                    </a>
                                                    <a href="shop-checkout.html" className="btn btn-sm btn-outline-primary btnhover w-100">
                                                        Checkout
                                                    </a>
                                                </li>
                                            </motion.ul>
                                        )}
                                    </AnimatePresence>
                                </li>
                                {isLogedin && (
                                    <li className="nav-item dropdown profile-dropdown ms-4">
                                        <div className="nav-link" role="button" onClick={handleShowProfileDrop}>
                                            <img src="https://i.pravatar.cc/150?img=12" alt="/" />
                                            <div className="profile-info">
                                                <h6 className="title">Brian</h6>
                                                <span>info@gmail.com</span>
                                            </div>
                                        </div>
                                        <AnimatePresence>
                                            {profileDropisOpen && (
                                                <motion.div
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{ duration: 0.2 }}
                                                    exit={{ scale: 0 }}
                                                    style={{ transformOrigin: "top" }}
                                                    className="dropdown-menu py-0 dropdown-menu-end d-block"
                                                >
                                                    <div className="dropdown-header">
                                                        <h6 className="m-0">Brian</h6>
                                                        <span>info@gmail.com</span>
                                                    </div>
                                                    <div className="dropdown-body d-block">
                                                        <Link to="/profile" className="dropdown-item d-flex justify-content-between align-items-center ai-icon">
                                                            <div>
                                                                <FaRegUser fontSize="18px" />
                                                                <span className="ms-2">Profile</span>
                                                            </div>
                                                        </Link>
                                                        <Link to="/user/cart" className="dropdown-item d-flex justify-content-between align-items-center ai-icon">
                                                            <div>
                                                                <RiShoppingCartLine fontSize="18px" />
                                                                <span className="ms-2">My Order</span>
                                                            </div>
                                                        </Link>
                                                        <Link href="/user/wishlist" className="dropdown-item d-flex justify-content-between align-items-center ai-icon">
                                                            <div>
                                                                <FaRegHeart fontSize="18px" />
                                                                <span className="ms-2">Wishlist</span>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                    <div className="dropdown-footer">
                                                        <div onClick={() => dispatch(authUnCheck())} className="btn btn-primary w-100 btnhover btn-sm">
                                                            Log Out
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                    {/* header search nav */}
                    <div className="header-search-nav">
                        <div className="header-item-search">
                            <div className="input-group search-input">
                                <select className="default-select header-category-select">
                                    <option>Category</option>
                                    <option>Photography </option>
                                    <option>Arts</option>
                                    <option>Adventure</option>
                                    <option>Action</option>
                                    <option>Games</option>
                                    <option>Movies</option>
                                    <option>Comics</option>
                                    <option>Biographies</option>
                                    <option>Childrens Books</option>
                                    <option>Historical</option>
                                    <option>Contemporary</option>
                                    <option>Classics</option>
                                    <option>Education</option>
                                </select>
                                <input type="text" className="form-control" aria-label="Text input with dropdown button" placeholder="Search Books Here" />
                                <button className="btn" type="button">
                                    <IoSearch />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Main Header End */}
            {/* Main Header */}
            <div className="sticky-header main-bar-wraper navbar-expand-lg">
                <div className="main-bar clearfix">
                    <div className="container clearfix">
                        {/* Website Logo */}
                        <div className="logo-header logo-dark">
                            <Link to="/">
                                <img src="https://img.logoipsum.com/288.svg" alt="logo" />
                            </Link>
                        </div>
                        {/* Nav Toggle Button */}
                        <button onClick={handleSmallScreenNavbar} className={`navbar-toggler collapsed navicon justify-content-end ${smallScreenNavOpen && "open"}`} type="button">
                            <span />
                            <span />
                            <span />
                        </button>
                        {/* EXTRA NAV */}
                        <div className="extra-nav">
                            <div className="extra-cell">
                                {/* {!isLogedin ? (
                                    <Link to="/login" className="btn btn-primary btnhover">
                                        Login
                                    </Link>
                                ) : (
                                    <Link to="/profile" className="btn btn-primary btnhover">
                                        Profile
                                    </Link>
                                )} */}
                                <Link to="/publish" className="btn btn-primary btnhover">
                                    Publica con nosotros
                                </Link>
                            </div>
                        </div>
                        {/* Main Nav */}
                        <div className={`header-nav navbar-collapse collapse justify-content-start ${smallScreenNavOpen && "collapse show"}`}>
                            <div className="logo-header logo-dark">
                                <Link to="/">
                                    <img src="https://img.logoipsum.com/288.svg" alt="logo" />
                                </Link>
                            </div>
                            <div className="search-input">
                                <div className="input-group">
                                    <input type="text" className="form-control" aria-label="Text input with dropdown button" placeholder="Search Books Here" />
                                    <button className="btn" type="button">
                                        <i className="flaticon-loupe" />
                                    </button>
                                </div>
                            </div>
                            <ul className="nav navbar-nav">
                                <li>
                                    <Link to="/">
                                        <span>Home</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <span>Quiénes somos</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/publish">
                                        <span>Publica con nosotros</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <span>Libros</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <span>Autores</span>
                                    </Link>
                                </li>
                                {/* {!isLogedin && (
                                    <li>
                                        <Link to="/register">
                                            <span>Register</span>
                                        </Link>
                                    </li>
                                )}

                                <li>
                                    <Link to="/contact">
                                        <span>Contact Us</span>
                                    </Link>
                                </li> */}
                            </ul>
                            <div className="dz-social-icon">
                                <ul>
                                    <li>
                                        <a className="fab fa-facebook-f" target="_blank" href="#" rel="noreferrer" />
                                    </li>
                                    <li>
                                        <a className="fab fa-twitter" target="_blank" href="#" rel="noreferrer" />
                                    </li>
                                    <li>
                                        <a className="fab fa-linkedin-in" target="_blank" href="#" rel="noreferrer" />
                                    </li>
                                    <li>
                                        <a className="fab fa-instagram" target="_blank" href="#" rel="noreferrer" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
