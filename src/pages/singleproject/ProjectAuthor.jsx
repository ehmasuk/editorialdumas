import defaultAvatar from "../../assets/images/defaultAvatar.png";

function ProjectAuthor({ userproject }) {
    return (
        <div style={{maxWidth:'900px',margin:'auto'}}>
            {userproject && (
                <div className="content-block">
                    <section>
                        <div className="container">
                            <div className="row">
                                {/* <div className="col-xl-4 col-lg-5 m-b30">
                                    <div className="sticky-top">
                                        <div className="shop-account">
                                            <div className="account-detail text-center">
                                                <div className="my-image">
                                                    <img alt="avatar" src={userproject && userproject.user && userproject.user.images ? userproject.user.images.url : defaultAvatar} />
                                                </div>
                                                <div className="account-title">
                                                    <div className>
                                                        <h4 className="m-b5">
                                                            <p>{userproject?.user?.name}</p>
                                                        </h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                <div className="col-xl-12 col-lg-12 m-b30">
                                    <div className="shop-bx shop-profile">
                                        {/* <div className="shop-bx-title clearfix">
                                            <h5 className="text-uppercase">LA AUTORA</h5>
                                        </div> */}
                                        <div style={{ fontSize: "18px", lineHeight: 2, textAlign: "justify", }}>{ <div dangerouslySetInnerHTML={{ __html: userproject?.user?.description }}></div> || "No se encuentra información"}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Browse Jobs END */}
                </div>
            )}
        </div>
    );
}

export default ProjectAuthor;
