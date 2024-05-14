import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaRegHeart, FaRegUser } from "react-icons/fa";

import axios from "axios";
import { IoSearch } from "react-icons/io5";
import { LuLogIn } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { authUnCheck } from "../../features/AuthCheckerSlice";
import { hideLoader, showLoader } from "../../features/CombineSlice";

import { Skeleton, Tooltip } from "antd";
import { FaUserPlus } from "react-icons/fa6";
import { RiShoppingCartLine } from "react-icons/ri";
import { showLoginPopup } from "../../features/LoginPopupSlice";

import defaultAvatar from "./../../assets/images/defaultAvatar.png";

import { allGenere } from "../../database/globalDatas";

const apiUrl = import.meta.env.VITE_REACT_APP_DEFAULT_API_ROUTE;


function Header() {
    const dispatch = useDispatch();

    const handleLogout = async () => {
        dispatch(showLoader());
        const user = localStorage.getItem("isLogedin");
        const token = JSON.parse(user).token;

        try {
            const res = await axios.post(`${apiUrl}/user/logout`, token, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            dispatch(authUnCheck());
        } catch (error) {
            console.log(error);
        } finally {
            dispatch(hideLoader());
        }
    };

    const { isLogedin } = useSelector((store) => store.AuthCheckerSlice);

    const { userInfo, isLoading } = useSelector((store) => store.UserInfoSlice);

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

    const [smallScreenNavOpen, setSmallScreenNavOpen] = useState(window.screen.width > 992);

    const handleSmallScreenNavbar = () => {
        setSmallScreenNavOpen(!smallScreenNavOpen);
    };

    return (
        <header className="site-header mo-left header style-1">
            <div className="header-info-bar">
                <div className="container clearfix">
                    <div className="logo-header logo-dark">
                        <Link to="/">
                            <div className="dev-logo">
                                editorial<p>dumas</p>
                            </div>
                        </Link>
                    </div>
                    <div className="extra-nav">
                        <div className="extra-cell">
                            <ul className="navbar-nav header-right">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/wishlist">
                                        <FaRegHeart color="#000" />
                                        <span className="badge">0</span>
                                    </Link>
                                </li>
                                <li className="nav-item" onClick={(e) => e.stopPropagation()}>
                                    <button type="button" className="nav-link box cart-btn" onClick={() => setCartisOpen(!cartisOpen)}>
                                        <RiShoppingCartLine color="#000" />
                                        <span className="badge">0</span>
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
                                                            <a href="#">
                                                                <img alt="" className="media-object" src="https://picsum.photos/500/300?random=1" />
                                                            </a>
                                                        </div>
                                                        <div className="media-body">
                                                            <h6 className="dz-title">
                                                                <a href="#" className="media-heading">
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

                                {!isLogedin && (
                                    <>
                                        <li className="nav-item" onClick={() => dispatch(showLoginPopup())}>
                                            <Link className="nav-link">
                                                <Tooltip title="Entrar">
                                                    <LuLogIn fontSize={25} color="#000" />
                                                </Tooltip>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/register">
                                                <Tooltip title="Regístrate">
                                                    <FaUserPlus fontSize={25} color="#000" />
                                                </Tooltip>
                                            </Link>
                                        </li>
                                    </>
                                )}

                                {isLogedin && (
                                    <li className="nav-item dropdown profile-dropdown ms-4">
                                        <div className="nav-link" role="button" onClick={handleShowProfileDrop}>
                                            {!isLoading ? (
                                                <img src={userInfo && userInfo.images ? userInfo.images.url : defaultAvatar} alt="avatar" />
                                            ) : (
                                                <Skeleton.Avatar active={true} size="large" shape="square" />
                                            )}

                                            <div className="profile-info">
                                                <h6 className="title">{userInfo?.name}</h6>
                                                <span>{userInfo?.email}</span>
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
                                                        <h6 className="m-0">{userInfo?.name}</h6>
                                                        <span>{userInfo?.email}</span>
                                                    </div>
                                                    <div className="dropdown-body d-block">
                                                        <Link to="/profile" className="dropdown-item d-flex justify-content-between align-items-center ai-icon">
                                                            <div>
                                                                <FaRegUser fontSize="18px" />
                                                                <span className="ms-2">Perfil</span>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                    <div className="dropdown-footer">
                                                        <div onClick={handleLogout} className="btn btn-primary w-100 btnhover btn-sm">
                                                            Cerrar sesión
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
                                    <option>Categoría</option>
                                    {allGenere.map((genere, index) => (
                                        <option key={index} value={genere}>
                                            {genere}
                                        </option>
                                    ))}
                                </select>
                                <input type="text" className="form-control" placeholder="Buscar libros aquí" />
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
                                <div className="dev-logo">
                                    editorial<p>dumas</p>
                                </div>
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
                                <Link to="/publish" className="btn btn-primary btnhover">
                                    Publica con nosotros
                                </Link>
                            </div>
                        </div>
                        {/* Main Nav */}
                        <AnimatePresence>
                            {smallScreenNavOpen && (
                                <motion.div
                                    initial={{ x: -500 }}
                                    animate={{ x: 0 }}
                                    transition={{ duration: window.screen.width > 992 ? 0 : 0.5 }}
                                    exit={{ x: -500 }}
                                    className={`header-nav navbar-collapse collapse justify-content-start ${smallScreenNavOpen && "collapse show"}`}
                                >
                                    <div className="logo-header logo-dark">
                                        <Link to="/">
                                            <div className="dev-logo">
                                                editorial<p>dumas</p>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="search-input">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Buscar libros aquí" />
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
                                            <Link to="/about">
                                                <span>Quiénes somos</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/publish">
                                                <span>Publica con nosotros</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/allprojects">
                                                <span>Libros en campaña</span>
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
                                            <>
                                                <li>
                                                    <Link to="/login">Entrar</Link>
                                                </li>
                                                <li>
                                                    <Link to="/register">Regístrate</Link>
                                                </li>
                                            </>
                                        )}
                                        {isLogedin && (
                                            <>
                                                <li>
                                                    <Link to="/profile">Perfil</Link>
                                                </li>
                                            </>
                                        )} */}
                                    </ul>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
