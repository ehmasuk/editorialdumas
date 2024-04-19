import Base from "../../layouts/Base";

function Contact() {
    return (
        <Base>
            <div className="page-content">
                {/* inner page banner */}
                <div className="dz-bnr-inr overlay-secondary-dark dz-bnr-inr-sm" style={{ backgroundImage: "url(images/background/bg3.jpg)" }}>
                    <div className="container">
                        <div className="dz-bnr-inr-entry">
                            <h1>Contact</h1>
                            <nav aria-label="breadcrumb" className="breadcrumb-row">
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <a href="index.html"> Home</a>
                                    </li>
                                    <li className="breadcrumb-item">Contact</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="content-inner-2 pt-0">
                    <div className="map-iframe">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194347.4782682819!2d-3.8443473332188804!3d40.43809861093788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1618c2269!2sMadrid%2C%20Spain!5e0!3m2!1sen!2sus!4v1709489717359!5m2!1sen!2sus"
                            style={{
                                border: 0,
                                width: "100%",
                                minHeight: "100%",
                                marginBottom: "-8px",
                            }}
                            allowFullScreen=""
                        />
                    </div>
                </div>
                <section className="contact-wraper1" style={{ backgroundImage: "url(images/background/bg2.jpg)" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="contact-info">
                                    <div className="section-head text-white style-1">
                                        <h3 className="title text-white">Get In Touch</h3>
                                        <p>If you are interested in working with us, please get in touch.</p>
                                    </div>
                                    <ul className="no-margin">
                                        <li className="icon-bx-wraper text-white left m-b30">
                                            <div className="icon-md">
                                                <span className="icon-cell text-primary">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={50}
                                                        height={50}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="feather feather-map-pin"
                                                    >
                                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                                        <circle cx={12} cy={10} r={3} />
                                                    </svg>
                                                </span>
                                            </div>
                                            <div className="icon-content">
                                                <h5 className=" dz-tilte text-white">Our Address</h5>
                                                <p>1247/Plot No. 39, 15th Phase, Huab Colony, Kukatpally, Hyderabad</p>
                                            </div>
                                        </li>
                                        <li className="icon-bx-wraper text-white left m-b30">
                                            <div className="icon-md">
                                                <span className="icon-cell text-primary">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={50}
                                                        height={50}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="feather feather-mail"
                                                    >
                                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                                        <polyline points="22,6 12,13 2,6" />
                                                    </svg>
                                                </span>
                                            </div>
                                            <div className="icon-content">
                                                <h5 className="dz-tilte text-white">Our Email</h5>
                                                <p>
                                                    info@gmail
                                                    <br />
                                                    services@gmail.com
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-7 m-b40">
                                <div className="contact-area1 m-r20 m-md-r0">
                                    <div className="section-head style-1">
                                        <h6 className="sub-title text-primary">CONTACT US</h6>
                                        <h3 className="title m-b20">Get In Touch With Us</h3>
                                    </div>
                                    <form className="dz-form dzForm" method="POST" action="script/contact_smtp.php">
                                        <input type="hidden" className="form-control" name="dzToDo" defaultValue="Contact" />
                                        <div className="dzFormMsg" />
                                        <div className="input-group">
                                            <input required="" type="text" className="form-control" name="dzName" placeholder="Full Name" />
                                        </div>
                                        <div className="input-group">
                                            <input required="" type="text" className="form-control" name="dzEmail" placeholder="Email Adress" />
                                        </div>
                                        <div className="input-group">
                                            <input required="" type="text" className="form-control" name="dzPhoneNumber" placeholder="Phone No." />
                                        </div>
                                        <div className="input-group">
                                            <textarea required="" name="dzMessage" rows={5} className="form-control" defaultValue={"Message"} />
                                        </div>
                                        <div className="mb-3">
                                            <div
                                                className="g-recaptcha"
                                                data-sitekey="<!-- Put reCaptcha Site Key -->"
                                                data-callback="verifyRecaptchaCallback"
                                                data-expired-callback="expiredRecaptchaCallback"
                                            />
                                            <input className="form-control d-none" style={{ display: "none" }} data-recaptcha="true" required="" data-error="Please complete the Captcha" />
                                        </div>
                                        <div>
                                            <button name="submit" type="submit" value="submit" className="btn w-100 btn-primary btnhover">
                                                SUBMIT
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Feature Box */}
                <section className="content-inner">
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
                {/* Newsletter */}
                <section
                    className="py-5 newsletter-wrapper"
                    style={{
                        backgroundImage: 'url("images/background/bg1.jpg")',
                        backgroundSize: "cover",
                    }}
                >
                    <div className="container">
                        <div className="subscride-inner">
                            <div className="row style-1 justify-content-xl-between justify-content-lg-center align-items-center text-xl-start text-center">
                                <div className="col-xl-7 col-lg-12">
                                    <div className="section-head mb-0">
                                        <h2 className="title text-white my-lg-3 mt-0">Subscribe our newsletter for newest books updates</h2>
                                    </div>
                                </div>
                                <div className="col-xl-5 col-lg-6">
                                    <form className="dzSubscribe style-1" action="script/mailchamp.php" method="post">
                                        <div className="dzSubscribeMsg" />
                                        <div className="form-group">
                                            <div className="input-group mb-0">
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
                </section>
                {/* Newsletter End */}
            </div>
        </Base>
    );
}

export default Contact;
