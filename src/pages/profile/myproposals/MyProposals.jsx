import { Empty, Skeleton } from "antd";
import { useEffect, useState } from "react";
import { SlCalender } from "react-icons/sl";
import ProfileLayout from "../ProfileLayout";
import "./myproposals.css";

import axios from "axios";
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
                <h5 className="text-uppercase">My proposals</h5>
            </div>
            <div>
                <div className="row">
                    {myProposals &&
                        myProposals.map((proposal, index) => {
                            return (
                                <div key={index} className="col-md-6 mb-4">
                                    <div className="product-card">
                                        <div className="product-details">
                                            <div className={`${proposal.status == 0 ? "" : "active"} badge`}>{proposal.status == 0 ? "Pending" : "Active"}</div>
                                            <span className="product-catagory">{proposal.genre}</span>
                                            <h4>
                                                <a href>{proposal.title}</a>
                                            </h4>
                                            <p>{proposal.description}</p>
                                            <div className="product-bottom-details">
                                                <div className="d-flex align-items-center">
                                                    <SlCalender style={{marginRight:'5px'}} /> <span>29,april</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}

                    {
                        myProposals && myProposals.length === 0 && <Empty />
                    }

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
