import { Skeleton } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { IoIosAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import ProfileLayout from "../ProfileLayout";
import "./myfunds.css";

import { CiEdit } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";

import { useSelector } from "react-redux";

const apiUrl = import.meta.env.VITE_REACT_APP_DEFAULT_API_ROUTE;

function MyFunds() {
    const { userInfo } = useSelector((store) => store.UserInfoSlice);

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
                <h5 className="text-uppercase">Active funds</h5>
            </div>

            <div className="row">
                {allProjects?.map((project, index) => {
                    return (
                        <div key={index} className="col-md-4 mb-5">
                            <div className="product-card">
                                <div className="product-tumb">
                                    <img style={{ height: "180px", width: "100%", objectFit: "cover" }} src={project?.images?.filter((img) => img.is_video === null)[0].url} alt />
                                </div>
                                <div className="product-details" style={{ padding: "20px" }}>
                                    <span className="product-catagory">{project?.packs?.length} packs</span>
                                    <h4>
                                        <Link style={{ fontSize: "18px" }} to={`/project/${project?.id}`}>
                                            {project?.title}
                                        </Link>
                                    </h4>
                                    <div className="product-bottom-details">
                                        <div className="product-price">€ {project?.project_id}</div>
                                        <div className="product-links">
                                            <Link to={`/editproject/${project?.id}`}>
                                                <CiEdit color="#000" style={{ marginRight: "15px" }} fontSize={20} />
                                            </Link>
                                            <Link to={`/project/${project?.id}`}>
                                                <FaRegEye color="#000" fontSize={20} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}

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
                        <div className="col-md-4 mb-5">
                            <Skeleton active />
                        </div>
                    </div>
                )}

                {!isLoading && (
                    <div className="col-md-4">
                        <Link to="/addfund">
                            <div className="add-funds">
                                <IoIosAddCircle />
                                <p>Create a new fund</p>
                            </div>
                        </Link>
                    </div>
                )}
            </div>
        </ProfileLayout>
    );
}

export default MyFunds;
