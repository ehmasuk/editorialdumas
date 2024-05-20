import { Empty, Progress, Skeleton, Tabs, notification } from "antd";
import ReactPlayer from "react-player";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import Base from "../../layouts/Base";
import "./singleproject.css";

import axios from "axios";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";
import { IoCloseOutline } from "react-icons/io5";
import { popupInner, popupWraper } from "../../database/globalCss";
import ProjectAuthor from "./ProjectAuthor";
import ProjectComments from "./ProjectComments";
import ProjectMecanas from "./ProjectMecanas";
import ProjectPacks from "./ProjectPacks";
import useGet from "../../hooks/useGet";

const apiUrl = import.meta.env.VITE_REACT_APP_DEFAULT_API_ROUTE;

function SingleProject() {
    const { projectid } = useParams();

    const navigate = useNavigate();

    const [searchParams, setSearchParams] = useSearchParams();

    const [antNotification, contextHolder] = notification.useNotification();

    useEffect(() => {
        if (searchParams.get("payment")) {
            setTimeout(() => {
                antNotification.success({
                    message: "Pago exitoso",
                    description: "Gracias por tu contribución. Agradecemos su apoyo",
                    placement: "top",
                });
                setIsExploding(true);
            }, 1000);

            setSearchParams({});
        }
    }, []);

    const [userproject, setUserProject] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

    const getData = async () => {
        setIsLoading(true);
        try {
            const res = await axios.get(`${apiUrl}/user/crowfund_projects/${projectid}`);
            console.log(res.data);
            setUserProject(res.data);
        } catch (error) {
            console.log(error);
            navigate("/page-not-found");
        } finally {
            setIsLoading(false);
        }
    };


    useEffect(() => {
        getData();
    }, []);



    const items = [
        {
            key: "1",
            label: "Recompensas",
            children: <ProjectPacks userproject={userproject && userproject} />,
        },
        {
            key: "2",
            label: "El libro",
            children: <div style={{ fontSize: "18px" }} className="project-el-libro" dangerouslySetInnerHTML={{ __html: userproject?.book_description }}></div>,
        },
        {
            key: "3",
            label: "Lee un capítulo",
            children: (
                <div>
                    {userproject?.book_chapter ? <h3 className="text-center mb-3">Primer capítulo</h3> : <Empty />}
                    <div style={{ fontSize: "18px" }} className="project-el-libro" dangerouslySetInnerHTML={{ __html: userproject?.book_chapter }}></div>
                </div>
            ),
        },
        {
            key: "4",
            label: "El autor",
            children: <ProjectAuthor userproject={userproject && userproject} />,
        },
        {
            key: "5",
            label: "Mecenas",
            children: <ProjectMecanas userproject={userproject && userproject} />,
        },
        {
            key: "6",
            label: "Comunidad",
            children: <ProjectComments getData={getData} userproject={userproject && userproject} />,
        },
    ];

    const remainingDays = (targetDate) => {
        const givenDate = new Date(targetDate);
        const today = new Date();
        const differenceInMs = givenDate - today;
        const remainingDays = Math.ceil(differenceInMs / (1000 * 60 * 60 * 24));
        return remainingDays;
    };

    const handleTabChange = (e) => {
        setSearchParams({ tab: e });
    };

    const [showPackagePopup, setShowPackagePopup] = useState(null);

    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        const totlaAmountcal = userproject?.donations?.reduce((acc, item) => {
            acc = acc + Number(item.donation_amount);
            return acc;
        }, 0);

        setTotalAmount(totlaAmountcal);
    }, [userproject]);

    const calculateCompletion = (currentAmount, targetAmount) => {
        var completionPercentage = (currentAmount / targetAmount) * 100;
        return Math.ceil(completionPercentage);
    };

    const totalAmountGathered = (donations) => {
        var result;
        if (donations) {
            result = donations.reduce((acc, item) => {
                acc = acc + Number(item.donation_amount);
                return acc;
            }, 0);
        } else {
            result = 0.0;
        }
        return result.toFixed(2);
    };

    const [isExploding, setIsExploding] = useState(false);

    return (
        <Base>
            {contextHolder}
            <div style={{ position: "absolute", left: "50%", top: "100px" }}>{isExploding && <ConfettiExplosion duration={5000} particleSize={10} zIndex={9999} />}</div>

            <div>
                {userproject && (
                    <>
                        <div className="container content-inner-1">
                            <div className="row">
                                <div className="col-md-7">
                                    <div>
                                        <ReactPlayer width="100%" style={{ border: "1px solid #1a166821" }} controls={true} url={userproject?.images.filter((img) => img.is_video === "1")[0].url} />
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <h3>{userproject?.title}</h3>

                                    <div className="author">
                                        <p className="mb-0 mr-2">Un libro de</p>
                                        <h5 className="m-0">{userproject?.user?.name}</h5>
                                    </div>
                                    <Progress percent={calculateCompletion(totalAmount || 0, Number(userproject?.project_id) || 0)} status="active" size={["", 13]} />
                                    <p className="price">{totalAmountGathered(userproject?.donations)}€</p>
                                    <div className="d-flex justify-content-between">
                                        <p>
                                            Objetivo de <b style={{ color: "#1A1668" }}>{`${userproject?.project_id}€`}</b>
                                        </p>
                                        <p>
                                            Quedan <b style={{ color: "#1A1668" }}>{remainingDays(userproject?.target_date)} días</b>
                                        </p>
                                    </div>
                                    <button className="btn btn-primary btnhover donate-btn mb-2" onClick={() => setShowPackagePopup(!showPackagePopup)}>
                                        Hazte Mecenas
                                    </button>
                                    <p style={{ color: "#000" }}>
                                        Con el apoyo de <b>{userproject?.donations?.length} mecenas</b>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="container" style={{ paddingBottom: "100px" }}>
                            <Tabs onChange={handleTabChange} defaultActiveKey={searchParams.get("tab") || 1} animated={{ inkBar: true, tabPane: true }} centered={true} items={items} />
                        </div>
                    </>
                )}
            </div>

            {isLoading && (
                <>
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-md-7">
                                <Skeleton active />
                            </div>
                            <div className="col-md-5">
                                <Skeleton active />
                            </div>
                        </div>
                    </div>
                    <div className="container py-5">
                        <Skeleton active />
                        <Skeleton active />
                        <Skeleton active />
                    </div>
                </>
            )}

            {showPackagePopup && (
                <div style={popupWraper} className="single-project-packagePopup">
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 0.1, type: "spring" }} style={{ ...popupInner, width: "1000px", maxWidth: "95%" }}>
                        <IoCloseOutline color="red" fontSize={25} role="button" onClick={() => setShowPackagePopup(false)} style={{ position: "absolute", right: "10px", top: "10px" }} />
                        <div className="row m-0">
                            <h4 className="mb-3">Seleccione un paquete</h4>

                            {userproject?.packs?.map((pack, index) => {
                                return (
                                    <div key={index} className="col-md-6">
                                        <a href={`https://press.escuela-ray-bolivar-sosa.com/public/packinfo/${pack?.id}`}>
                                            <div className="single-popup-package">
                                                <h4>{pack?.pack_amount}€</h4>
                                                <h5>{pack?.title}</h5>
                                                <div className="pop-coverwraper">
                                                    <img src={userproject?.images.filter((img) => img.is_video === null)[0].url} alt="" />
                                                    <div className="description" dangerouslySetInnerHTML={{ __html: pack?.pack_description }}></div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            )}
        </Base>
    );
}

export default SingleProject;
