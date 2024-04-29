import ProfileLayout from "./ProfileLayout";

function Profile() {
    return (
        <ProfileLayout>
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
                                <input type="text" className="form-control" id="formcontrolinput2" placeholder="Writer" />
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
        </ProfileLayout>
    );
}

export default Profile;
