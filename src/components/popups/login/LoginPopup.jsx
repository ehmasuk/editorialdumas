import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineUserAdd } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { authCheck } from "../../../features/AuthCheckerSlice";
import { hideLoginPopup } from "../../../features/LoginPopupSlice";
import "./loginpopup.css";

function LoginPopup({ sucessredirect }) {
    const dispatch = useDispatch();
    const { loginPopupIsOpen } = useSelector((store) => store.LoginPopupSlice);

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const [loginisLoading, setLoginisLoading] = useState(false);
    const [getError, setGetError] = useState(null);

    const loginSubmit = async (data) => {
        setGetError(null);
        setLoginisLoading(true);
        try {
            const res = await axios.post("https://press.escuela-ray-bolivar-sosa.com/public/api/user/login", data);
            console.log(res);
            localStorage.setItem("isLogedin", JSON.stringify(res));
            reset();
            dispatch(authCheck());
            navigate(sucessredirect);
            dispatch(hideLoginPopup());
        } catch (error) {
            setGetError(error.response.data.message);
            console.log(error.response.data.message);
            localStorage.removeItem("isLogedin");
        } finally {
            setLoginisLoading(false);
        }
    };

    return (
        <AnimatePresence>
            {loginPopupIsOpen && (
                <div className="lms-login-popup-wraper">
                    {loginPopupIsOpen && (
                        <motion.div initial={{ y: -1000 }} animate={{ y: 0 }} exit={{ y: -1000 }} transition={{ duration: 0.5, delay: 0.1, type: "spring" }} className="lms-login-popup">
                            <div className="lms-login-body">
                                <IoCloseOutline className="fa-times" onClick={() => dispatch(hideLoginPopup())} />
                                <div className="dev-logo" style={{ fontSize: "28px" }}>
                                    editorial<p>dumas</p>
                                </div>
                                <Link className="lms-login-register-btn" to="/register" onClick={() => dispatch(hideLoginPopup())}>
                                    <AiOutlineUserAdd fontSize={22} /> Crea una cuenta ahora
                                </Link>
                                <div className="lms-login-or-devider">O</div>
                                {getError && <p className="text-danger text-center">{getError}</p>}

                                <form onSubmit={handleSubmit(loginSubmit)} className="lms-login-form-new">
                                    <div className="mb-4">
                                        <label>Email:</label>
                                        <input
                                            {...register("email", {
                                                required: "You must enter your email address",
                                            })}
                                            type="text"
                                            placeholder="Enter your email"
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
                                    <div>
                                        <label>Password:</label>
                                        <input
                                            {...register("password", {
                                                required: "You must enter your password",
                                            })}
                                            type="text"
                                            placeholder="Enter your password"
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
                                    <div className="lms-login-btn-wrap">
                                        <button className="forget-pass-btn">Recordar contraseña</button>
                                        <button disabled={loginisLoading} className="btn btn-primary btnhover me-2">
                                            <span>Login</span>
                                            {loginisLoading && <i className="fas fa-spinner fa-spin m-l10"></i>}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </motion.div>
                    )}
                </div>
            )}
        </AnimatePresence>
    );
}

export default LoginPopup;
