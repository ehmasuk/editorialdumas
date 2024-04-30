import { BsSend } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { authUnCheck } from "../../features/AuthCheckerSlice";

import { FaRegChartBar } from "react-icons/fa";
import { FaWpforms } from "react-icons/fa6";

import axios from "axios";
import { useEffect, useState } from "react";
const apiUrl = import.meta.env.VITE_REACT_APP_DEFAULT_API_ROUTE;

function ProfileSidebar() {
    const userId = JSON.parse(localStorage.getItem("isLogedin")).user.id;

    const [userData, setUserData] = useState(null);

    const [isLoading, setIsLoading] = useState(true);

    const getData = async () => {
        setIsLoading(true);
        try {
            const res = await axios.get(`${apiUrl}/user/info/${userId}`);
            setUserData(res.data.user);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getData();
        
    }, []);

    userData && console.log(userData);

    const dispatch = useDispatch();

    const { pathname } = useLocation();

    return (
        <div className="sticky-top">
            <div className="shop-account">
                <div className="account-detail text-center">
                    <div className="my-image">
                        <a href="#">
                            <img alt="" src={userData?.images?.url} />
                        </a>
                    </div>
                    <div className="account-title">
                        <div className="">
                            <h4 className="m-b5">
                                <Link to="/profile">{userData?.name}</Link>
                            </h4>
                            <p className="m-b0">
                            <Link to="/profile">{userData?.profession}</Link>
                            </p>
                        </div>
                    </div>
                </div>
                <ul>
                    <li>
                        <Link to="/profile" className={`${pathname === "/profile" && "active"}`}>
                            <i className="far fa-user" aria-hidden="true" />
                            <span>Profile</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/profile/myproposals" className={`${pathname === "/profile/myproposals" && "active"}`}>
                            <i>
                                <FaWpforms />
                            </i>
                            <span>My Proposals</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/profile/proposal" className={`${pathname === "/profile/proposal" && "active"}`}>
                            <i>
                                <BsSend />
                            </i>
                            <span>Send Proposals</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/profile/myfunds" className={`${pathname === "/profile/myfunds" && "active"}`}>
                            <i>
                                <FaRegChartBar />
                            </i>
                            <span>Mis fondos</span>
                        </Link>
                    </li>

                    <li onClick={() => dispatch(authUnCheck())}>
                        <a href="#">
                            <i className="fas fa-sign-out-alt" aria-hidden="true" />
                            <span>Log Out</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default ProfileSidebar;
