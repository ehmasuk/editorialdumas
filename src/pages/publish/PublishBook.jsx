import Base from "../../layouts/Base";
import "./publish.css";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LoginPopup from "../../components/popups/login/LoginPopup";
import { showLoginPopup } from "../../features/LoginPopupSlice";
import author_landing from "./../../assets/images/author_landing.png";
import faq1 from "./../../assets/images/faq1.png";
import faq2 from "./../../assets/images/faq2.png";
import faq3 from "./../../assets/images/faq3.png";
import faq4 from "./../../assets/images/faq4.png";
import faq5 from "./../../assets/images/faq5.png";

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
                                        Publica con <br /> Editorial Dumas
                                    </h2>
                                    <p>Te ayudamos a publicar y vender tu libro</p>
                                    <div>
                                        {isLogedin ? (
                                            <Link to="/profile">
                                                <button className="btn btn-primary btnhover mb-3 mt-4" style={{ fontSize: "20px" }}>
                                                    Empezar Ahora
                                                </button>
                                            </Link>
                                        ) : (
                                            <button className="btn btn-primary btnhover mb-3 mt-4" onClick={() => dispatch(showLoginPopup())} style={{ fontSize: "20px" }}>
                                                Empezar Ahora
                                            </button>
                                        )}
                                    </div>
                                    <div>
                                        <small>Leemos tu propuesta y contactamos contigo</small>
                                    </div>
                                </div>
                                <div className="col-md-6 right-img">
                                    <img src={author_landing} alt="" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </scetion>

            <div className="">
                <div className="middle-info-cards-container">
                    <div className="banner-text hide_on_mobile">Por qué publicar tu libro con editorial Dumas?</div>
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
                    {isLogedin ? (
                        <Link to="/profile">
                            <button className="btn btn-primary btnhover mb-3 mt-5" style={{ fontSize: "20px" }}>
                                Empezar Ahora
                            </button>
                        </Link>
                    ) : (
                        <button className="btn btn-primary btnhover mb-3 mt-5" onClick={() => dispatch(showLoginPopup())} style={{ fontSize: "20px" }}>
                            Empezar Ahora
                        </button>
                    )}

                    <div className="disclaimer">Leemos tu propuesta y contactamos contigo</div>
                </div>
            </div>

            <section className="content-inner">
                <div style={{ background: "#F3F4F6" }}>
                    <div className="py-4 container">
                        <h4>Cómo funciona</h4>
                        <h5>Convertimos tus mejores ideas en grandes libros</h5>
                        <p>
                            En Editorial Dumas convertimos tus ideas en realidad a través de campañas de crowdfunding o mecenazgo. Te acompañamos en cada paso del camino, brindándote las herramientas
                            necesarias para involucrar a tu comunidad. Familiares, amigos, colegas, organizaciones y seguidores en redes sociales conforman la base de este apoyo invaluable. Exploramos
                            junto contigo el potencial de tu proyecto y compartimos la experiencia de nuestros autores, allanando el camino para alcanzar una audiencia más amplia. Te respaldamos en
                            cada fase de esta emocionante travesía.
                        </p>
                    </div>
                </div>

                <div>
                    <div className="py-4 container">
                        <h4>¿Cómo ocurre la magia?</h4>
                        <h5>Convertimos tus mejores ideas en grandes libros</h5>
                        <p>
                            En Editorial Dumas convertimos tus ideas en realidad a través de campañas de crowdfunding o mecenazgo. Te acompañamos en cada paso del camino, brindándote las herramientas
                            necesarias para involucrar a tu comunidad. Familiares, amigos, colegas, organizaciones y seguidores en redes sociales conforman la base de este apoyo invaluable. Exploramos
                            junto contigo el potencial de tu proyecto y compartimos la experiencia de nuestros autores, allanando el camino para alcanzar una audiencia más amplia. Te respaldamos en
                            cada fase de esta emocionante travesía.
                        </p>
                    </div>
                </div>

                <div style={{ background: "#F3F4F6" }}>
                    <div className="py-4 container">
                        <h4>Cómo la editorial promociona mi libro </h4>
                        <h5>Se enterarán todos los posibles lectores </h5>
                        <p>
                            Primero, en caso de que lo selecciones, preparemos un lanzamiento con todas las de la ley. Esto incluye booktrailer de la obra y promoción bien hecha en las redes. También
                            enviamos tu libro a quienes hicieron posible el proyecto, tus mecenas. Posteriormente, lo distribuimos en nuestra tienda en línea, tanto en formato físico como digital, y
                            lo presentamos en las librerías de nuestra comunidad. Tendrás acceso al seguimiento de tus ventas en tu panel personal y compartiremos contigo las experiencias de otros
                            autores que han ampliado su comunidad para llegar a más lectores.
                        </p>
                    </div>
                </div>
                <div className="text-center">
                    {isLogedin ? (
                        <Link to="/profile">
                            <button className="btn btn-primary btnhover mb-3 mt-5" style={{ fontSize: "20px" }}>
                                Empezar Ahora
                            </button>
                        </Link>
                    ) : (
                        <button className="btn btn-primary btnhover mb-3 mt-5" onClick={() => dispatch(showLoginPopup())} style={{ fontSize: "20px" }}>
                            Empezar Ahora
                        </button>
                    )}

                    <div className="disclaimer">Leemos tu propuesta y contactamos contigo</div>
                </div>
            </section>

            <div>
                {/* FAQ Content Start */}

                {/* <Collapse className="publish-faq" bordered={false} size="large" items={faqContents} defaultActiveKey={["1"]} /> */}
                <section className="main-faq-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 mb-4">
                                <div className="faq-img-box rounded-md">
                                    <img src={faq1} alt="FAQ Image" />
                                </div>
                            </div>
                            <div className="col-lg-6 align-self-center mb-4">
                                <div className="faq-content-box">
                                    <div className="section-head">
                                        <h2 className="title">Cómo publicar mi libro</h2>
                                        <h5>Envía tu propuesta</h5>
                                        <p>
                                            Rellena el formulario para que nuestro equipo te conozca y descubra tu proyecto, ya sea un manuscrito terminado o una idea que convertir en un libro.
                                            Recibirás la respuesta en el plazo de 12 – 15 días como mucho.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="main-faq-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 align-self-center mb-4">
                                <div className="faq-content-box">
                                    <div className="section-head">
                                        <h2>Prepara tu campaña de crowdfunding</h2>
                                        <ul>
                                            <li>· Recibe formación sobre marketing y comunicación editorial</li>
                                            <li>· Define la estrategia de campaña con nuestro equipo de crowdfunding</li>
                                            <li>· Crea el contenido necesario para difundir tu campaña</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 order-lg-2 order-1 mb-4">
                                <div className="faq-img-box wow left-animation rounded-md" data-wow-delay="0.2s">
                                    <img src={faq3} alt="FAQ Image" />
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
                                    <img src={faq4} alt="FAQ Image" />
                                </div>
                            </div>
                            <div className="col-lg-6 align-self-center mb-4">
                                <div className="faq-content-box">
                                    <div className="section-head">
                                        <h2 className="title">Lanza tu campaña</h2>

                                        <ul>
                                            <li>· Comparte el proyecto con tu comunidad durante 30 días</li>
                                            <li>· Recibe asesoría semanal de tu coordinador de campaña</li>
                                            <li>· Consigue tu objetivo de campaña para financiar tu libro</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="main-faq-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 align-self-center mb-4">
                                <div className="faq-content-box">
                                    <div className="section-head">
                                        <h2>Editorial Dumas edita tu libro</h2>
                                        <ul>
                                            <li>· El equipo editorial empieza a trabajar con tu manuscrito.</li>
                                            <li>· Los profesionales especializados en corrección, maquetación y diseño hacen su parte.</li>
                                            <li>· Te mostramos el libro antes de publicarlo.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 order-lg-2 order-1 mb-4">
                                <div className="faq-img-box wow left-animation rounded-md" data-wow-delay="0.2s">
                                    <img src={faq2} alt="FAQ Image" />
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
                                    <img src={faq5} alt="FAQ Image" />
                                </div>
                            </div>
                            <div className="col-lg-6 align-self-center mb-4">
                                <div className="faq-content-box">
                                    <div className="section-head">
                                        <h2>Empieza a vender tu libro</h2>
                                        <ul>
                                            <li>· Los mecenas reciben los ejemplares de tu libro.</li>
                                            <li>· ¡Tu libro publicado!</li>
                                            <li>· Llega a nuevos lectores.</li>
                                            <li>· Haz el seguimiento de tus ventas.</li>
                                            <li>· Gana dinero con tu libro.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="text-center">
                    {isLogedin ? (
                        <Link to="/profile">
                            <button className="btn btn-primary btnhover mb-3 mt-5" style={{ fontSize: "20px" }}>
                                Empezar Ahora
                            </button>
                        </Link>
                    ) : (
                        <button className="btn btn-primary btnhover mb-3 mt-5" onClick={() => dispatch(showLoginPopup())} style={{ fontSize: "20px" }}>
                            Empezar Ahora
                        </button>
                    )}

                    <div className="disclaimer">Leemos tu propuesta y contactamos contigo</div>
                </div>

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
