import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { hideLoader, showLoader } from "../../features/CombineSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
import toast from "react-hot-toast";
const apiUrl = import.meta.env.VITE_REACT_APP_DEFAULT_API_ROUTE;



function ProjectPacks({ userproject }) {
    const navigate = useNavigate();

    const customAmounts = [10, 25, 50, 100];

    const [selectedAmount, setSlectedAmount] = useState(25);


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const dispatch = useDispatch()



    const handleMessage = async (data)=>{
        dispatch(showLoader());
        console.log(data);
        try {
            await axios.post(`${apiUrl}/user/register`, data);
            toast.success("Gracias por contactarnos, responderemos dentro de las 24 horas");

        } catch (error) {
            toast.error('Algo salió mal, inténtelo de nuevo más tarde');
            console.log(error.response.data.message);
        } finally {
            dispatch(hideLoader());
        }
    }



    return (
        <div className="row">
            <div className="col-md-4">
                <div className="user-pack">
                    <div>
                        <h5>Apoya sin recompensa</h5>
                        <div className="default-price-select">
                            <ul>
                                {customAmounts.map((amount, index) => {
                                    return (
                                        <li onClick={() => setSlectedAmount(amount)} className={`${amount === selectedAmount ? "active" : ""}`} key={index}>
                                            {amount}€
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <h6>Otra cantidad:</h6>
                        <input type="number" value={selectedAmount} onChange={(e) => setSlectedAmount(e.target.value)} className="form-control" />
                        <a href={`https://press.escuela-ray-bolivar-sosa.com/public/packinfo/${userproject?.packs[0].id}?notpack=${selectedAmount}`}>
                            <button className="btn btn-primary btnhover mt-3 donate-btn" style={{ fontSize: "20px" }}>
                                APOYA CON {selectedAmount && `${selectedAmount}€`}
                            </button>
                        </a>
                        <p className="mt-2">Haz una aportación al proyecto sin recibir recompensa a cambio, simplemente porque quieres que se alcance antes el objetivo.</p>
                        <p>Tu nombre aparecerá en la página de mecenas.</p>
                    </div>
                </div>
            </div>

            {userproject?.packs?.map((pack, index) => {
                return (
                    <div key={index} className="col-md-4 mb-5">
                        <div className="user-pack">
                            <div>
                                <h4>{pack?.pack_amount}€</h4>
                                <div className="header">
                                    <a href={`https://press.escuela-ray-bolivar-sosa.com/public/packinfo/${pack?.id}`}>
                                        <p>{pack?.title}</p>
                                    </a>
                                </div>
                                <div className="pack-img mb-3">
                                    <a href={`https://press.escuela-ray-bolivar-sosa.com/public/packinfo/${pack?.id}`}>
                                        <img className="pack-cover-img" src={userproject?.images.filter((img) => img.is_video === null)[0].url} alt="" />
                                    </a>
                                </div>
                                <div className="body" dangerouslySetInnerHTML={{ __html: pack?.pack_description }}></div>
                            </div>
                            <div className="footer">
                                <a href={`https://press.escuela-ray-bolivar-sosa.com/public/packinfo/${pack?.id}`}>
                                    <button className="btn btn-primary btnhover mt-3 donate-btn" style={{ fontSize: "20px" }}>
                                        APOYA CON {pack?.pack_amount}€
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                );
            })}

            {/* <div className="col-md-4">
                <div className="user-pack">
                    <form onSubmit={handleSubmit(handleMessage)}>
                        <h5>PATROCINA ESTE PROYECTO</h5>
                        <p>Si eres una empresa u organización y quieres unirte a este proyecto de una manera especial, rellena este formulario:</p>
                        <div className="mt-3">
                            <h6>Nombre de la organización</h6>
                            <input 
                            {...register("name", {
                                required: "Este campo es obligatorio",
                            })}
                            type="text" className="form-control" style={{height:'auto',padding:'5px 10px'}} />
                            {errors.name && <small className="text-danger" role="alert">{errors.name.message}</small>}
                        </div>
                        <div className="mt-3">
                            <h6>Persona de contacto</h6>
                            <input
                            {...register("name", {
                                required: "Este campo es obligatorio",
                            })}
                            type="number" className="form-control" style={{height:'auto',padding:'5px 10px'}} />
                            {errors.name && <small className="text-danger" role="alert">{errors.name.message}</small>}
                        </div>
                        <div className="mt-3">
                            <h6>Email de contacto</h6>
                            <input
                            {...register("name", {
                                required: "Este campo es obligatorio",
                            })}
                            type="email" className="form-control" style={{height:'auto',padding:'5px 10px'}} />
                            {errors.name && <small className="text-danger" role="alert">{errors.name.message}</small>}
                        </div>
                        <div className="mt-3">
                            <h6>Presupuesto estimado</h6>
                            <input
                            {...register("name", {
                                required: "Este campo es obligatorio",
                            })}
                            type="number" className="form-control" style={{height:'auto',padding:'5px 10px'}} />
                            {errors.name && <small className="text-danger" role="alert">{errors.name.message}</small>}
                        </div>
                        <div className="mt-3">
                            <h6>Comentarios</h6>
                            <textarea
                            {...register("name", {
                                required: "Este campo es obligatorio",
                            })}
                            rows={4} className="form-control" style={{height:'auto',padding:'5px 10px'}}></textarea>
                            {errors.name && <small className="text-danger" role="alert">{errors.name.message}</small>}
                        </div>
                        <button className="btn btn-primary mt-3 w-100">Solicitar información</button>
                    </form>
                </div>
            </div> */}



        </div>
    );
}

export default ProjectPacks;
