import { BsSend } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { authUnCheck } from "../../features/AuthCheckerSlice";

import { FaRegChartBar } from "react-icons/fa";
import { FaWpforms } from "react-icons/fa6";

import { Image, Skeleton } from "antd";

import defaultAvatar from "../../assets/images/defaultAvatar.png";

function ProfileSidebar() {
    const dispatch = useDispatch();

    const { userInfo, isLoading } = useSelector((store) => store.UserInfoSlice);

    const { pathname } = useLocation();

    return (
        <div className="sticky-top">
            <div className="shop-account">
                <div className="account-detail text-center">
                    <div className="my-image">
                        <a href="#">
                            {!isLoading ? (
                                <div className="profile-image">
                                    <Image src={userInfo && userInfo.images ? userInfo.images.url : defaultAvatar} />
                                </div>
                            ) : (
                                <Skeleton.Avatar className="profile-avatar-skeleton" active={true} />
                            )}
                        </a>
                    </div>
                    <div className="account-title">
                        <div className="">
                            <h4 className="m-b5">
                                <Link to="/profile">{userInfo?.name}</Link>
                            </h4>
                            <p className="m-b0">
                                <Link to="/profile">{userInfo?.profession}</Link>
                            </p>
                        </div>
                    </div>
                </div>
                <ul>
                    <li>
                        <Link to="/profile" className={`${pathname === "/profile" && "active"}`}>
                            <i className="far fa-user" aria-hidden="true" />
                            <span>Perfil</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/profile/myproposals" className={`${pathname === "/profile/myproposals" && "active"}`}>
                            <i>
                                <FaWpforms />
                            </i>
                            <span>Propuesta</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/profile/proposal" className={`${pathname === "/profile/proposal" && "active"}`}>
                            <i>
                                <BsSend />
                            </i>
                            <span>Enviar propuesta</span>
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
                            <span>Salir</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default ProfileSidebar;
