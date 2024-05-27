import { TfiEmail } from "react-icons/tfi";
import { Link } from "react-router-dom";

function NewsLatter() {
    return (
        <section className="py-5 newsletter-wrapper" style={{ background: "#1A1668" }}>
            <div className="container">
                <div className="subscride-inner">
                    <div className="">
                        <div style={{ display: "grid", gridTemplateColumns: "100px auto" }}>
                            <TfiEmail fontSize={70} color="#fff" style={{ marginRight: "20px" }} />
                            <div className="section-head mb-0">
                                <h2 className="title text-white">Recibe nuestras novedades en libros en tu email</h2>

                                <div style={{ marginBottom: "20px", color: "#fff" }}>
                                    <small style={{fontSize:'12px'}}>
                                    EDITORIAL DUMAS tratará tus datos personales para informarte de nuestras novedades y descuentos. Conservaremos tus datos mientras no te des de baja o nos solicites su supresión. Podrás ejercer los derechos de acceso, supresión, rectificación, oposición, limitación y portabilidad, remite un email a <Link to="/contact" style={{color:'#EAA451'}}>editorialdumas.com</Link> asunto BAJA. Asimismo, también puedes darte de baja desde nuestro boletín.
                                    </small>
                                </div>

                                <form className="dzSubscribe style-1" action="script/mailchamp.php" method="post">
                                    <div className="dzSubscribeMsg" />
                                    <div className="form-group">
                                        <div className="input-group mb-0" style={{maxWidth:'500px'}}>
                                            <input name="dzEmail" required="required" type="email" className="form-control bg-transparent text-white" placeholder="Your Email Address" />
                                            <div className="input-group-addon">
                                                <button name="submit" value="Submit" type="submit" className="btn btn-primary btnhover">
                                                    <span>SUBSCRIBE</span>
                                                    <i className="fa-solid fa-paper-plane" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NewsLatter;
