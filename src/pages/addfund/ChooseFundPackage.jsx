import { useState } from "react";

import { Badge, Radio } from "antd";
import axios from "axios";
import toast from "react-hot-toast";
import { FaRegCircleCheck } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { hideLoader, showLoader } from "../../features/CombineSlice";
import "./addfund.css";

const apiUrl = import.meta.env.VITE_REACT_APP_DEFAULT_API_ROUTE;

const packPoints = [
    [
        "Acceso a un curso de escritura por un año.",
        "6 consultas para escribir una novela enfocada en el cine",
        "Formateo del trabajo",
        "Publicación en Amazon e internacionalmente",
        "Edición y corrección de pruebas del trabajo",
        "Creación de portada",
        "Creación de tráiler del libro",
    ],
    ["Formateo del trabajo", "Publicación en Amazon e internacionalmente", "Edición y corrección de pruebas del trabajo", "Creación de portada", "Creación de tráiler del libro", "Creación de blog"],
    [
        "Formateo del trabajo",
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
        "Formateo del trabajo",
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

function ChooseFundPackage({ dataFromGet, setDataFromGet, setCurrentStep }) {
    const [selectedPackage, setSelectedPackage] = useState(null);

    const [userData, setUserData] = useState({ book_id: null });

    const handleChange = (e) => {
        setSelectedPackage(e.target.value);
        if (e.target.value == 599) {
            setUserData({ ...userData, project_id: e.target.value, project_name: "Writing and Publishing of a Novel 599€" });
        }
        if (e.target.value == 699) {
            setUserData({ ...userData, project_id: e.target.value, project_name: "Basic Publication 699€" });
        }
        if (e.target.value == 899) {
            setUserData({ ...userData, project_id: e.target.value, project_name: "Medium Reach Publication 899€" });
        }
        if (e.target.value == 1499) {
            setUserData({ ...userData, project_id: e.target.value, project_name: "Extended Reach Publication 1499€" });
        }
    };

    const dispatch = useDispatch();

    const userId = JSON.parse(localStorage.getItem("isLogedin")).user.id;

    const handleStep = async () => {
        if (selectedPackage) {
            dispatch(showLoader());
            try {
                const res = await axios.post(`${apiUrl}/user/project`, { ...userData, user_id: userId });
                setDataFromGet(res.data);
                setCurrentStep(1);
            } catch (error) {
                console.log(error);
                toast.error("Something went wrong, please try again later");
            } finally {
                dispatch(hideLoader());
            }
        } else {
            toast.error("No package selected");
        }
    };

    return (
        <div style={{ marginTop: "50px" }}>
            <Radio.Group className="w-100 fund-package-select" onChange={handleChange}>
                <div className="row">
                    <div className="col-md-3">
                        <Radio value={599} className="pack-radio-1">
                            <div className="package-card">
                                <div className="header">
                                    <p className="title">Inicial</p>
                                    <p className="price">599€</p>
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
                        <Radio value={699} className="pack-radio-2">
                            <Badge.Ribbon text="Mejor vendido" color="orange">
                                <div className="package-card">
                                    <div className="header">
                                        <p className="title">Básico</p>
                                        <p className="price">699€</p>
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
                        <Radio value={899} className="pack-radio-3">
                            <Badge.Ribbon text="Popular" color="pink">
                                <div className="package-card">
                                    <div className="header">
                                        <p className="title">Avanzado</p>
                                        <p className="price">899€</p>
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
                        <Radio value={1499} className="pack-radio-4">
                            <div className="package-card">
                                <div className="header">
                                    <p className="title">Profesional</p>
                                    <p className="price">1499€</p>
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
        </div>
    );
}

export default ChooseFundPackage;
