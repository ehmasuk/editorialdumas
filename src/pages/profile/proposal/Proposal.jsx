import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { hideLoader, showLoader } from "../../../features/CombineSlice";
import ProfileLayout from "../ProfileLayout";

const allGenere = [
    "Fantasía",
    "Ciencia Ficción",
    "Misterio",
    "Suspenso",
    "Terror",
    "Romance",
    "Ficción Histórica",
    "Biografía",
    "Autoayuda",
    "Humor",
    "Juvenil",
    "Poesía",
    "Distópico",
    "Aventura",
    "Crimen",
    "No Ficción",
    "Sátira",
    "Oeste",
    "Memorias",
    "Novela Gráfica",
    "Ensayo",
    "Filosofía",
    "Religión",
    "Política",
    "Economía",
    "Arte",
    "Ciencia",
    "Viajes",
    "Cocina",
    "Manga",
    "Cómic",
    "Teatro",
    "Fantasía Épica",
];
const apiUrl = import.meta.env.VITE_REACT_APP_DEFAULT_API_ROUTE;

function Proposal() {
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [selectedType, setSelectedType] = useState(null);

    const [file, setFile] = useState(null);

    const navigate = useNavigate();

    const handleFormSubmit = async (data) => {
        dispatch(showLoader());
        const formData = new FormData();

        Object.entries(data).forEach(([key, value]) => {
            formData.append(key, value);
        });

        const userId = JSON.parse(localStorage.getItem("isLogedin")).user.id;

        file && formData.append("image_url", file);
        formData.append("user_id", userId);

        try {
            const res = await axios.post(`${apiUrl}/user/proposal`, formData, {
                Accept: "multipart/form-data",
            });
            navigate("/thankyou/sendporposal");
            toast.success("Your request of project has been submitted");
            setTimeout(() => {
                navigate("/profile/myfunds/");
            }, 5000);

            window.scrollTo(0, 0);
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong, please try again later");
        } finally {
            dispatch(hideLoader());
        }
    };

    return (
        <ProfileLayout>
            <div className="shop-bx-title clearfix">
                <h5 className="text-uppercase">ENVÍA TU PROPUESTA</h5>
            </div>
            <div>
                <form encType="multipart/form-data" onSubmit={handleSubmit(handleFormSubmit)}>
                    <div className="mb-5">
                        <h5>Título</h5>
                        <p>Escribe el título del proyecto</p>
                        <input
                            {...register("title", {
                                required: "Este campo es obligatorio",
                            })}
                            className={`form-control ${errors.title && "is-invalid"}`}
                            
                            type="text"
                        />
                        <AnimatePresence>
                            {errors.title && (
                                <motion.div
                                    exit={{ y: -10, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    initial={{ y: -30, opacity: 0 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-danger"
                                    role="alert"
                                >
                                    {errors.title.message}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className="mb-5">
                        <h5>Elige una opción</h5>
                        <p>¿Ya tienes la obra o piensas escribirla?</p>
                        <select
                            className="form-control"
                            {...register("type", {
                                required: "Este campo es obligatorio",
                                onChange: (e) => {
                                    setSelectedType(e.target.value);
                                },
                            })}
                        >
                            <option value="">Selecciona...</option>
                            <option value="already have book">Tengo un libro y quiero publicarlo</option>
                            <option value="thinking to write book">Estoy escribiendo un libro o me gustaría escribirlo</option>
                        </select>
                        <AnimatePresence>
                            {errors.type && (
                                <motion.div
                                    exit={{ y: -10, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    initial={{ y: -30, opacity: 0 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-danger"
                                    role="alert"
                                >
                                    {errors.type.message}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className="mb-5">
                        <h5>Resumen</h5>
                        <p>Introduce un breve resumen no mayor de 5 líneas de tu proyecto.</p>
                        <textarea
                            rows="5"
                            {...register("description", {
                                required: "Este campo es obligatorio",
                            })}
                            className={`form-control ${errors.description && "is-invalid"}`}
                            type="text"
                        ></textarea>
                        <AnimatePresence>
                            {errors.description && (
                                <motion.div
                                    exit={{ y: -10, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    initial={{ y: -30, opacity: 0 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-danger"
                                    role="alert"
                                >
                                    {errors.description.message}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className="mb-5">
                        <h5>Teléfono</h5>
                        <p>Ingresa tu número de teléfono activo</p>
                        <input
                            {...register("phone_no", {
                                required: "Este campo es obligatorio",
                            })}
                            className={`form-control ${errors.phone_no && "is-invalid"}`}
                            type="number"
                        />
                        <AnimatePresence>
                            {errors.phone_no && (
                                <motion.div
                                    exit={{ y: -10, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    initial={{ y: -30, opacity: 0 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-danger"
                                    role="alert"
                                >
                                    {errors.phone_no.message}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className="mb-5">
                        <h5>Selecciona el género de tu libro</h5>
                        <p>Elige un género de libro que coincida con tu libro</p>
                        <select className="form-control" {...register("genre", { required: "Este campo es obligatorio" })}>
                            <option value="">Selecciona...</option>
                            {allGenere.map((genere, index) => {
                                return (
                                    <option key={index} value={genere}>
                                        {genere}
                                    </option>
                                );
                            })}
                        </select>
                        <AnimatePresence>
                            {errors.genre && (
                                <motion.div
                                    exit={{ y: -10, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    initial={{ y: -30, opacity: 0 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-danger"
                                    role="alert"
                                >
                                    {errors.genre.message}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {selectedType == "already have book" && (
                        <div className="mb-5">
                            <h5>Sube tu libro</h5>
                            <p>Recuerda subir el archivo en formato Word New Roman Times a doble espacio. Los archivos que no cumplan este requisito no serán atendidos.</p>
                            <input accept=".docx,.pdf" className="form-control" required type="file" onChange={(e) => setFile(e.target.files[0])} />
                        </div>
                    )}

                    <div className="mb-5">
                        <h5>Un breve resumen de por qué tu proyecto es diferente.</h5>
                        <textarea
                            rows="5"
                            {...register("long_description", {
                                required: "Este campo es obligatorio",
                            })}
                            className={`form-control ${errors.brief && "is-invalid"}`}
                            placeholder="Resumen"
                            type="text"
                        ></textarea>
                        <AnimatePresence>
                            {errors.long_description && (
                                <motion.div
                                    exit={{ y: -10, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    initial={{ y: -30, opacity: 0 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-danger"
                                    role="alert"
                                >
                                    {errors.long_description.message}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <button type="submit" className="btn btn-primary btnhover">
                    Enviar
                    </button>
                </form>
            </div>
        </ProfileLayout>
    );
}

export default Proposal;
