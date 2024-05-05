import { AnimatePresence, motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Base from "../../layouts/Base";
import { hideLoader, showLoader } from "../../features/CombineSlice";
import toast from "react-hot-toast";
import axios from "axios";


const apiUrl = import.meta.env.VITE_REACT_APP_DEFAULT_API_ROUTE;

function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const dispatch = useDispatch();

    const handleRegister = async (data) => {
        dispatch(showLoader());

        try {
            const res = await axios.post(`${apiUrl}/user/contactus`, data);
            toast.success('Message sent');
            console.log(res);
        } catch (error) {
            toast.error(error.response.data.message);
        } finally {
            dispatch(hideLoader());
        }
        console.log(data);
    };

    return (
        <Base>
            <div className="page-content">
                <section className="contact-wraper1" style={{ backgroundImage: "url(images/background/bg2.jpg)" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="contact-info">
                                    <div className="section-head text-white style-1">
                                        <h3 className="title text-white">Ponte en contacto</h3>
                                        <p>Si tienes algún tipo de confusión o necesitas ayuda, por favor ponte en contacto.</p>
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
                                                <h5 className=" dz-tilte text-white">Nuestra dirección</h5>
                                                <p>José del hierro 45, 2B. Madrid</p>
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
                                                <h5 className="dz-tilte text-white">Nuestro Email</h5>
                                                <p>
                                                info@editorial.com
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-7 m-b40">
                                <div className="contact-area1 m-r20 m-md-r0">
                                    <div className="section-head style-1">
                                        <h6 className="sub-title text-primary">CONTÁCTANOS</h6>
                                        <h3 className="title m-b20">Ponerse en contacto</h3>
                                    </div>
                                    <form className="dz-form dzForm" onSubmit={handleSubmit(handleRegister)}>
                                        <div className="input-group">
                                            <input
                                                type="text"
                                                {...register("name", {
                                                    required: "Este campo es obligatorio",
                                                })}
                                                className="form-control"
                                                placeholder="Nombre completo"
                                            />
                                        </div>
                                        <AnimatePresence>
                                            {errors.name && (
                                                <motion.p
                                                    exit={{ y: -10, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    initial={{ y: -30, opacity: 0 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="text-danger"
                                                    role="alert"
                                                >
                                                    {errors.name.message}
                                                </motion.p>
                                            )}
                                        </AnimatePresence>
                                        <div className="input-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                {...register("email", {
                                                    required: "Este campo es obligatorio",
                                                })}
                                                placeholder="Email"
                                            />
                                        </div>
                                        <div className="input-group">
                                            <input type="number" className="form-control" {...register("phone_no")} placeholder="Teléfono" />
                                        </div>
                                        <AnimatePresence>
                                            {errors.email && (
                                                <motion.p
                                                    exit={{ y: -10, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    initial={{ y: -30, opacity: 0 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="text-danger"
                                                    role="alert"
                                                >
                                                    {errors.email.message}
                                                </motion.p>
                                            )}
                                        </AnimatePresence>
                                        <div className="input-group">
                                            <textarea
                                                {...register("description", {
                                                    required: "Este campo es obligatorio",
                                                })}
                                                rows={5}
                                                className="form-control"
                                                placeholder="Tu mensaje"
                                            />
                                        </div>
                                        <AnimatePresence>
                                            {errors.description && (
                                                <motion.p
                                                    exit={{ y: -10, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    initial={{ y: -30, opacity: 0 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="text-danger"
                                                    role="alert"
                                                >
                                                    {errors.description.message}
                                                </motion.p>
                                            )}
                                        </AnimatePresence>

                                        <div>
                                            <button name="submit" type="submit" value="submit" className="btn w-100 btn-primary btnhover">
                                            ENVIAR
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

export default Contact;
