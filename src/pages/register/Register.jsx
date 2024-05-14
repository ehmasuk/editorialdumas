import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authCheck } from "../../features/AuthCheckerSlice";
import { hideLoader, showLoader } from "../../features/CombineSlice";
import Base from "../../layouts/Base";

const apiUrl = import.meta.env.VITE_REACT_APP_DEFAULT_API_ROUTE;

function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [regisLoading, setRegisLoading] = useState(false);

    const handleRegister = async (data) => {
        dispatch(showLoader());
        setRegisLoading(true);
        try {
            const res = await axios.post(`${apiUrl}/user/register`, data);
            navigate("/thankyou/register");
            window.scrollTo(0, 0);
            toast.success("Registro exitoso");
            setTimeout(() => {
                localStorage.setItem("isLogedin", JSON.stringify(res.data));
                dispatch(authCheck());
                navigate("/profile");
            }, 5000);
        } catch (error) {
            toast.error(error.response.data.message);
            console.log(error.response.data.message);
            localStorage.removeItem("isLogedin");
        } finally {
            setRegisLoading(false);
            dispatch(hideLoader());
        }
    };

    return (
        <Base>
            <div className="page-content">
                <section className="content-inner shop-account">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-6 mb-4">
                                <div className="login-area">
                                    <form onSubmit={handleSubmit(handleRegister)}>
                                        <h4 className="text-secondary">Registro</h4>
                                        <p className="font-weight-600">Si no tiene una cuenta con nosotros, por favor registre.</p>
                                        <div className="mb-4">
                                            <label className="label-title">Nombre de usuario </label>
                                            <input
                                                {...register("name", {
                                                    required: "Debes ingresar tu nombre",
                                                })}
                                                className="form-control"
                                                placeholder="Su nombre de usuario"
                                                type="text"
                                            />
                                            <AnimatePresence>
                                                {errors.name && (
                                                    <motion.div
                                                        exit={{ y: -10, opacity: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                        initial={{ y: -30, opacity: 0 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        className="text-danger"
                                                        role="alert"
                                                    >
                                                        {errors.name.message}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                        <div className="mb-4">
                                            <label className="label-title">Dirección de email </label>
                                            <input
                                                {...register("email", {
                                                    required: "Debe ingresar su dirección de email",
                                                })}
                                                className="form-control"
                                                placeholder="Su dirección de email"
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
                                            <label className="label-title">Contraseña </label>
                                            <input
                                                {...register("password", {
                                                    required: "Debe ingresar su contraseña",
                                                })}
                                                className="form-control "
                                                placeholder="Escriba contraseña"
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
                                        <div className="mb-4">
                                            <label className="label-title">Confirmar Contraseña </label>
                                            <input {...register("password_confirmation")} className="form-control " placeholder="Escriba contraseña" type="password" />
                                        </div>
                                        <div className="mb-5">
                                            <small>
Sus datos personales se utilizarán para apoyar su experiencia en este sitio web, para administrar el acceso a su cuenta y para otros fines descritos en nuestra Política de privacidad
                                            </small>
                                        </div>
                                        <div className="text-left">
                                            <button disabled={regisLoading} className="btn btn-primary btnhover w-100 me-2">
                                                <span>Registro</span>
                                                {regisLoading && <i className="fas fa-spinner fa-spin m-l10"></i>}
                                            </button>
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
