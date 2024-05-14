import { Progress, Skeleton } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaCoins } from "react-icons/fa6";
import { VscTarget } from "react-icons/vsc";
import { Link, useNavigate } from "react-router-dom";
import Base from "../../layouts/Base";
import "./allprojects.css";

import defaultAvatar from "../../assets/images/defaultAvatar.png";

const apiUrl = import.meta.env.VITE_REACT_APP_DEFAULT_API_ROUTE;



function AllProjects() {


    const [allProjects, setAllProjects] = useState(null);
    const [isLoading, setIsLoading] = useState(null);



    const getData = async () => {
        setIsLoading(true);
        try {
            const res = await axios.get(`${apiUrl}/user/crowfund_projects`);
            console.log(res.data);

            // const validData = res.data.filter((project)=>{
            //     return project.packs.length > 0
            // })

            // setAllProjects(validData);
            setAllProjects(res.data);
            
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

    const [countdowns, setCountdowns] = useState({});

    useEffect(() => {
        const calculateCountdowns = () => {
            const currentDate = new Date();
            const updatedCountdowns = {};

            allProjects?.forEach((project) => {
                const targetDate = new Date(project.target_date);
                const timeDifference = targetDate.getTime() - currentDate.getTime();
                const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
                updatedCountdowns[project.id] = daysDifference;
            });

            setCountdowns(updatedCountdowns);
        };

        calculateCountdowns();
    }, [allProjects]);




    const calculateCompletion = (currentAmount, targetAmount)=>{
        var completionPercentage = (currentAmount / targetAmount) * 100;
        return Math.floor(completionPercentage);
    }

    const totalAmountGathered = (donations)=>{
        var result
        if(donations){
            result = donations.reduce((acc,item)=>{
                acc = acc + Number(item.donation_amount);
                return acc
            },0)
        }else{
            result = 0
        }
        return result
    }








    return (
        <Base>
            <div className="all-projects content-inner-1">
                <div className="container">
                    <h5>LIBROS EN FASE DE FINANCIACIÓN</h5>
                    <hr />
                    <div className="row">
                        {allProjects?.map((project, index) => {
                            return (
                                <div key={index} className="col-md-4 mb-5">
                                    <Link to={`/project/${project?.id}`}>
                                        <div className="single-project">
                                            <div className="header">
                                                <img className="img-fluid" src={project?.images.filter(img=>img.is_video === null)[0].url}  alt="" />
                                            </div>
                                            <div className="body">
                                                <div className="title">{project?.title}</div>
                                                <Progress percent={
                                                    calculateCompletion(
                                                        totalAmountGathered(project?.donations),
                                                        Number(project?.project_id) || 0
                                                    )
                                                    } style={{ width: "100%" }} status="active" />
                                                <div className="allfund-info">
                                                    <div className="d-flex">
                                                        <div className="mr-2">
                                                            <FaCoins fontSize={15} /> Recaudó:
                                                        </div>
                                                        <div className="value">{totalAmountGathered(project?.donations)}€</div>
                                                    </div>
                                                    <div className="d-flex">
                                                        <div className="mr-2">
                                                            <VscTarget fontSize={15} /> Meta:
                                                        </div>
                                                        <div className="value">{`${project?.project_id}€`}</div>
                                                    </div>
                                                </div>

                                                <div className="author-wrappper">
                                                    <div className="author-media">
                                                        <img src={project && project.user.images ? project?.user?.images?.url : defaultAvatar} alt="avatar" />
                                                    </div>
                                                    <div className="author-content">
                                                        <div className="author-head">
                                                            <h5 className="author-name">{project?.user?.name}</h5>
                                                        </div>
                                                        <div className="author-meta">
                                                            <p className="campaign">1 Proyecto</p>
                                                            <p className="campaign">Restante: {`${countdowns[project.id] < 0 ? "0" : countdowns[project.id]} días`}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
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
