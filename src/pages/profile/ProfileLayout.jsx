import Base from "../../layouts/Base";
import ProfileSidebar from "./ProfileSidebar";

function ProfileLayout({ children }) {
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
