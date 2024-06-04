import { Alert, Badge, Button, Dropdown, Empty, Skeleton } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { GrFormView } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import ProfileLayout from "../ProfileLayout";
import "./myfunds.css";

import { CiEdit } from "react-icons/ci";
import { HiDotsVertical } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { hideLoader, showLoader } from "../../../features/CombineSlice";
const apiUrl = import.meta.env.VITE_REACT_APP_DEFAULT_API_ROUTE;

function MyFunds() {
    const userId = JSON.parse(localStorage.getItem("isLogedin")).user.id;

    const [allProjects, setAllProjects] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

    const getData = async () => {
        setIsLoading(true);
        try {
            const res = await axios.get(`${apiUrl}/user/project?user_id=${userId}`);
            console.log(res.data.user_projects);

            const validData = res.data.user_projects.filter((project) => {
                return project.packs.length > 0;
            });

            setAllProjects(validData);

            console.log(res.data.user_projects);
        } catch (error) {
            console.log(error);
            toast.error("Algo salió mal, inténtelo de nuevo más tarde");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleOnAccept = async (id) => {
        dispatch(showLoader());
        try {
            axios.put(apiUrl + "/user/project/" + id);
            setTimeout(() => {
                dispatch(hideLoader());
                navigate("/project/" + id);
                toast.success('Proyecto activado')
            }, 1000);
        } catch (error) {
            console.log(error);
            dispatch(hideLoader());
        }
    };

    return (
        <ProfileLayout>
            <div className="shop-bx-title clearfix">
                <div className="d-flex align-items-center justify-content-between">
                    <h5 className="text-uppercase">Tus fondos</h5>
                </div>
            </div>

            <div className="row">
                {allProjects?.map((project, index) => {
                    return (
                        <div key={index} className="col-md-4 mb-5 my-fund-wraper">
                            <Badge.Ribbon
                                text={(project?.status == "0" && "Pendiente") || (project?.status == "1" && "Activa") || (project?.status == "2" && "Pendiente")}
                                color={(project?.status == "0" && "pink") || (project?.status == "1" && "Activa") || (project?.status == "2" && "pink")}
                            >
                                <div className="product-card">
                                    <div className="product-tumb">
                                        {project?.status == "1" ? (
                                            <Link to={`/project/${project?.id}`}>
                                                <img style={{ height: "180px", width: "100%", objectFit: "cover" }} src={project?.images?.filter((img) => img.is_video === null)[0].url} alt />
                                            </Link>
                                        ) : (
                                            <img style={{ height: "180px", width: "100%", objectFit: "cover" }} src={project?.images?.filter((img) => img.is_video === null)[0].url} alt />
                                        )}
                                    </div>
                                    <div className="product-details" style={{ padding: "20px" }}>
                                        <span className="product-catagory">{project?.packs?.length} packs</span>
                                        <h4>
                                            {project?.status == "1" ? (
                                                <Link style={{ fontSize: "16px", minHeight: "45px" }} to={`/project/${project?.id}`}>
                                                    {project?.title?.slice(0, 45)}
                                                    {project?.title?.length > 45 && "..."}
                                                </Link>
                                            ) : (
                                                <span style={{ fontSize: "16px", minHeight: "45px" }}>
                                                    {project?.title?.slice(0, 45)}
                                                    {project?.title?.length > 45 && "..."}
                                                </span>
                                            )}
                                        </h4>

                                        {project.status == "2" && (
                                            <Alert
                                                message="Genial, su proyecto ha sido aceptado, ¡echa un vistazo!"
                                                description={
                                                    <div className="d-flex justify-content-between">
                                                        <Link to={`/project/${project?.id}`}>
                                                            <Button style={{ float: "right", fontSize: "12px" }} size="small" type="primary">
                                                            Ver cambios
                                                            </Button>
                                                        </Link>

                                                        <Button onClick={() => handleOnAccept(project?.id)} style={{ float: "right", fontSize: "12px" }} size="small" type="primary">
                                                        Aceptar
                                                        </Button>
                                                    </div>
                                                }
                                                type="success"
                                            />
                                        )}

                                        <div className="product-bottom-details">
                                            <div className="product-price">€ {project?.project_id}</div>
                                            <div className="product-links">
                                                <Dropdown
                                                    placement="bottomRight"
                                                    menu={{
                                                        items: [
                                                            {
                                                                key: "1",
                                                                label: (
                                                                    <Link to="/editproject" state={project?.id}>
                                                                        Editar
                                                                    </Link>
                                                                ),
                                                                icon: <CiEdit style={{ fontSize: "18px" }} />,
                                                            },
                                                            project?.status == "1" && {
                                                                key: "2",
                                                                label: <Link to={`/project/${project?.id}`}>Vista</Link>,
                                                                icon: <GrFormView style={{ fontSize: "18px" }} />,
                                                            },
                                                        ],
                                                    }}
                                                >
                                                    <HiDotsVertical role="button" color="#000" fontSize={18} />
                                                </Dropdown>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Badge.Ribbon>
                        </div>
                    );
                })}

                {allProjects && allProjects.length === 0 && <Empty />}

                {isLoading && (
                    <div className="row">
                        <div className="col-md-4 mb-5">
                            <Skeleton active />
                        </div>
                        <div className="col-md-4 mb-5">
                            <Skeleton active />
                        </div>
                        <div className="col-md-4 mb-5">
                            <Skeleton active />
                        </div>
                        <div className="col-md-4 mb-5">
                            <Skeleton active />
                        </div>
                        <div className="col-md-4 mb-5">
                            <Skeleton active />
                        </div>
                        <div className="col-md-4 mb-5">
                            <Skeleton active />
                        </div>
                    </div>
                )}
            </div>
        </ProfileLayout>
    );
}

export default MyFunds;
