import ProfileLayout from "../ProfileLayout";
import "./myfunds.css";

function MyFunds() {
    return (
        <ProfileLayout>
            <div className="shop-bx-title clearfix bg-red-400">
                <h5 className="text-uppercase">Active funds</h5>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <div className="card single-funds">
                        <img
                            className="card-img-top"
                            src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/234784665/original/b963d77f0897a1fd1c25ece785c7bec93eb9fbbb/create-your-fiverr-gig-image.jpg"
                            alt="Card image cap"
                        />
                        <div className="card-body">
                            <p className="card-title">Some quick example text to build on the card title</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card single-funds">
                        <img
                            className="card-img-top"
                            src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/234784665/original/b963d77f0897a1fd1c25ece785c7bec93eb9fbbb/create-your-fiverr-gig-image.jpg"
                            alt="Card image cap"
                        />
                        <div className="card-body">
                            <p className="card-title">Some quick example text to build on the card title</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card single-funds">
                        <img
                            className="card-img-top"
                            src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/234784665/original/b963d77f0897a1fd1c25ece785c7bec93eb9fbbb/create-your-fiverr-gig-image.jpg"
                            alt="Card image cap"
                        />
                        <div className="card-body">
                            <p className="card-title">Some quick example text to build on the card title</p>
                        </div>
                    </div>
                </div>
            </div>
        </ProfileLayout>
    );
}

export default MyFunds;
