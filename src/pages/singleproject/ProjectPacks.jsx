import React from "react";

function ProjectPacks({ userproject }) {
    return (
        <div className="row">
            {userproject?.packs?.map((pack, index) => {
                return (
                    <div key={index} className="col-md-4 mb-5">
                        <div className="user-pack">
                            <div className="header">
                                <p>{pack?.title}</p>
                                <p className="text-right">{pack?.pack_amount}€</p>
                            </div>
                            <div className="pack-img mb-3">
                                <img className="pack-cover-img" src={userproject?.images[0]?.url} alt="" />
                            </div>
                            <div className="body" dangerouslySetInnerHTML={{ __html: pack?.pack_description }}></div>
                            <div className="footer">
                                <button className="btn btn-primary btnhover mt-3 donate-btn" style={{ fontSize: "20px" }}>
                                    APOYA CON {pack?.pack_amount}€
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default ProjectPacks;
