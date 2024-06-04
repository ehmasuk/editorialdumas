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
        "Creación de email marketing 1 envío/mes",
        "Posicionamiento SEO 4 artículos/mes",
        "SEO del blog",
        "20 publicaciones/mes redes FB instagram",
        "Publicidad en redes FB/TIKTOK",
        "Publicidad en Amazon",
        "Creamos tu branding",
        "Manejamos tu reputación online",
        "Incremento de ventas 5 – 10%",
        "Utilizaremos el dinero para crear tu marca",
        "Servicio mínimo por 3 meses",
    ],
    [
        "Creación de email marketing 1 envío/mes",
        "Posicionamiento SEO 4 artículos/mes",
        "SEO del blog",
        "20 publicaciones/mes redes FB instagram",
        "Publicidad en redes FB/TIKTOK",
        "Publicidad en Amazon",
        "Creamos tu branding",
        "Manejamos tu reputación online",
        "Incremento de ventas 5 – 10%",
        "Utilizaremos el dinero para crear tu marca",
        "Servicio mínimo por 3 meses",
    ],
    [
        "Creación de email marketing 1 envío/mes",
        "Posicionamiento SEO 4 artículos/mes",
        "SEO del blog",
        "20 publicaciones/mes redes FB instagram",
        "Publicidad en redes FB/TIKTOK",
        "Publicidad en Amazon",
        "Creamos tu branding",
        "Manejamos tu reputación online",
        "Incremento de ventas 5 – 10%",
        "Utilizaremos el dinero para crear tu marca",
        "Servicio mínimo por 3 meses",
    ],
    [
        "Creación de email marketing 1 envío/mes",
        "Posicionamiento SEO 4 artículos/mes",
        "SEO del blog",
        "20 publicaciones/mes redes FB instagram",
        "Publicidad en redes FB/TIKTOK",
        "Publicidad en Amazon",
        "Creamos tu branding",
        "Manejamos tu reputación online",
        "Incremento de ventas 5 – 10%",
        "Utilizaremos el dinero para crear tu marca",
        "Servicio mínimo por 3 meses",
    ],
];
const packMonths = [3, 6, 9, 12];
const packPrices = [1500, 3000, 4500, 6000];

function EditSellBooksFund({ prevContent, dataFromGet, setDataFromGet, setCurrentStep, getPrevData }) {
    useEffect(() => {
        getPrevData();
    }, []);

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

    prevContent && console.log(prevContent);

    const handleChange = (e) => {
        if (e.target.value == packPrices[0]) {
            setUserData({ ...userData, sell_book: packPrices[0] });
        }
        if (e.target.value == packPrices[1]) {
            setUserData({ ...userData, sell_book: packPrices[1] });
        }
        if (e.target.value == packPrices[2]) {
            setUserData({ ...userData, sell_book: packPrices[2] });
        }
        if (e.target.value == packPrices[3]) {
            setUserData({ ...userData, sell_book: packPrices[3] });
        }
    };

    const dispatch = useDispatch();

    const handleStep = async () => {
        dispatch(showLoader());

        try {
            const res = await axios.post(`${apiUrl}/user/project`, userData);
            setDataFromGet(res.data);
            setCurrentStep(4);
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
                    <Radio.Group className="w-100 fund-package-select" onChange={handleChange} value={Number(userData?.sell_book)}>
                        <div className="row">
                            <div className="col-md-3">
                                <Radio value={packPrices[0]} className="pack-radio-1">
                                    <div className="package-card">
                                        <div className="header">
                                            <p className="title">3 meses de publicidad</p>
                                            <p className="price">{packPrices[0]}€</p>
                                        </div>
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
                                    <Badge.Ribbon text="Más vendido" color="orange">
                                        <div className="package-card">
                                            <div className="header">
                                                <p className="title">6 meses de publicidad</p>
                                                <p className="price">{packPrices[1]}€</p>
                                            </div>
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
                                                <p className="title">9 meses de publicidad</p>
                                                <p className="price">{packPrices[2]}€</p>
                                            </div>
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
                                            <p className="title">
                                                1 año <br /> de publicidad
                                            </p>
                                            <p className="price">{packPrices[3]}€</p>
                                        </div>
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

export default EditSellBooksFund;
