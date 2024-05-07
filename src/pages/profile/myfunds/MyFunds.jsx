import { Avatar, Card, Skeleton } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { IoIosAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import ProfileLayout from "../ProfileLayout";
import "./myfunds.css";



import { CiSettings } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import Meta from "antd/es/card/Meta";

import defaultAvatar from '../../../assets/images/defaultAvatar.png'
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

                            <Card
                                
                                cover={
                                <img
                                    alt="book"
                                    style={{ height: "150px", objectFit: "cover" }}
                                    src={project?.images[0].url}
                                />
                                }
                                actions={[
                                    <Link to={`/editproject/${project?.id}`} key="view"> <CiEdit key="edit" fontSize={20} /></Link>,
                                    <Link to={`/project/${project?.id}`} key="view"><FaRegEye fontSize={20} /></Link>,
                                ]}
                            >
                                <Meta
                                
                                title={project?.title}
                                description="This is the description"
                                />
                            </Card>


                            {/* <div className="card single-funds">
                                <Link to={`/project/${project?.id}`}>
                                    <img className="card-img-top" style={{ height: "150px", objectFit: "cover" }} src={project?.images[0].url} alt="Card image cap" />
                                </Link>
                                <div className="card-body">
                                    <p className="card-title">{project?.title}</p>
                                    <p className="mt-3 mb-0">
                                        Objetivo de <b>{project?.project_id}€</b>
                                    </p>
                                    <p className="mt-3 mb-0">
                                        Quedan <b>{project?.target_date.substring(0, project.target_date.length - 12)}</b>
                                    </p>
                                </div>
                            </div> */}





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
