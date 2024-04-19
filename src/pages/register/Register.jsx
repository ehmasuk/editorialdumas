import Base from "../../layouts/Base";

function Register() {
    return (
        <Base>
            <div className="page-content">
                <div className="dz-bnr-inr overlay-secondary-dark dz-bnr-inr-sm" style={{ backgroundImage: "url(images/background/bg3.jpg)" }}>
                    <div className="container">
                        <div className="dz-bnr-inr-entry">
                            <h1>Registration</h1>
                            <nav aria-label="breadcrumb" className="breadcrumb-row">
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <a href="index.html"> Home</a>
                                    </li>
                                    <li className="breadcrumb-item">Registration</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <section className="content-inner shop-account">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-6 mb-4">
                                <div className="login-area">
                                    <form>
                                        <h4 className="text-secondary">Registration</h4>
                                        <p className="font-weight-600">If you dont have an account with us, please Registration.</p>
                                        <div className="mb-4">
                                            <label className="label-title">Username *</label>
                                            <input name="dzName" required="" className="form-control" placeholder="Your Username" type="text" />
                                        </div>
                                        <div className="mb-4">
                                            <label className="label-title">Email address *</label>
                                            <input name="dzName" required="" className="form-control" placeholder="Your Email address" type="email" />
                                        </div>
                                        <div className="mb-4">
                                            <label className="label-title">Password *</label>
                                            <input name="dzName" required="" className="form-control " placeholder="Type Password" type="password" />
                                        </div>
                                        <div className="mb-5">
                                            <small>
                                                Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described
                                                in our <a href="privacy-policy.html">privacy policy</a>.
                                            </small>
                                        </div>
                                        <div className="text-left">
                                            <button className="btn btn-primary btnhover w-100 me-2">Register</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Base>
    );
}

export default Register;
