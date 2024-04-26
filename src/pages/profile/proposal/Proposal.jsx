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

        const userId = JSON.parse(localStorage.getItem("isLogedin")).data.user.id;

        file && formData.append("image_url", file);
        formData.append("user_id", userId);

        try {
            const res = await axios.post(`${apiUrl}/user/proposal`, formData, {
                Accept: "multipart/form-data",
            });
            console.log(res);
            toast.success("Your request of project has been submitted");
            navigate("/profile/myfunds/");
            window.scrollTo(0, 0);
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
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
                        <h5>Title</h5>
                        <p>Enter title of the project</p>
                        <input
                            {...register("title", {
                                required: "You must enter your project title",
                            })}
                            className={`form-control ${errors.title && "is-invalid"}`}
                            placeholder="Your title Id"
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
                        <h5>Select your type</h5>
                        <p>Choose your proposal type</p>
                        <select
                            className="form-control"
                            {...register("type", {
                                required: "You must select type",
                                onChange: (e) => {
                                    setSelectedType(e.target.value);
                                },
                            })}
                        >
                            <option value="">Select...</option>
                            <option value="already have book">I already have a book</option>
                            <option value="thinking to write book">I am thinking to write a book</option>
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
                        <h5>Summary</h5>
                        <p>Enter clear narrative summary of 5 lines</p>
                        <textarea
                            rows="5"
                            {...register("description", {
                                required: "You must enter your description",
                            })}
                            className={`form-control ${errors.description && "is-invalid"}`}
                            placeholder="Your description"
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
                        <h5>Phone</h5>
                        <p>Choose your phone number</p>
                        <input
                            {...register("phone_no", {
                                required: "You must enter your phone",
                            })}
                            className={`form-control ${errors.phone_no && "is-invalid"}`}
                            placeholder="Your phone"
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
                        <h5>Select your book genre</h5>
                        <p>Choose your book genre</p>
                        <select className="form-control" {...register("genre", { required: "You must select genre" })}>
                            <option value="">Select...</option>
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
                            <h5>Upload your book</h5>
                            <p>Upload your book</p>
                            <input accept=".docx,.pdf" className="form-control" required type="file" onChange={(e) => setFile(e.target.files[0])} />
                        </div>
                    )}

                    <div className="mb-5">
                        <h5>A brief summary of why your project is different.</h5>
                        <p>A brief summary of why your project is different.</p>
                        <textarea
                            rows="5"
                            {...register("long_description", {
                                required: "You must enter your brief",
                            })}
                            className={`form-control ${errors.brief && "is-invalid"}`}
                            placeholder="Your description"
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
                        Submit
                    </button>
                </form>
            </div>
        </ProfileLayout>
    );
}

export default Proposal;
