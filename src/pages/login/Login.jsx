import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authCheck } from "../../features/AuthCheckerSlice";
import Base from "../../layouts/Base";

function Login() {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const [loginisLoading, setLoginisLoading] = useState(false);

    const loginSubmit = async (data) => {
        setLoginisLoading(true);
        try {
            const res = await axios.post("https://press.escuela-ray-bolivar-sosa.com/public/api/user/login", data);
            console.log(res);
            localStorage.setItem("isLogedin", JSON.stringify(res));
            reset();
            dispatch(authCheck());
            navigate("/");
        } catch (error) {
            toast.error(error.response.data.message);
            console.log(error.response.data.message);
            localStorage.removeItem("isLogedin");
        } finally {
            setLoginisLoading(false);
        }
    };

    return (
        <Base>
            <div className="dz-bnr-inr overlay-secondary-dark dz-bnr-inr-sm" style={{ backgroundImage: "url(images/background/bg3.jpg)" }}>
                <div className="container">
                    <div className="dz-bnr-inr-entry">
                        <h1>Login</h1>
                        <nav aria-label="breadcrumb" className="breadcrumb-row">
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="index.html"> Home</a>
                                </li>
                                <li className="breadcrumb-item">Login</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <section className="content-inner shop-account">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 mb-4">
                            <div className="login-area">
                                <div className="tab-content">
                                    <h4>NEW CUSTOMER</h4>
                                    <p>
                                        By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your
                                        orders in your account and more.
                                    </p>
                                    <a className="btn btn-primary btnhover m-r5 button-lg radius-no" href="shop-registration.html">
                                        CREATE AN ACCOUNT
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 mb-4">
                            <div className="login-area">
                                <div className="tab-content nav">
                                    <form className="tab-pane active col-12" onSubmit={handleSubmit(loginSubmit)}>
                                        <h4 className="text-secondary">LOGIN</h4>
                                        <p className="font-weight-600">If you have an account with us, please log in.</p>
                                        <div className="mb-4">
                                            <label className="label-title">E-MAIL *</label>
                                            <input
                                                {...register("email", {
                                                    required: "You must enter your email address",
                                                })}
                                                className={`form-control ${errors.email && "is-invalid"}`}
                                                placeholder="Your Email Id"
                                                type="email"
                                            />
                                            <AnimatePresence>
                                                {errors.email && (
                                                    <motion.div
                                                        exit={{ y: -10, opacity: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                        initial={{ y: -30, opacity: 0 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        className="text-danger"
                                                        role="alert"
                                                    >
                                                        {errors.email.message}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                        <div className="mb-4">
                                            <label className="label-title">PASSWORD *</label>
                                            <input
                                                {...register("password", {
                                                    required: "You must enter your password",
                                                })}
                                                className={`form-control ${errors.password && "is-invalid"}`}
                                                placeholder="Type Password"
                                                type="password"
                                            />
                                            <AnimatePresence>
                                                {errors.password && (
                                                    <motion.p
                                                        exit={{ y: -10, opacity: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                        initial={{ y: -30, opacity: 0 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        className="text-danger"
                                                        role="alert"
                                                    >
                                                        {errors.password.message}
                                                    </motion.p>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                        <div className="text-left">
                                            <button disabled={loginisLoading} className="btn btn-primary btnhover me-2">
                                                <span>Login</span>
                                                {loginisLoading && <i className="fas fa-spinner fa-spin m-l10"></i>}
                                            </button>
                                            <a href="#forgot-password" className="m-l5">
                                                <i className="fas fa-unlock-alt" /> Forgot Password
                                            </a>
                                        </div>
                                    </form>
                                    <form id="forgot-password" className="tab-pane fade  col-12">
                                        <h4 className="text-secondary">FORGET PASSWORD ?</h4>
                                        <p className="font-weight-600">We will send you an email to reset your password. </p>
                                        <div className="mb-3">
                                            <label className="label-title">E-MAIL *</label>
                                            <input name="dzName" required="" className="form-control" placeholder="Your Email Id" type="email" />
                                        </div>
                                        <div className="text-left">
                                            <a className="btn btn-outline-secondary btnhover m-r10" data-bs-toggle="tab" href="#login">
                                                Back
                                            </a>
                                            <button className="btn btn-primary btnhover">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Base>
    );
}

export default Login;
