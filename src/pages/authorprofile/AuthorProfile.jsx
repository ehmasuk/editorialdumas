import { Skeleton } from "antd";
import { useEffect } from "react";
import { HiOutlineEnvelope, HiOutlineReceiptRefund } from "react-icons/hi2";
import { IoBookOutline } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import defaultAvatar from "../../assets/images/defaultAvatar.png";
import ProjectCard from "../../components/projectcard/ProjectCard";
import useGet from "../../hooks/useGet";
import Base from "../../layouts/Base";
import "./authorprofile.css";

const apiUrl = import.meta.env.VITE_REACT_APP_DEFAULT_API_ROUTE;

function AuthorProfile() {
    const { authorId } = useParams();

    const navigate = useNavigate();

    const [data, isLoading, error] = useGet(apiUrl + "/user/writer/" + authorId);

    useEffect(() => {
        error && navigate("/");
    }, []);

    return (
        <Base>
            <div className="container author-profile-wrap">
                <div className="row py-5 px-4">
                    <div className="col-md-10 mx-auto">
                        <div className="bg-white shadow rounded overflow-hidden">
                            <div className="cover">
                                <div className="profile-head">
                                    <div className="profile mr-3 text-center">
                                        {!isLoading ? (
                                            <img src={data && data.images ? data.images.url : defaultAvatar} width={130} className="rounded mb-2 img-thumbnail" alt="avatar" />
                                        ) : (
                                            <div className="bg-white">

                                            <Skeleton.Avatar style={{width:'130px',height:'130px'}} active={true} size="large" shape="square" />
                                            </div>
                                        )}

                                    </div>
                                    <div className="media-body mb-4 text-white">
                                        <h4 className="mt-0 mb-0 text-light">{data?.name}</h4>
                                        <p className="small mt-2 mb-4">
                                            <HiOutlineEnvelope style={{ marginRight: "5px", fontSize: "20px" }} />
                                            {data?.email}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 d-flex justify-content-end text-center" style={{ background: "#EEF4FF" }}>
                                <ul className="d-flex mb-0" style={{ gap: "40px" }}>
                                    <li className="list-inline-item">
                                        <h5 className="font-weight-bold mb-0 d-block">0</h5>
                                        <small>
                                            <IoBookOutline style={{ marginRight: "5px", fontSize: "16px" }} />
                                            Libros
                                        </small>
                                    </li>
                                    <li className="list-inline-item">
                                        <h5 className="font-weight-bold mb-0 d-block">{data?.books?.filter((book) => book.title !== null || book.book_description !== null)?.length}</h5>
                                        <small>
                                            <HiOutlineReceiptRefund style={{ marginRight: "5px", fontSize: "16px" }} />
                                            Proyectos
                                        </small>
                                    </li>
                                </ul>
                            </div>
                            <div className="px-4 py-3">
                                <h5 className="mb-3">Acerca de</h5>
                                <div className="p-4 rounded" style={{ background: "#EEF4FF" }}>
                                    {data?.description || "Vacía"}
                                </div>
                            </div>
                            <div className="py-4 px-4">
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <h5 className="mb-0">Todos los proyectos</h5>
                                </div>
                                <div className="all-projects row">
                                    {data?.books
                                        ?.filter((book) => book.title !== null || book.book_description !== null)
                                        ?.map((project, index) => {
                                            return (
                                                <div key={index} className="col-md-6 mb-5">
                                                    <ProjectCard userInfo={false} project={project && project} />
                                                </div>
                                            );
                                        })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Base>
    );
}

export default AuthorProfile;
