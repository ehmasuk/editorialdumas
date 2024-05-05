import { Progress, Tabs } from "antd";
import { IoMdPlay } from "react-icons/io";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import Base from "../../layouts/Base";
import "./singleproject.css";

import { FaAddressBook } from "react-icons/fa6";
import ProjectPacks from "./ProjectPacks";






function SingleProject() {
    const { projectid } = useParams();

    const items = [
        {
            key: "1",
            label: "Recompensas",
            children: <ProjectPacks />,
        },
        {
            key: "2",
            label: "El libro",
            children: "Content of Tab Pane 2",
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
        }
    ];

    return (
        <Base>
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
                                light="https://images.pexels.com/photos/19910508/pexels-photo-19910508/free-photo-of-a-person-pouring-tea-into-a-cup-on-a-table.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                                controls={true}
                                url="https://lmszoom.s3.eu-west-3.amazonaws.com/press_image/1714718875.4440931-hd_1920_1080_25fps.mp4"
                            />
                        </div>
                    </div>
                    <div className="col-md-5">
                        <h2>Conversaciones secretas entre un abogado y su cliente</h2>
                        <div className="author">
                            <p className="mb-0 mr-2">Un libro de</p>
                            <h5 className="m-0">Eduardo Robaina</h5>
                        </div>
                        <Progress steps={15} percent={90} status="active" size={[25, 15]} />
                        <p className="price">5.939€</p>
                        <div className="d-flex justify-content-between">
                            <p>
                                Objetivo de <b style={{ color: "#1A1668" }}>6.000€</b>
                            </p>
                            <p>
                                Quedan <b style={{ color: "#1A1668" }}>6 días</b>
                            </p>
                        </div>
                        <button className="btn btn-primary btnhover donate-btn">hazte macenas</button>
                    </div>
                </div>
            </div>
            <div className="container content-inner-1">
                <Tabs defaultActiveKey="1" size="large" animated={{ inkBar: true, tabPane: true }} centered={true} items={items} />
            </div>
        </Base>
    );
}

export default SingleProject;
