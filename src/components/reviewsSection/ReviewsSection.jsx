import { Modal, Progress, Rate } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BsEmojiExpressionless, BsEmojiFrown, BsEmojiHeartEyes, BsEmojiNeutral, BsEmojiSmile } from "react-icons/bs";
import { useDispatch } from "react-redux";
import defaultAvatar from "../../assets/images/defaultAvatar.png";
import { daysRemaining } from "../../database/globalFunctions";
import { hideLoader, showLoader } from "../../features/CombineSlice";
import useValidation from "../../hooks/useValidation";
import "./reviewssection.css";

const apiUrl = import.meta.env.VITE_REACT_APP_DEFAULT_API_ROUTE;

const defaultValue = {
    name: "",
    content: "",
    review: "",
};

function ReviewsSection({ bookId, allReviews, reFetch }) {
    const dispatch = useDispatch();

    const customIcons = {
        1: <BsEmojiExpressionless />,
        2: <BsEmojiFrown />,
        3: <BsEmojiNeutral />,
        4: <BsEmojiSmile />,
        5: <BsEmojiHeartEyes />,
    };

    const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

    const [reviewData, setReviewData] = useState(defaultValue);

    const [validation, showErrors, setShowErrors] = useValidation(reviewData);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validation.isValid) {
            dispatch(showLoader());
            try {
                await axios.post(apiUrl + "/user/review", { ...reviewData, product_id: bookId });
                setReviewData(defaultValue);
                toast.success("Revisión enviada con éxito");
                setIsReviewModalOpen(false);
                reFetch();
                dispatch(hideLoader());
            } catch (error) {
                toast.error("Algo salió mal. Por favor, vuelva a intentarlo");
            }finally{
                dispatch(hideLoader());
            }
        } else {
            setShowErrors(true);
        }

    };

    const calculateAverageRating = (reviews) => {
        if (reviews.length === 0) return 0;
        const totalRating = reviews.reduce((sum, review) => sum + parseFloat(review.rating), 0);
        return (totalRating / reviews.length).toFixed(1);
    };

    function calculateRatingDistribution(reviews) {
        const ratingCounts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };

        reviews.forEach((review) => {
            const rating = parseInt(review.rating);
            if (ratingCounts.hasOwnProperty(rating)) {
                ratingCounts[rating]++;
            }
        });

        const totalReviews = reviews?.length;
        const ratingPercentages = {};

        for (const [rating, count] of Object.entries(ratingCounts)) {
            ratingPercentages[rating] = {
                count: count,
                percentage: ((count / totalReviews) * 100).toFixed(2),
            };
        }

        return ratingPercentages;
    }

    const [ratingDis, setRatingDis] = useState("");

    useEffect(() => {
        allReviews && setRatingDis(calculateRatingDistribution(allReviews));
    }, [allReviews]);

    return (
        <div className="container content-inner-1">
            <h3 className="text-center" style={{ marginBottom: "50px" }}>
                Opiniones de lectores
            </h3>

            <div className="reviews-head">
                <div className="review-info">
                    <h3>
                        {calculateAverageRating(allReviews && allReviews)} <span style={{ fontWeight: "400" }}>/5</span>{" "}
                    </h3>
                    <p>{allReviews?.length} lectores</p>
                    {/* <Rate allowHalf defaultValue={5} style={{ color: "#EAA451" }} disabled /> */}
                    <button onClick={() => setIsReviewModalOpen(true)} className="btn btn-sm btn-primary">
                        Agregar opinión
                    </button>
                </div>
                <div className="review-stat">
                    {[...Array(5)].map((e, i, arr) => {
                        return (
                            <div key={i} className="single-stat">
                                <Rate allowHalf defaultValue={arr.length - i} style={{ color: "#EAA451" }} disabled />
                                <span className="rate-count">{ratingDis[arr.length - i]?.count}</span>
                                <Progress percent={ratingDis[arr.length - i]?.percentage} style={{ fontSize: "0" }} size={"small"} status="active" />
                            </div>
                        );
                    })}
                </div>
            </div>
            <hr style={{ maxWidth: "800px", margin: "auto", marginTop: "30px" }} />
            <div className="customers-review" style={{ maxWidth: "650px", margin: "auto" }}>
                <div className="comment-wraper">
                    {allReviews?.map((review, index) => {
                        return (
                            <div className="comment-replays" key={index}>
                                <div className="replay-box">
                                    <img src={defaultAvatar} alt className="img-fluid" />
                                    <div className="replay-box-right">
                                        <div className="top">
                                            <p className="name">{review?.name}</p>
                                            <div className="given-review">
                                                <Rate defaultValue={review?.rating} style={{ color: "#EAA451" }} disabled /> <h5 style={{ margin: "0" }}>{Number(review?.rating).toFixed(2)}</h5>
                                            </div>
                                        </div>

                                        <div className="bottom">
                                            <p className="comment">{review?.content}</p>
                                        </div>
                                        <small>{daysRemaining(review?.created_at) > 0 ? `Hace ${daysRemaining(review?.created_at)} día` : "Hoy"}</small>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <Modal className="book-review-popup" footer={null} centered open={isReviewModalOpen} onCancel={() => setIsReviewModalOpen(false)}>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div className="text-center">
                            <h4 className="mt-3">¿Cómo calificarías este libro?</h4>
                            <Rate
                                character={({ index = 0 }) => customIcons[index + 1]}
                                style={{ color: "#E58C23", display: "flex", justifyContent: "center", gap: "20px", fontSize: "35px" }}
                                defaultValue={reviewData.review}
                                tooltips={["Negativo", "Como la media", "Neutro", "Bueno", "Excelente"]}
                                onChange={(e) => setReviewData({ ...reviewData, review: e })}
                            />
                            {showErrors && !validation.review && <p className="text-danger">Elige tu opinión</p>}
                        </div>
                        <input
                            value={reviewData.name}
                            onChange={(e) => setReviewData({ ...reviewData, name: e.target.value })}
                            type="text"
                            className="form-control user-review-int"
                            placeholder="Introduzca su nombre"
                        />
                        {showErrors && !validation.name && <p className="text-danger">Introduce tu email</p>}
                        <textarea
                            value={reviewData.content}
                            onChange={(e) => setReviewData({ ...reviewData, content: e.target.value })}
                            className="form-control user-review-int"
                            placeholder="Escribe tu experiencia..."
                        ></textarea>
                        {showErrors && !validation.content && <p className="text-danger">Ingrese su revisión</p>}
                        <button className="btn btn-secondary mt-3 w-100">Envíe su opinión</button>
                    </form>
                </div>
            </Modal>
        </div>
    );
}

export default ReviewsSection;
