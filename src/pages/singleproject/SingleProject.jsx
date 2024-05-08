import { Progress, Skeleton, Tabs } from "antd";
import { IoMdPlay } from "react-icons/io";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import Base from "../../layouts/Base";
import "./singleproject.css";

import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ProjectPacks from "./ProjectPacks";
import ProjectComments from "./ProjectComments";

const apiUrl = import.meta.env.VITE_REACT_APP_DEFAULT_API_ROUTE;

function SingleProject() {
    const { projectid } = useParams();



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
            toast.error("Something went wrong, please try again later");
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
            children: <div className="project-el-libro" dangerouslySetInnerHTML={{ __html: userproject?.book_description }}></div>,
        },
        {
            key: "3",
            label: "El autor",
            children: "Content of Tab Pane 3",
        },
        {
            key: "4",
            label: "Mecenas",
            children: "Content of Tab Pane 3",
        },
        {
            key: "5",
            label: "Comunidad",
            children: <ProjectComments getData={getData} userproject={userproject && userproject} />,
        },
    ];





    return (
        <Base>
            <div>
                {userproject && (
                    <>
                        <div className="container content-inner-1">
                            <div className="row">
                                <div className="col-md-7">
                                    <div>
                                        <ReactPlayer
                                            width="100%"
                                            height="450px"
                                            playing={true}
                                            playIcon={
                                                <button className="player-icon">
                                                    <IoMdPlay fontSize={35} />
                                                </button>
                                            }
                                            light={userproject?.images.filter(img=>img.is_video === null)[0].url}
                                            controls={true}
                                            url={userproject?.images.filter(img=>img.is_video === '1')[0].url}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <h2>{userproject?.title}</h2>
                                    <div className="author">
                                        <p className="mb-0 mr-2">Un libro de</p>
                                        <h5 className="m-0">Eduardo Robaina</h5>
                                    </div>
                                    <Progress steps={15} percent={90} status="active" size={[25, 15]} />
                                    <p className="price">5.939€</p>
                                    <div className="d-flex justify-content-between">
                                        <p>
                                            Objetivo de <b style={{ color: "#1A1668" }}>{`${userproject?.project_id}€`}</b>
                                        </p>
                                        <p>
                                            Quedan <b style={{ color: "#1A1668" }}>6 días</b>
                                        </p>
                                    </div>
                                    <button className="btn btn-primary btnhover donate-btn">hazte macenas</button>
                                </div>
                            </div>
                        </div>
                        <div className="container" style={{paddingBottom:'100px'}}>
                            <Tabs defaultActiveKey="1" size="large" animated={{ inkBar: true, tabPane: true }} centered={true} items={items} />
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
        </Base>
    );
}

export default SingleProject;
