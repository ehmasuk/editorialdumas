import { Link, useLocation } from "react-router-dom";
import Base from "../../layouts/Base";
import ProfileSidebar from "./ProfileSidebar";

import { Menu } from "antd";
import { useState } from "react";
import { BsSend } from "react-icons/bs";
import { FaRegChartBar } from "react-icons/fa";
import { FaWpforms } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { authUnCheck } from "../../features/AuthCheckerSlice";
import { IoVideocamOutline } from "react-icons/io5";

function ProfileLayout({ children }) {
    const { pathname } = useLocation();
    const dispatch = useDispatch();


    const menuItems = [
        {
            label: (
                <Link to="/profile">
                    <span>Perfil</span>
                </Link>
            ),
            key: "/profile",
            icon: <i className="far fa-user" />,
        },
        {
            label: (
                <Link to="/profile/proposal">
                    <span>Enviar propuesta</span>
                </Link>
            ),
            key: "/profile/proposal",
            icon: <BsSend />,
        },
        {
            label: (
                <Link to="/profile/myproposals">
                    <span>Propuesta</span>
                </Link>
            ),
            key: "/profile/myproposals",
            icon: <FaWpforms />,
        },
        {
            label: (
                <Link to="/profile/myfunds">
                    <span>Mi proyecto</span>
                </Link>
            ),
            key: "/profile/myfunds",
            icon: <FaRegChartBar />,
        },
        {
            label: (
                <Link to="/profile/tutorials">
                    <span>Tutoriales</span>
                </Link>
            ),
            key: "/profile/tutorials",
            icon: <IoVideocamOutline />
            ,
        },
    ];



    return (
        <Base>
            <div className="page-content bg-white">
                <div className="content-block">
                    <section className="content-inner bg-white">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-3 col-lg-4 m-b30">
                                    <ProfileSidebar />
                                </div>
                                <div className="col-xl-9 col-lg-8 m-b30">
                                    <div className="px-2 mb-4">
                                        <Menu selectedKeys={[pathname]} mode="horizontal" items={menuItems} />
                                    </div>
                                    <div className="shop-bx shop-profile">{children}</div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </Base>
    );
}

export default ProfileLayout;
