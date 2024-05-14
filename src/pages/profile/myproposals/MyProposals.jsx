import { Alert, Empty, Skeleton } from "antd";
import { useEffect, useState } from "react";
import { SlCalender } from "react-icons/sl";
import ProfileLayout from "../ProfileLayout";
import "./myproposals.css";

import axios from "axios";
import { BsSend } from "react-icons/bs";
import { Link } from "react-router-dom";
import { formatDate } from "../../../database/globalFunctions";
const apiUrl = import.meta.env.VITE_REACT_APP_DEFAULT_API_ROUTE;

function MyProposals() {
    const userId = JSON.parse(localStorage.getItem("isLogedin")).user.id;

    const [myProposals, setMyProposals] = useState(null);

    const [isLoading, setIsLoading] = useState(null);

    const getData = async () => {
        setIsLoading(true);
        try {
            const res = await axios.get(`${apiUrl}/user/proposal?user_id=${userId}`);
            setMyProposals(res.data.proposals);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    myProposals && console.log(myProposals);


    return (
        <ProfileLayout>
            <div className="shop-bx-title clearfix">
                <div className="d-flex align-items-center justify-content-between">
                    <h5 className="text-uppercase m-0">Tus propuestas</h5>
                    <Link to="/profile/proposal">
                        <button className="btn d-flex align-items-center justify-content-between btn-secondary btn-sm">
                            {" "}
                            Enviar propuesta <BsSend style={{ marginLeft: "5px" }} fontSize={15} />
                        </button>
                    </Link>
                </div>
            </div>
            <div>
                <div className="row">
                    {myProposals &&
                        myProposals.map((proposal, index) => {
                            return (
                                <div key={index} className="col-md-6 mb-4">
                                    <div className="product-card">
                                        <div className="product-details">
                                            {proposal.status == 1 && <Alert message="Felicitaciones" description="Su propuesta ha sido aceptada" type="success" showIcon className="mb-4" />}

                                            {proposal.status == 0 && <div className="badge">Pending</div>}

                                            <span className="product-catagory">{proposal?.genre}</span>
                                            <h4>
                                                <a href>{proposal?.title}</a>
                                            </h4>
                                            <p>{proposal?.description}</p>
                                            <div className="product-bottom-details align-items-center">
                                                <div className="d-flex align-items-center">
                                                    <SlCalender style={{ marginRight: "5px" }} /> <span>{formatDate(proposal?.created_at)}</span>
                                                </div>
                                                {proposal.status == 1 && (
                                                    <Link to="/addfund" status={'haveProposal'}>
                                                    <button style={{ background: "#52C41A", color: "#fff" }} className="btn btn-sm">
                                                        Crea tu proyecto
                                                    </button></Link>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}

                    {myProposals && myProposals.length === 0 && <Empty />}

                    {isLoading && (
                        <>
                            <div className="col-md-6 mb-5">
                                <Skeleton active />
                            </div>
                            <div className="col-md-6 mb-5">
                                <Skeleton active />
                            </div>
                            <div className="col-md-6 mb-5">
                                <Skeleton active />
                            </div>
                            <div className="col-md-6 mb-5">
                                <Skeleton active />
                            </div>
                            <div className="col-md-6 mb-5">
                                <Skeleton active />
                            </div>
                            <div className="col-md-6">
                                <Skeleton active />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </ProfileLayout>
    );
}

export default MyProposals;
