import { Progress } from "antd";
import { FaCoins } from "react-icons/fa";
import { VscTarget } from "react-icons/vsc";
import { Link } from "react-router-dom";
import defaultAvatar from "../../assets/images/defaultAvatar.png";
import { daysRemaining } from "../../database/globalFunctions";
import "./projectcard.css";

function ProjectCard({ project, userInfo }) {
    const calculateCompletion = (currentAmount, targetAmount) => {
        var completionPercentage = (currentAmount / targetAmount) * 100;
        return Math.ceil(completionPercentage);
    };

    const totalAmountGathered = (donations) => {
        var result;
        if (donations) {
            result = donations.reduce((acc, item) => {
                acc = acc + Number(item.donation_amount);
                return acc;
            }, 0);
        } else {
            result = 0;
        }
        return result;
    };

    return (
        <Link to={`/project/${project?.id}`}>
            <div className="single-project">
                <div className="header">
                    <img className="img-fluid" src={project?.images?.filter((img) => img.is_video === null)[0]?.url} alt="" />
                </div>
                <div className="body">
                    <div className="title">{project?.title}</div>
                    <Progress percent={calculateCompletion(totalAmountGathered(project?.donations), Number(project?.project_id) || 0)} style={{ width: "100%" }} status="active" />
                    <div className="allfund-info">
                        <div className="d-flex">
                            <div className="mr-2">
                                <FaCoins fontSize={15} /> Recaudó:
                            </div>
                            <div className="value">{totalAmountGathered(project?.donations)}€</div>
                        </div>
                        <div className="d-flex">
                            <div className="mr-2">
                                <VscTarget fontSize={15} /> Meta:
                            </div>
                            <div className="value">{`${project?.project_id}€`}</div>
                        </div>
                    </div>

                    {userInfo && (
                        <div className="author-wrappper">
                            <div className="author-media">
                                <img src={project && project?.user?.images ? project?.user?.images?.url : defaultAvatar} alt="avatar" />
                            </div>
                            <div className="author-content">
                                <div className="author-head">
                                    <h5 className="author-name">{project?.user?.name}</h5>
                                </div>
                                <div className="author-meta">
                                    <p className="campaign">1 Proyecto</p>
                                    <p className="campaign">Restante: {daysRemaining(project?.target_date)} días</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Link>
    );
}

export default ProjectCard;
