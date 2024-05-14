import { Dropdown, Empty, Skeleton } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { GrFormView } from "react-icons/gr";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import ProfileLayout from "../ProfileLayout";
import "./myfunds.css";

import { CiEdit } from "react-icons/ci";
import { HiDotsVertical } from "react-icons/hi";

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
            toast.error("Something went wrong, please try again later");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <ProfileLayout>
            <div className="shop-bx-title clearfix">
                <div className="d-flex align-items-center justify-content-between">
                    <h5 className="text-uppercase">Tus fondos</h5>
                    {/* <Link to="/addfund">
                        <button className="btn d-flex align-items-center justify-content-between btn-secondary btn-sm">
                            Crear un nuevo fondo <IoIosAddCircleOutline style={{ marginLeft: "5px" }} fontSize={18} />{" "}
                        </button>
                    </Link> */}
                </div>
            </div>

            <div className="row">
                {allProjects?.map((project, index) => {
                    return (
                        <div key={index} className="col-md-4 mb-5 my-fund-wraper">
                            <div className="product-card">
                                <div className="product-tumb">
                                    <Link to={`/project/${project?.id}`}>
                                        <img style={{ height: "180px", width: "100%", objectFit: "cover" }} src={project?.images?.filter((img) => img.is_video === null)[0].url} alt />
                                    </Link>
                                </div>
                                <div className="product-details" style={{ padding: "20px" }}>
                                    <span className="product-catagory">{project?.packs?.length} packs</span>
                                    <h4>
                                        <Link style={{ fontSize: "16px", minHeight: "45px" }} to={`/project/${project?.id}`}>
                                            {project?.title?.slice(0,45)}{project?.title?.length>45 && '...'}
                                        </Link>
                                    </h4>
                                    <div className="product-bottom-details">
                                        <div className="product-price">€ {project?.project_id}</div>
                                        <div className="product-links">
                                            <Dropdown
                                                placement="bottomRight"
                                                menu={{
                                                    items: [
                                                        {
                                                            key: "1",
                                                            label: <Link to="/editproject" state={project?.id}>Edit</Link>,
                                                            icon: <CiEdit style={{ fontSize: "18px" }} />,
                                                        },
                                                        {
                                                            key: "2",
                                                            label: <Link to={`/project/${project?.id}`}>View</Link>,
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
