import { Spin, Tooltip } from "antd";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import defaultAvatar from "../../assets/images/defaultAvatar.png";

import { LuTrash2 } from "react-icons/lu";
import { showLoginPopup } from "../../features/LoginPopupSlice";

const apiUrl = import.meta.env.VITE_REACT_APP_DEFAULT_API_ROUTE;

function ProjectComments({ getData, userproject }) {
    const [userComments, setUserComments] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {
        userproject && setUserComments(userproject?.comments);
    }, [userproject]);

    const { isLogedin } = useSelector((store) => store.AuthCheckerSlice);

    const { userInfo } = useSelector((store) => store.UserInfoSlice);

    const [comment, setComment] = useState("");

    const [isCommenting, setIsCommenting] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isLogedin) {
            console.log(userComments);

            setIsCommenting(true);
            const sendAble = { book_id: userproject.id, comment: comment, user_id: userInfo.id };

            try {
                await axios.post(`${apiUrl}/user/comment`, sendAble);
                setComment("");
                getData();
                toast.success("Éxito");
            } catch (error) {
                console.log(error);
                toast.error("Algo salió mal, por favor inténtalo de nuevo más tarde.");
            } finally {
                setTimeout(() => {
                    setIsCommenting(false);
                }, 500);
            }
        } else {
            toast.error("Debes iniciar sesión hacer un comentario");
            setTimeout(() => {
                dispatch(showLoginPopup());
            }, 500);
        }
    };

    const calculateDaysAgo = (dateString) => {
        const givenDate = new Date(dateString);
        const currentDate = new Date();
        const differenceInMs = currentDate - givenDate;
        const daysAgo = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));
        return daysAgo;
    };

    const [replay, setReplay] = useState("");
    const [isRepling, setIsRepling] = useState(null);

    const [showReplayInput, setShowReplayInput] = useState(false);
    const [showReplayInputId, setShowReplayInputId] = useState(null);

    const handleShowReplayInput = (id) => {
        setShowReplayInput(!showReplayInput);
        setShowReplayInputId(id);
    };

    const handleReplay = async (e) => {
        e.preventDefault();

        if (isLogedin) {
            setIsRepling(true);
            const sendAble = { comment: replay, comment_id: showReplayInputId, user_id: userInfo.id };

            try {
                await axios.post(`${apiUrl}/user/reply_on_comment`, sendAble);
                setReplay("");
                getData();
                toast.success("Éxito");
            } catch (error) {
                console.log(error);
                toast.error("Algo salió mal, por favor inténtalo de nuevo más tarde.");
            } finally {
                setTimeout(() => {
                    setIsRepling(false);
                }, 500);
            }

            console.log(sendAble);
        } else {
            toast.error("Debes iniciar sesión hacer un comentario");
            setTimeout(() => {
                dispatch(showLoginPopup());
            }, 500);
        }
    };

    document.addEventListener("click", () => {
        setShowReplayInput(false);
    });

    const [isDeleting, setIsDelating] = useState(null);

    const handleComentDelete = async (commentId) => {
        setIsDelating(true);
        try {
            await axios.delete(`${apiUrl}/user/comment/${commentId}`);
            getData();
            toast.success("Tu comentario eliminado");
        } catch (error) {
            console.log(error);
            toast.error("Algo salió mal, por favor inténtalo de nuevo más tarde.");
        } finally {
            setTimeout(() => {
                setIsDelating(false);
            }, 500);
        }
    };

    return (
        <Spin spinning={isDeleting} tip="Cargando...">
            <div className="comment-wraper">
                <Spin spinning={isCommenting} tip="Adding your comment">
                    <div className="author">
                        <img src={userInfo && userInfo.images ? userInfo.images.url : defaultAvatar} alt="avatar" className="img-fluid" />
                        <div className="comment-box">
                            <form onSubmit={handleSubmit}>
                                <textarea name="comment" value={comment} required onChange={(e) => setComment(e.target.value)} placeholder="Deja un comentario" />
                                <button className="submit-btn">Entregar</button>
                            </form>
                        </div>
                    </div>
                </Spin>

                <h4>{userComments?.length} comentarios</h4>
                <hr />

                <AnimatePresence>
                    {userComments &&
                        userComments?.map((comment) => {
                            return (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                    key={comment.id}
                                    className="comment-replays"
                                >
                                    <div className="replay-box">
                                        <img src={comment && comment.user.images ? comment.user.images.url : defaultAvatar} alt="avatar" className="img-fluid" />
                                        <div className="replay-box-right">
                                            <div className="top">
                                                <p className="name">{comment?.user?.name}</p>
                                                {isLogedin && comment.user_id == userInfo.id && (
                                                    <Tooltip title="Borrar">
                                                        <LuTrash2 role="button" onClick={() => handleComentDelete(comment.id)} />
                                                    </Tooltip>
                                                )}
                                            </div>
                                            <div className="bottom">
                                                <p className="comment">{comment?.comment}</p>
                                            </div>
                                            <div className="real-replay-box" onClick={(e) => e.stopPropagation()}>
                                                <div className="d-flex">
                                                    <span className="date">{calculateDaysAgo(comment.created_at) > 0 ? `Hace ${calculateDaysAgo(comment.created_at)} día` : "Hoy"}</span>

                                                    {userInfo.id !== Number(comment?.user_id) && (
                                                        <div className="rest" onClick={() => handleShowReplayInput(comment.id)}>
                                                            Responder
                                                        </div>
                                                    )}
                                                </div>

                                                {showReplayInput && showReplayInputId == comment.id && (
                                                    <Spin spinning={isRepling}>
                                                        <div className="author">
                                                            <img src={userInfo && userInfo.images ? userInfo.images.url : defaultAvatar} alt="avatar" className="img-fluid" />
                                                            <div className="comment-box">
                                                                <form onSubmit={handleReplay}>
                                                                    <textarea name="comment" value={replay} required onChange={(e) => setReplay(e.target.value)} placeholder="Deja un comentario" />
                                                                    <button className="submit-btn">Entregar</button>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </Spin>
                                                )}

                                                {comment?.replys?.map((reply) => {
                                                    if (Number(reply.commentable_id) == comment.id) {
                                                        return (
                                                            <motion.div
                                                                initial={{ height: 0, opacity: 0 }}
                                                                exit={{ height: 0, opacity: 0 }}
                                                                animate={{ height: "auto", opacity: 1 }}
                                                                transition={{ duration: 0.3 }}
                                                                key={reply.id}
                                                                className="replay-box"
                                                            >
                                                                <img src={reply && reply.user.images ? reply.user.images.url : defaultAvatar} alt="avatar" className="img-fluid" />
                                                                <div className="replay-box-right">
                                                                    <div className="top">
                                                                        <p className="name">{reply?.user?.name}</p>
                                                                        {isLogedin && reply.user_id == userInfo.id && (
                                                                            <Tooltip title="Borrar">
                                                                                <LuTrash2 role="button" onClick={() => handleComentDelete(reply.id)} />
                                                                            </Tooltip>
                                                                        )}
                                                                    </div>
                                                                    <div className="bottom">
                                                                        <p className="comment">{reply?.comment}</p>
                                                                    </div>
                                                                    <div className="replay">
                                                                        <span className="date">
                                                                            {calculateDaysAgo(reply.created_at) > 0 ? `Hace ${calculateDaysAgo(reply.created_at)} día` : "Hoy"}
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </motion.div>
                                                        );
                                                    }
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                </AnimatePresence>
            </div>
        </Spin>
    );
}

export default ProjectComments;
