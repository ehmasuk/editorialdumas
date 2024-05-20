import { Skeleton } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Base from "../../layouts/Base";
import "./allprojects.css";

import ProjectCard from "../../components/projectcard/ProjectCard";
import useGet from "../../hooks/useGet";

const apiUrl = import.meta.env.VITE_REACT_APP_DEFAULT_API_ROUTE;

function AllProjects() {

    
    // const [allProjects, setAllProjects] = useState(null);
    // const [isLoading, setIsLoading] = useState(null);

    // const getData = async () => {
    //     setIsLoading(true);
    //     try {
    //         const res = await axios.get(`${apiUrl}/user/crowfund_projects`);
    //         console.log(res.data);
    //         setAllProjects(res.data);
    //     } catch (error) {
    //         console.log(error);
    //         toast.error("Something went wrong, please try again later");
    //     } finally {
    //         setIsLoading(false);
    //     }
    // };

    // useEffect(() => {
    //     getData();
    // }, []);



    const [data, isLoading] = useGet(`${apiUrl}/user/crowfund_projects`)




    return (
        <Base>
            <div className="content-inner-1">
                <div className="container">
                    <h5>LIBROS EN FASE DE FINANCIACIÓN</h5>
                    <hr />
                    <div className="row">
                        {data?.map((project, index) => {
                            return (
                                <div key={index} className="col-md-4 mb-5">
                                    <ProjectCard userInfo={true} project={project} />
                                </div>
                            );
                        })}
                    </div>

                    {isLoading && (
                        <div className="row">
                            <div className="col-md-3 mb-5">
                                <Skeleton active />
                            </div>
                            <div className="col-md-3 mb-5">
                                <Skeleton active />
                            </div>
                            <div className="col-md-3 mb-5">
                                <Skeleton active />
                            </div>
                            <div className="col-md-3 mb-5">
                                <Skeleton active />
                            </div>
                            <div className="col-md-3 mb-5">
                                <Skeleton active />
                            </div>
                            <div className="col-md-3 mb-5">
                                <Skeleton active />
                            </div>
                            <div className="col-md-3 mb-5">
                                <Skeleton active />
                            </div>
                            <div className="col-md-3 mb-5">
                                <Skeleton active />
                            </div>
                            <div className="col-md-3 mb-5">
                                <Skeleton active />
                            </div>
                            <div className="col-md-3 mb-5">
                                <Skeleton active />
                            </div>
                            <div className="col-md-3 mb-5">
                                <Skeleton active />
                            </div>
                            <div className="col-md-3 mb-5">
                                <Skeleton active />
                            </div>
                            <div className="col-md-3 mb-5">
                                <Skeleton active />
                            </div>
                            <div className="col-md-3 mb-5">
                                <Skeleton active />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Base>
    );
}

export default AllProjects;
