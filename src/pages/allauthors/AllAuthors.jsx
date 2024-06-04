import { Link } from "react-router-dom";
import Base from "../../layouts/Base";

import "./allauthors.css";

import { Skeleton } from "antd";
import defaultAvatar from "../../assets/images/defaultAvatar.png";
import useGet from "../../hooks/useGet";

const apiUrl = import.meta.env.VITE_REACT_APP_DEFAULT_API_ROUTE;

function AllAuthors() {
    const [data, isLoading] = useGet(apiUrl + "/user/writer");

    data && console.log(data);

    return (
        <Base>
            <div className="all-autores-wraper">
                <div className="container content-inner-1">
                    <div className="row">
                        {data &&
                            data?.map((author, index) => {
                                return (
                                    <div key={index} className="col-sm-3">
                                        <Link to={`/author/${author?.id}`}>
                                            <div className="single-user">
                                                <img src={author && author.images ? author.images.url : defaultAvatar} alt="avatar" />
                                                <div className="name">{author?.name}</div>
                                                <div className="projects">{author?.books?.filter((book) => book.status == "1")?.length} proyectos</div>
                                            </div>
                                        </Link>
                                    </div>
                                );
                            })}

                        {isLoading && (
                            <div className="row">
                                <div className="col-md-3 mb-5">
                                    <Skeleton active />
                                </div>
                                <div className="col-md-3 mb-5">
                                    <Skeleton active />
                                </div>
                                <div className="col-md-3 mb-5">
                                    <Skeleton active />
                                </div>
                                <div className="col-md-3 mb-5">
                                    <Skeleton active />
                                </div>
                                <div className="col-md-3 mb-5">
                                    <Skeleton active />
                                </div>
                                <div className="col-md-3 mb-5">
                                    <Skeleton active />
                                </div>
                                <div className="col-md-3 mb-5">
                                    <Skeleton active />
                                </div>
                                <div className="col-md-3 mb-5">
                                    <Skeleton active />
                                </div>
                                <div className="col-md-3 mb-5">
                                    <Skeleton active />
                                </div>
                                <div className="col-md-3 mb-5">
                                    <Skeleton active />
                                </div>
                                <div className="col-md-3 mb-5">
                                    <Skeleton active />
                                </div>
                                <div className="col-md-3 mb-5">
                                    <Skeleton active />
                                </div>
                                <div className="col-md-3 mb-5">
                                    <Skeleton active />
                                </div>
                                <div className="col-md-3 mb-5">
                                    <Skeleton active />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Base>
    );
}

export default AllAuthors;
