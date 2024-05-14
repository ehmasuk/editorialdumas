import { Avatar } from "antd";
import { formatDate } from "../../database/globalFunctions";

import defaultAvatar from '../../assets/images/defaultAvatar.png'

function ProjectMecanas({userproject}) {
    return (
        <div className="comment-wraper" style={{maxWidth:'400px',margin:'auto'}}>
            {
                userproject && userproject?.donations?.map((donation,index) =>{
                    return <div key={index} className="comment-replays">
                    <div className="replay-box">
                        <img src={defaultAvatar} alt className="img-fluid" />
                        <div className="replay-box-right">
                            <div className="top">
                                <p className="name" style={{textTransform:'capitalize'}}>{donation?.name}</p>
                            </div>
                            <div className="d-flex align-items-center mt-1">
                                <h5 className="m-0">{donation?.donation_amount}€</h5>
                                <p className="mb-0" style={{marginLeft:'10px',color: '#7b8b99',fontSize:'14px'}}>{formatDate(donation?.created_at)}</p>
                            </div>
                        </div>
                    </div>
                </div>
                })
            }

        </div>
    );
}

export default ProjectMecanas;
