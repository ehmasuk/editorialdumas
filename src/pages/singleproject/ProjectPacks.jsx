import React from "react";

function ProjectPacks() {


    const description = `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit fuga nemo perferendis architecto accusantium voluptatum nihil, illo</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, asperiores!</p>`

    return (
        <div className="row">
            <div className="col-md-4">
                <div className="user-pack">
                    <div className="header">
                        <p>FULLY CUSTOMIZED WEBSITE</p>
                        <p className="text-right">30€</p>
                    </div>
                    <div className="body" dangerouslySetInnerHTML={{ __html: description }}>
                    </div>
                    <div className="footer">
                        <button className="btn btn-primary btnhover mt-3 donate-btn" style={{fontSize:'20px'}}>APOYA CON 30€</button>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="user-pack">
                    <div className="header">
                        <p>FULLY CUSTOMIZED WEBSITE</p>
                        <p className="text-right">30€</p>
                    </div>
                    <div className="body" dangerouslySetInnerHTML={{ __html: description }}>
                    </div>
                    <div className="footer">
                        <button className="btn btn-primary btnhover mt-3 donate-btn" style={{fontSize:'20px'}}>APOYA CON 30€</button>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="user-pack">
                    <div className="header">
                        <p>FULLY CUSTOMIZED WEBSITE</p>
                        <p className="text-right">30€</p>
                    </div>
                    <div className="body" dangerouslySetInnerHTML={{ __html: description }}>
                    </div>
                    <div className="footer">
                        <button className="btn btn-primary btnhover mt-3 donate-btn" style={{fontSize:'20px'}}>APOYA CON 30€</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectPacks;
