import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { TfiEmail } from "react-icons/tfi";
import { Link } from "react-router-dom";
import usePost from "../../hooks/usePost";

function NewsLatter() {
    const onSuccess = () => {
        reset();
        toast.success("Su email ha sido suscrito con éxito");
    };

    const [postData] = usePost("/user/subscriber", onSuccess);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const handleEmailSubmit = async (data) => {
        postData(data);
    };

    return (
        <section className="py-5 newsletter-wrapper" style={{ background: "#1A1668" }}>
            <div className="container">
                <div className="subscride-inner">
                    <div className="">
                        <div style={{ display: "grid", gridTemplateColumns: "100px auto" }}>
                            <TfiEmail fontSize={70} color="#fff" style={{ marginRight: "20px" }} />
                            <div className="section-head mb-0">
                                <h2 className="title text-white">Recibe nuestras novedades en tu email</h2>

                                <div style={{ marginBottom: "20px", color: "#fff" }}>
                                    <small style={{ fontSize: "12px" }}>
                                        EDITORIAL DUMAS tratará tus datos personales para informarte de nuestras novedades y descuentos. Conservaremos tus datos mientras no te des de baja o nos
                                        solicites su supresión. Podrás ejercer los derechos de acceso, supresión, rectificación, oposición, limitación y portabilidad, remite un email a{" "}
                                        <Link to="/contact" style={{ color: "#EAA451" }}>
                                            editorialdumas.com
                                        </Link>{" "}
                                        asunto BAJA. Asimismo, también puedes darte de baja desde nuestro boletín.
                                    </small>
                                </div>

                                <form className="dzSubscribe style-1" onSubmit={handleSubmit(handleEmailSubmit)}>
                                    <div className="dzSubscribeMsg" />
                                    <div className="form-group">
                                        <div className="input-group mb-0" style={{ maxWidth: "500px" }}>
                                            <input
                                                {...register("email", {
                                                    required: true,
                                                    pattern: {
                                                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                                        message: "Por favor introduzca una dirección de email válida",
                                                    },
                                                })}
                                                type="email"
                                                className="form-control bg-transparent text-white"
                                                placeholder="Escribe tu email"
                                            />

                                            <div className="input-group-addon">
                                                <button name="submit" value="Submit" type="submit" className="btn btn-primary btnhover">
                                                    <span>SUSCRIBIR</span>
                                                    <i className="fa-solid fa-paper-plane" />
                                                </button>
                                            </div>
                                        </div>

                                        <p className="text-danger">{errors?.email?.message}</p>
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
