import { Button, Tooltip } from "antd";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { RiDownload2Fill } from "react-icons/ri";
import TipTap from "../../components/editor/TipTap";
import ProgressLoader from "../../components/progressLoader/ProgressLoader";

const apiUrl = import.meta.env.VITE_REACT_APP_DEFAULT_API_ROUTE;

function AddFundInfo({ dataFromGet, setDataFromGet, setCurrentStep }) {
    const [des, setDes] = useState(null);
    const [chapter, setChapter] = useState(null);

    const handleBookDes = (data) => {
        setDes(data);
    };

    const handleBookChapter = (data) => {
        setChapter(data);
    };

    const userId = JSON.parse(localStorage.getItem("isLogedin")).user.id;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [progressPercentage, setProgressPercentage] = useState(0);
    const [isLoading, setIsLoading] = useState(null);

    const handleFormSubmit = (data) => {
        const formData = new FormData();

        Object.entries(data).forEach(([key, value]) => {
            formData.set(key, value);
        });
        formData.set("user_id", userId);
        formData.set("image_url", data.image_url[0]);
        formData.set("video_url", data.video_url[0]);

        if (des) {
            formData.set("book_description", des);
            formData.set("book_chapter", chapter);
            formData.set("book_id", dataFromGet.id);
            formData.set("project_id", dataFromGet.project_id);
            formData.set("project_name", dataFromGet.project_name);

            postData(formData);
            for (var pair of formData.entries()) {
                console.log(pair[0] + ", " + pair[1]);
            }
        } else {
            toast.error("Complete todas las informaciones");
        }
    };

    const postData = async (formData) => {
        const config = {
            onUploadProgress: (progressEvent) => {
                setProgressPercentage(Math.floor(progressEvent.progress * 100));
                if (progressEvent.progress == 1) {
                    setIsLoading(false);
                    setCurrentStep(2);
                }
            },
        };

        setIsLoading(true);
        try {
            const res = await axios.post(`${apiUrl}/user/project`, formData, config);
            console.log(res);
            setDataFromGet(res.data);
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong, please try again later");
        }
    };

    return (
        <div className="addfund">
            {isLoading && <ProgressLoader percentage={progressPercentage} />}

            <div className="container">
                <div className="fund-form">
                    <h4 className="mb-3">Información básica sobre tu libro</h4>
                    <div className="mb-5">
                        <div className="basic">
                            Completa la información sobre tu libro. Esta plantilla te ayudará a rellenar la información{" "}
                            <Tooltip title="Descarga un modelo que puedes utilizar">
                                <a download href="https://editorialdumas.com/download/profileTutorial/el_libro_Crowdfunding-exitosoc%C3%B3mo-hacerlo.docx" target="_blank" rel="noreferrer">
                                    <Button type="primary" icon={<RiDownload2Fill fontSize={16} style={{ marginTop: "-4px" }} />} size="small">
                                        Descargar
                                    </Button>
                                </a>
                            </Tooltip>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit(handleFormSubmit)}>
                        <div className="mt-5">
                            <div className="mb-4">
                                <label className="bolden">Titulo del libro</label>
                                <p className="tiny">Agrega el título provisional del libro, después podrás cambiarlo</p>
                                <input
                                    name="title"
                                    {...register("title", {
                                        required: "Este campo es obligatorio",
                                    })}
                                    type="text"
                                    className={`form-control ${errors.title && "is-invalid"}`}
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
                            <div className="mb-4">
                                <label className="bolden">Descripción del libro</label>
                                <p className="tiny">Describe el libro, no olvides que puedes auxiliarte en la plantilla anterior.</p>
                                <TipTap getEditorData={handleBookDes} />
                            </div>
                            <div className="mb-4">
                                <label className="bolden">Primer capítulo del libro</label>
                                <p className="tiny">Por favor suba el primer capítulo de la obra o el primer folio.</p>
                                <TipTap getEditorData={handleBookChapter} />
                            </div>
                            <div className="mb-4">
                                <label className="bolden">Imagen de libro</label>
                                <div className="tiny mb-3">
                                    Sube la portada provisional o una imagen. En caso de que no tengas una portada utiliza una plantilla de {" "}
                                    <a href="https://www.canva.com/" target="_blank" rel="noreferrer">
                                        Canvas.
                                    </a>
                                </div>

                                <input
                                    accept=".png,.jpg,.jpeg"
                                    type="file"
                                    {...register("image_url", {
                                        required: "Este campo es obligatorio",
                                    })}
                                    className={`form-control ${errors.image_url && "is-invalid"}`}
                                />
                                <AnimatePresence>
                                    {errors.image_url && (
                                        <motion.div
                                            exit={{ y: -10, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            initial={{ y: -30, opacity: 0 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-danger"
                                            role="alert"
                                        >
                                            {errors.image_url.message}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                            <div className="mb-4">
                                <label className="bolden">Video de libro</label>
                                <div className="tiny mb-3">
                                    Puedes auxiliarte en esta plantilla. {" "}
                                    <Tooltip title="Descarga un modelo que puedes utilizar">
                                        <a download href="https://editorialdumas.com/download/profileTutorial/Video-y-propuesta.docx" target="_blank" rel="noreferrer">
                                            <Button type="primary" icon={<RiDownload2Fill fontSize={16} style={{ marginTop: "-4px" }} />} size="small">
                                                Descargar
                                            </Button>
                                        </a>
                                    </Tooltip>
                                </div>
                                <input
                                    accept=".mp4,.mov,.avi,.wmv,.webm,.flv"
                                    type="file"
                                    {...register("video_url", {
                                        required: "Este campo es obligatorio",
                                    })}
                                    className={`form-control ${errors.video_url && "is-invalid"}`}
                                />
                                <AnimatePresence>
                                    {errors.video_url && (
                                        <motion.div
                                            exit={{ y: -10, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            initial={{ y: -30, opacity: 0 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-danger"
                                            role="alert"
                                        >
                                            {errors.video_url.message}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                        <div className="d-flex justify-content-end">
                            <button className="btn btn-primary btnhover mt-3">Guardar y continuar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddFundInfo;
