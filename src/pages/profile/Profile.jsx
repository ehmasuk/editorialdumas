import { useDispatch } from "react-redux";
import { authUnCheck } from "../../features/AuthCheckerSlice";
import Base from './../../layouts/Base';

function Profile() {
    const dispatch = useDispatch();

    return (
        <Base>
            <div className="page-content bg-white">
                {/* contact area */}
                <div className="content-block">
                    {/* Browse Jobs */}
                    <section className="content-inner bg-white">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-3 col-lg-4 m-b30">
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
                                                    <a href="my-profile.html" className="active">
                                                        <i className="far fa-user" aria-hidden="true" />
                                                        <span>Profile</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="shop-cart.html">
                                                        <i className="flaticon-shopping-cart-1" />
                                                        <span>My Cart</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="wishlist.html">
                                                        <i className="far fa-heart" aria-hidden="true" />
                                                        <span>Wishlist</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="books-grid-view.html">
                                                        <i className="fa fa-briefcase" aria-hidden="true" />
                                                        <span>Shop</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="services.html">
                                                        <i className="far fa-bell" aria-hidden="true" />
                                                        <span>Services</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="help-desk.html">
                                                        <i className="far fa-id-card" aria-hidden="true" />
                                                        <span>Help Desk</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="privacy-policy.html">
                                                        <i className="fa fa-key" aria-hidden="true" />
                                                        <span>Privacy Policy</span>
                                                    </a>
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
                                </div>
                                <div className="col-xl-9 col-lg-8 m-b30">
                                    <div className="shop-bx shop-profile">
                                        <div className="shop-bx-title clearfix">
                                            <h5 className="text-uppercase">Basic Information</h5>
                                        </div>
                                        <form>
                                            <div className="row m-b30">
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="mb-3">
                                                        <label htmlFor="formcontrolinput1" className="form-label">
                                                            Your Name:
                                                        </label>
                                                        <input type="text" className="form-control" id="formcontrolinput1" placeholder="Alexander Weir" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="mb-3">
                                                        <label htmlFor="formcontrolinput2" className="form-label">
                                                            Professional title:
                                                        </label>
                                                        <input type="text" className="form-control" id="formcontrolinput2" placeholder="Web Designer" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="mb-3">
                                                        <label htmlFor="formcontrolinput3" className="form-label">
                                                            Languages:
                                                        </label>
                                                        <input type="text" className="form-control" id="formcontrolinput3" placeholder="Language" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="mb-3">
                                                        <label htmlFor="formcontrolinput4" className="form-label">
                                                            Age:
                                                        </label>
                                                        <input type="text" className="form-control" id="formcontrolinput4" placeholder="Age" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12">
                                                    <div className="mb-3">
                                                        <label htmlFor="exampleFormControlTextarea" className="form-label">
                                                            Description:
                                                        </label>
                                                        <textarea
                                                            className="form-control"
                                                            id="exampleFormControlTextarea"
                                                            rows={5}
                                                            defaultValue={
                                                                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s."
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="shop-bx-title clearfix">
                                                <h5 className="text-uppercase">Contact Information</h5>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="mb-3">
                                                        <label htmlFor="formcontrolinput5" className="form-label">
                                                            Contact Number:
                                                        </label>
                                                        <input type="text" className="form-control" id="formcontrolinput5" placeholder="+1 123 456 7890" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="mb-3">
                                                        <label htmlFor="formcontrolinput6" className="form-label">
                                                            Email Address:
                                                        </label>
                                                        <input type="text" className="form-control" id="formcontrolinput6" placeholder="info@example.com" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="mb-3">
                                                        <label htmlFor="formcontrolinput7" className="form-label">
                                                            Country:
                                                        </label>
                                                        <input type="text" className="form-control" id="formcontrolinput7" placeholder="Country Name" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="mb-3">
                                                        <label htmlFor="formcontrolinput8" className="form-label">
                                                            Postcode:
                                                        </label>
                                                        <input type="text" className="form-control" id="formcontrolinput8" placeholder={112233} />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="mb-3">
                                                        <label htmlFor="formcontrolinput9" className="form-label">
                                                            City:
                                                        </label>
                                                        <input type="text" className="form-control" id="formcontrolinput9" placeholder="City Name" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="mb-4">
                                                        <label htmlFor="formcontrolinput10" className="form-label">
                                                            Full Address:
                                                        </label>
                                                        <input type="text" className="form-control" id="formcontrolinput10" placeholder="New york City" />
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="btn btn-primary btnhover">Save Setting</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Browse Jobs END */}
                </div>
            </div>
        </Base>
    );
}

export default Profile;
