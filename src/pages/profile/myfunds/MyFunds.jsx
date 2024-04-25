import { Progress } from "antd";
import { IoIosAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import ProfileLayout from "../ProfileLayout";
import "./myfunds.css";

const singleFunds = [
    {
        title: "test",
    },
    {
        title: "test",
    },
];

function MyFunds() {
    return (
        <ProfileLayout>
            <div className="shop-bx-title clearfix">
                <h5 className="text-uppercase">Active funds</h5>
            </div>

            <div className="row">
                {singleFunds?.map((fund, index) => {
                    return (
                        <div className="col-md-4" key={index}>
                            <div className="card single-funds">
                                <img
                                    className="card-img-top"
                                    src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/234784665/original/b963d77f0897a1fd1c25ece785c7bec93eb9fbbb/create-your-fiverr-gig-image.jpg"
                                    alt="Card image cap"
                                />
                                <div className="card-body">
                                    <p className="card-title">Some quick example text to build on the card title</p>
                                    <Progress percent={index + 90} steps={10} strokeColor={["pink", "pink", "pink", "skyblue", "skyblue", "skyblue", "skyblue", "#9EE71F", "#9EE71F", "#9EE71F"]} />
                                </div>
                            </div>
                        </div>
                    );
                })}
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
