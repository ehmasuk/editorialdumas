import Base from "../../layouts/Base";
import "./publish.css";

import { Collapse } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LoginPopup from "../../components/popups/login/LoginPopup";
import { showLoginPopup } from "../../features/LoginPopupSlice";
import faq1 from "./../../assets/images/faq1.png";
import faq2 from "./../../assets/images/faq2.png";

const faqContents = [
    {
        key: "1",
        label: "This panel can only be collapsed by clicking text",
        children: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, sapiente",
    },
    {
        key: "2",
        label: "This panel can only be collapsed by clicking text",
        children: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, sapiente",
    },
];

function PublishBook() {
    const dispatch = useDispatch();

    const { isLogedin } = useSelector((store) => store.AuthCheckerSlice);
    const { loginPopupIsOpen } = useSelector((store) => store.LoginPopupSlice);

    return (
        <Base>
            {loginPopupIsOpen && <LoginPopup sucessredirect="/profile/myfunds" />}
            <scetion className="publish-hero">
                <div className="content-inner-1">
                    <div className="container">
                        <div className="published-color">
                            <div className="row align-items-center">
                                <div className="col-md-6">
                                    <h2>
                                        Publica con <br /> Eduitorial Dumas
                                    </h2>
                                    <p>Te ayudamos a publicar y vender tu libro</p>
                                    <div>
                                        {isLogedin ? (
                                            <Link to="/profile">
                                                <button className="btn btn-primary btnhover mb-3 mt-4" style={{ fontSize: "20px" }}>
                                                    Empezer Ahora
                                                </button>
                                            </Link>
                                        ) : (
                                            <button className="btn btn-primary btnhover mb-3 mt-4" onClick={() => dispatch(showLoginPopup())} style={{ fontSize: "20px" }}>
                                                Empezer Ahora
                                            </button>
                                        )}
                                    </div>
                                    <div>
                                        <small>Leemos tu propuesta y contactamos contigo</small>
                                    </div>
                                </div>
                                <div className="col-md-6 right-img">
                                    <img src="https://libros.com/images/publicar-libro/author_landing.png" alt="" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </scetion>

            <div className="">
                <div className="middle-info-cards-container">
                    <div className="banner-text hide_on_mobile">¿Por qué publicar tu libro Editorial Dumas?</div>
                    <div className="info-cards-container">
                        <div className="info-card">
                            <div className="icon">
                                <img src="https://cdn-icons-png.flaticon.com/128/2597/2597085.png" alt />
                            </div>
                            <div className="message-container">
                                <div className="title">Involúcrate</div>
                                <div className="message">Participa en una gran comunidad de autores y lectores</div>
                            </div>
                        </div>
                        <div className="info-card">
                            <div className="icon">
                                <img src="https://cdn-icons-png.flaticon.com/128/10143/10143723.png" alt />
                            </div>
                            <div className="message-container">
                                <div className="title">Aprende</div>
                                <div className="message">Conoce a fondo el sector editorial desde el realismo y la experiencia profesional</div>
                            </div>
                        </div>
                        <div className="info-card">
                            <div className="icon">
                                <img src="https://cdn-icons-png.flaticon.com/128/2303/2303755.png" alt />
                            </div>
                            <div className="message-container">
                                <div className="title">Crece</div>
                                <div className="message">Desarrolla tu potencial como autor compartiendo la experiencia con autores y lectores</div>
                            </div>
                        </div>
                        <div className="info-card">
                            <div className="icon">
                                <img src="https://cdn-icons-png.flaticon.com/128/4158/4158609.png" alt />
                            </div>
                            <div className="message-container">
                                <div className="title">Toma el control</div>
                                <div className="message">Disfruta de tu propia plataforma de autor con acceso a los datos de tus libros</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <a className="btn btn-primary btnhover mb-3 mt-5" style={{ fontSize: "20px" }} href="books-grid-view.html">
                        Empezer Ahora
                    </a>
                    <div className="disclaimer">Leemos tu propuesta y contactamos contigo</div>
                </div>
            </div>

            <div>
                {/* FAQ Content Start */}
                <section className="main-faq-content content-inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 align-self-center mb-4">
                                <div className="faq-content-box">
                                    <div className="section-head">
                                        <h2 className="title">What Is EDITORIAL?</h2>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                            nostrud exercitation
                                        </p>
                                    </div>
                                    <Collapse className="publish-faq" bordered={false} size="large" items={faqContents} defaultActiveKey={["1"]} />
                                </div>
                            </div>
                            <div className="col-lg-6 order-lg-2 order-1 mb-4">
                                <div className="faq-img-box wow left-animation rounded-md" data-wow-delay="0.2s">
                                    <img src={faq1} alt="FAQ Image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="main-faq-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 mb-4">
                                <div className="faq-img-box rounded-md">
                                    <img src={faq2} alt="FAQ Image" />
                                </div>
                            </div>
                            <div className="col-lg-6 align-self-center mb-4">
                                <div className="faq-content-box">
                                    <div className="section-head">
                                        <h2 className="title">Managing Books</h2>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                            nostrud exercitation
                                        </p>
                                    </div>

                                    <Collapse className="publish-faq" bordered={false} size="large" items={faqContents} defaultActiveKey={["1"]} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* FAQ Content End */}

                {/* Feature Box */}
                <section className="content-inner bg-white">
                    <div className="container">
                        <div className="row sp15">
                            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                <div className="icon-bx-wraper style-2 m-b30 text-center">
                                    <div className="icon-bx-lg">
                                        <i className="fa-solid fa-users icon-cell" />
                                    </div>
                                    <div className="icon-content">
                                        <h2 className="dz-title counter m-b0">125,663</h2>
                                        <p className="font-20">Happy Customers</p>
                                    </div>
                                </div>
                            </div>
                            <div className=" col-lg-3 col-md-6 col-sm-6 col-6">
                                <div className="icon-bx-wraper style-2 m-b30 text-center">
                                    <div className="icon-bx-lg">
                                        <i className="fa-solid fa-book icon-cell" />
                                    </div>
                                    <div className="icon-content">
                                        <h2 className="dz-title counter m-b0">50,672</h2>
                                        <p className="font-20">Book Collections</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                <div className="icon-bx-wraper style-2 m-b30 text-center">
                                    <div className="icon-bx-lg">
                                        <i className="fa-solid fa-store icon-cell" />
                                    </div>
                                    <div className="icon-content">
                                        <h2 className="dz-title counter m-b0">1,562</h2>
                                        <p className="font-20">Our Stores</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                <div className="icon-bx-wraper style-2 m-b30 text-center">
                                    <div className="icon-bx-lg">
                                        <i className="fa-solid fa-leaf icon-cell" />
                                    </div>
                                    <div className="icon-content">
                                        <h2 className="dz-title counter m-b0">457</h2>
                                        <p className="font-20">Famous Writers</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Feature Box End */}
            </div>
        </Base>
    );
}

export default PublishBook;
