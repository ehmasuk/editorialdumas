import { Progress } from "antd";
import { IoIosAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import ProfileLayout from "../ProfileLayout";
import "./myfunds.css";

function MyFunds() {
    return (
        <ProfileLayout>
            <div className="shop-bx-title clearfix">
                <h5 className="text-uppercase">Active funds</h5>
            </div>

            <div className="row">
                <div className="col-md-4">
                    <div className="card single-funds">
                        <img
                            className="card-img-top"
                            style={{ height: "150px" }}
                            src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/234784665/original/b963d77f0897a1fd1c25ece785c7bec93eb9fbbb/create-your-fiverr-gig-image.jpg"
                            alt="Card image cap"
                        />
                        <div className="card-body">
                            <p className="card-title">Calima</p>
                            <Progress percent={20} steps={10} strokeColor={["pink", "pink", "pink", "skyblue", "skyblue", "skyblue", "skyblue", "#9EE71F", "#9EE71F", "#9EE71F"]} />
                            <p className="mt-3 mb-0">
                                Objetivo de <b>5.000€</b>
                            </p>
                            <p className="mt-3 mb-0">Quedan <b>80 días</b></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card single-funds">
                        <img
                            className="card-img-top"
                            style={{ height: "150px" }}
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdJByM76G8Ugu3O2tTjyEqJwOIAT0cOhCbfg&s"
                            alt="Card image cap"
                        />
                        <div className="card-body">
                            <p className="card-title">El arte de automatizar</p>
                            <Progress percent={90} steps={10} strokeColor={["pink", "pink", "pink", "skyblue", "skyblue", "skyblue", "skyblue", "#9EE71F", "#9EE71F", "#9EE71F"]} />
                            <p className="mt-3 mb-0">
                                Objetivo de <b>5.000€</b>
                            </p>
                            <p className="mt-3 mb-0">Quedan <b>9 días</b></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <Link to="/addfund">
                        <div className="add-funds">
                            <IoIosAddCircle />
                            <p>Create a new fund</p>
                        </div>
                    </Link>
                </div>
            </div>
        </ProfileLayout>
    );
}

export default MyFunds;
