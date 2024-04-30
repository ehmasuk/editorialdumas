import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaMapMarkerAlt, FaRegEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Footer() {
    const [categoryOpen, setCategoryOpen] = useState(false);

    const { isLogedin } = useSelector((store) => store.AuthCheckerSlice);

    return (
        <footer className="site-footer footer-dark">
            <div className="footer-category">
                <div className="container">
                    <div className="category-toggle">
                        <div role="button" className="toggle-btn" onClick={() => setCategoryOpen(!categoryOpen)}>
                            Categorías de libros
                        </div>
                        <to>
                            <AnimatePresence>
                                {categoryOpen && (
                                    <motion.div
                                        style={{ overflow: "hidden" }}
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exitinitial={{ opacity: 0, height: 0 }}
                                        transition={{
                                            duration: 0.5,
                                        }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="toggle-items row book-grid-row "
                                    >
                                        <div className="footer-col-book">
                                            <ul>
                                                <li>
                                                    <Link to="books-grid-view.html">Architecture</Link>
                                                </li>
                                                <li>
                                                    <Link to="books-grid-view.html">Art</Link>
                                                </li>
                                                <li>
                                                    <Link to="books-grid-view.html">Action</Link>
                                                </li>
                                                <li>
                                                    <Link to="books-grid-view.html">Biography</Link>
                                                </li>
                                                <li>
                                                    <Link to="books-grid-view.html">Body, Mind & Spirit</Link>
                                                </li>
                                                <li>
                                                    <Link to="books-grid-view.html">Business & Economics</Link>
                                                </li>
                                                <li>
                                                    <Link to="books-grid-view.html">Children Fiction</Link>
                                                </li>
                                                <li>
                                                    <Link to="books-grid-view.html">Children Non-Fiction</Link>
                                                </li>
                                                <li>
                                                    <Link to="books-grid-view.html">Comics & Graphics</Link>
                                                </li>
                                                <li>
                                                    <Link to="books-grid-view.html">Cooking</Link>
                                                </li>
                                                <li>
                                                    <Link to="books-grid-view.html">Crafts & Hobbies</Link>
                                                </li>
                                                <li>
                                                    <Link to="books-grid-view.html">Design</Link>
                                                </li>
                                                <li>
                                                    <Link to="books-grid-view.html">Drama</Link>
                                                </li>
                                                <li>
                                                    <Link to="books-grid-view.html">Education</Link>
                                                </li>
                                                <li>
                                                    <Link to="books-grid-view.html">Family & Relationships</Link>
                                                </li>
                                                <li>
                                                    <Link to="books-grid-view.html">Fiction</Link>
                                                </li>
                                                <li>
                                                    <Link to="books-grid-view.html">Foreign Language</Link>
                                                </li>
                                                <li>
                                                    <Link to="books-grid-view.html">Games</Link>
                                                </li>
                                                <li>
                                                    <Link to="books-grid-view.html">Gardening</Link>
                                                </li>
                                                <li>
                                                    <Link to="books-grid-view.html">Health & Fitness</Link>
                                                </li>
                                                <li>
                                                    <Link to="books-grid-view.html">History</Link>
                                                </li>
                                                <li>
                                                    <Link to="books-grid-view.html">House & Home</Link>
                                                </li>
                                                <li>
                                                    <Link to="books-grid-view.html">Humor</Link>
                                                </li>
                                                <li>
                                                    <Link to="books-grid-view.html">Literary Collections</Link>
                                                </li>
                                                <li>
                                                    <Link to="books-grid-view.html">Mathematics</Link>
                                                </li>
                                                <li>
                                                    <Link to="books-grid-view.html">Medical</Link>
                                                </li>
                                                <li>
                                                    <Link to="books-grid-view.html">Nature</Link>
                                                </li>
                                                <li>
                                                    <Link to="books-grid-view.html">Performing Arts</Link>
                                                </li>
                                                <li>
                                                    <Link to="books-grid-view.html">Pets</Link>
                                                </li>
                                                <li>
                                                    <Link to="books-grid-view.html">Show others</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </to>
                    </div>
                </div>
            </div>
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-12 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="widget widget_about">
                                <div className="footer-logo logo-white">
                                    <Link to="index.html">
                                        <Link to="/">
                                            <div className="dev-logo" style={{ color: "#fff", textAlign: "left" }}>
                                                editorial<p>dumas</p>
                                            </div>
                                        </Link>
                                    </Link>
                                </div>
                                <p className="text">Editorial especializada en crowdfunding. Todos tenemos una historia que contar.</p>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-4 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="widget widget_services">
                                <h5 className="footer-title">Editorial</h5>
                                <ul>
                                    <li>
                                        <Link to="/about">Quiénes somos</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact">Contacto</Link>
                                    </li>
                                    <li>
                                        <Link to="/faq">Preguntas Frecuentes</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-sm-4 col-4 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="widget widget_services">
                                <h5 className="footer-title">Servicios</h5>
                                <ul>
                                    <li>
                                        <Link to="/publish">Publica con nosotros</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Servicios</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-4 wow fadeInUp" data-wow-delay="0.4s">
                            <div className="widget widget_services">
                                <h5 className="footer-title">Recursos</h5>
                                <ul>
                                    {!isLogedin && (
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
                                    )}
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 wow fadeInUp">
                            <div className="widget widget_getintuch">
                                <h5 className="footer-title">¿Te ayudamos a convertir tu idea en un libro?</h5>
                                <ul>
                                    <li>
                                        <FaMapMarkerAlt />

                                        <span>José del hierro 45, 2B. Madrid</span>
                                    </li>
                                    <li>
                                        <FaPhone />

                                        <span>+34 647.101.304</span>
                                    </li>
                                    <li>
                                        <FaRegEnvelope />

                                        <span>info@editorial.com</span>
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
                            <p className="copyright-text">Editorial Dumas - © 2024 Todos los derechos reservados</p>
                        </div>
                        <div className="col-lg-6 col-md-12 text-end">
                            <p>
                            Grupo <Link to="#">Ray Bolívar Sosa</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
