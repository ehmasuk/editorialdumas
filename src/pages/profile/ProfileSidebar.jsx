import { AiOutlineFund } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { authUnCheck } from "../../features/AuthCheckerSlice";
import { BsSend } from "react-icons/bs";

function ProfileSidebar() {
    const dispatch = useDispatch();

    const { pathname } = useLocation();

    return (
        <div className="sticky-top">
            <div className="shop-account">
                <div className="account-detail text-center">
                    <div className="my-image">
                        <a href="#">
                            <img alt="" src="https://i.pravatar.cc/150?img=12" />
                        </a>
                    </div>
                    <div className="account-title">
                        <div className="">
                            <h4 className="m-b5">
                                <a href="#">David Matin</a>
                            </h4>
                            <p className="m-b0">
                                <a href="#">Web developer</a>
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
                        <Link to="/profile/proposal" className={`${pathname === "/profile/myfunds" && "active"}`}>
                            <i>
                                <BsSend />
                            </i>
                            <span>Send Proposals</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/profile/myfunds" className={`${pathname === "/profile/myfunds" && "active"}`}>
                            <i>
                                <AiOutlineFund />
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
