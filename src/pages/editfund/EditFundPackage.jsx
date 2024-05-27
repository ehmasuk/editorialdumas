import { useEffect, useState } from "react";

import { Badge, Radio, Skeleton } from "antd";
import axios from "axios";
import toast from "react-hot-toast";
import { FaRegCircleCheck } from "react-icons/fa6";
import { useDispatch } from "react-redux";

import { hideLoader, showLoader } from "../../features/CombineSlice";
import "./editfund.css";

const apiUrl = import.meta.env.VITE_REACT_APP_DEFAULT_API_ROUTE;

const packPoints = [
    [
        "Acceso a un curso de escritura por un año.",
        "6 consultas para escribir una novela enfocada en el cine",
        "Maquetación de la obra",
        "Publicación en Amazon e internacionalmente",
        "Edición y corrección de pruebas del trabajo",
        "Creación de portada",
        "Creación de tráiler del libro",
    ],
    ["Maquetación de la obra", "Publicación en Amazon e internacionalmente", "Edición y corrección de pruebas del trabajo", "Creación de portada", "Creación de tráiler del libro", "Creación de blog"],
    [
        "Maquetación de la obra",
        "Publicación en Amazon e internacionalmente",
        "Edición y corrección de pruebas del trabajo",
        "Creación de portada",
        "Creación de tráiler del libro",
        "Creación de blog",
        "5 copias del autor",
        "ISBN nacional",
        "Creación de perfiles en Facebook, Instagram",
        "Envío de correo electrónico a 20,000 usuarios",
    ],
    [
        "Maquetación de la obra",
        "Publicación en Amazon e internacionalmente",
        "Edición y corrección de pruebas del trabajo",
        "Creación de portada",
        "Creación de tráiler del libro",
        "Creación de blog",
        "5 copias del autor",
        "ISBN nacional",
        "Creación de perfiles en Facebook, Instagram",
        "Envío de correo electrónico a 40,000 usuarios",
        "Presentación en Madrid",
        "Aparición en periódicos digitales",
    ],
];

function EditFundPackage({ prevContent, dataFromGet, setDataFromGet, setCurrentStep }) {

    const packPrices = [699,799,899,1699]

    const [userData, setUserData] = useState(null);

    useEffect(() => {
        prevContent &&
            setUserData({
                project_id: prevContent?.project_id,
                project_name: prevContent?.project_name,
                user_id: prevContent?.user?.id,
                book_id: prevContent?.id,
                book_description: prevContent?.book_description,
                book_chapter: prevContent?.book_chapter,
                title: prevContent?.title,
                sell_book: prevContent?.sell_book,
            });
    }, [prevContent]);

    


    const handleChange = (e) => {
        if (e.target.value == packPrices[0]) {
            setUserData({ ...userData, project_id: e.target.value, project_name: `Writing and Publishing of a Novel ${packPrices[0]}€` });
        }
        if (e.target.value == packPrices[1]) {
            setUserData({ ...userData, project_id: e.target.value, project_name: `Basic Publication ${packPrices[1]}€` });
        }
        if (e.target.value == packPrices[2]) {
            setUserData({ ...userData, project_id: e.target.value, project_name: `Medium Reach Publication ${packPrices[2]}€` });
        }
        if (e.target.value == packPrices[3]) {
            setUserData({ ...userData, project_id: e.target.value, project_name: `Extended Reach Publication ${packPrices[3]}€` });
        }
    };

    const dispatch = useDispatch();

    const handleStep = async () => {
        dispatch(showLoader());

        try {
            const res = await axios.post(`${apiUrl}/user/project`, userData);
            setDataFromGet(res.data);
            setCurrentStep(1);
        } catch (error) {
            console.log(error);
            toast.error("Algo salió mal, por favor inténtalo de nuevo más tarde");
        } finally {
            dispatch(hideLoader());
        }
    };





    return (
        <div style={{ marginTop: "20px" }}>
            <h5>Seleccione el paquete perfecto para su libro y haga clic en Siguiente</h5>
            <hr />
            {userData && (
                <>
                    <Radio.Group className="w-100 fund-package-select" onChange={handleChange} value={Number(userData?.project_id)}>
                        <div className="row">
                            <div className="col-md-3">
                                <Radio value={packPrices[0]} className="pack-radio-1">
                                    <div className="package-card">
                                        <div className="header">
                                            <p className="title">Inicial</p>
                                            <p className="price">{packPrices[0]}€</p>
                                        </div>
                                        <p className="desc">Escritura y publicación de una novela</p>
                                        <ul className="lists">
                                            {packPoints[0].map((point, index) => {
                                                return (
                                                    <li key={index} className="list">
                                                        <FaRegCircleCheck />
                                                        <p>{point}</p>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </Radio>
                            </div>

                            <div className="col-md-3">
                                <Radio value={packPrices[1]} className="pack-radio-2">
                                    <Badge.Ribbon text="Mejor vendido" color="orange">
                                        <div className="package-card">
                                            <div className="header">
                                                <p className="title">Básico</p>
                                                <p className="price">{packPrices[1]}€</p>
                                            </div>
                                            <p className="desc">Publicación básica</p>
                                            <ul className="lists">
                                                {packPoints[1].map((point, index) => {
                                                    return (
                                                        <li key={index} className="list">
                                                            <FaRegCircleCheck />
                                                            <p>{point}</p>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </div>
                                    </Badge.Ribbon>
                                </Radio>
                            </div>
                            <div className="col-md-3">
                                <Radio value={packPrices[2]} className="pack-radio-3">
                                    <Badge.Ribbon text="Popular" color="pink">
                                        <div className="package-card">
                                            <div className="header">
                                                <p className="title">Avanzado</p>
                                                <p className="price">{packPrices[2]}€</p>
                                            </div>
                                            <p className="desc">Publicación de alcance medio</p>
                                            <ul className="lists">
                                                {packPoints[2].map((point, index) => {
                                                    return (
                                                        <li key={index} className="list">
                                                            <FaRegCircleCheck />
                                                            <p>{point}</p>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </div>
                                    </Badge.Ribbon>
                                </Radio>
                            </div>
                            <div className="col-md-3">
                                <Radio value={packPrices[3]} className="pack-radio-4">
                                    <div className="package-card">
                                        <div className="header">
                                            <p className="title">Profesional</p>
                                            <p className="price">{packPrices[3]}€</p>
                                        </div>
                                        <p className="desc">Publicación de alcance ampliado</p>
                                        <ul className="lists">
                                            {packPoints[3].map((point, index) => {
                                                return (
                                                    <li key={index} className="list">
                                                        <FaRegCircleCheck />
                                                        <p>{point}</p>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </Radio>
                            </div>
                        </div>
                    </Radio.Group>

                    <div className="d-flex justify-content-end">
                        <button onClick={handleStep} className="btn btn-primary btnhover mt-3">
                            Siguiente
                        </button>
                    </div>
                </>
            )}

            {!userData && (
                <div className="row">
                    <div className="col-md-3">
                        <Skeleton paragraph={{ rows: 20 }} active />
                    </div>
                    <div className="col-md-3">
                        <Skeleton paragraph={{ rows: 20 }} active />
                    </div>
                    <div className="col-md-3">
                        <Skeleton paragraph={{ rows: 20 }} active />
                    </div>
                    <div className="col-md-3">
                        <Skeleton paragraph={{ rows: 20 }} active />
                    </div>
                </div>
            )}
        </div>
    );
}

export default EditFundPackage;
