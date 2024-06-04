import { Divider, Modal, Popover, Rate, Skeleton, Tooltip } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addToCart } from "../../features/CartSlice";
import useGet from "../../hooks/useGet";
import Base from "../../layouts/Base";
const apiUrl = import.meta.env.VITE_REACT_APP_DEFAULT_API_ROUTE;

import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { FaAngleRight, FaFacebook } from "react-icons/fa6";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { IoIosShareAlt } from "react-icons/io";
import { IoInformationCircle, IoPlayCircleOutline } from "react-icons/io5";
import { LiaReadme } from "react-icons/lia";
import { TbTruckDelivery } from "react-icons/tb";
import HomeBookSale from "../../components/home/HomeBookSale";
import ReviewsSection from "../../components/reviewsSection/ReviewsSection";
import { addToWishlist, removeFromWishlist } from "../../features/WishlistSlice";

import ReactPlayer from "react-player";
import NewsLatter from "../../components/newsletter/NewsLatter";
import "./bookdetails.css";

import Paragraph from "antd/es/typography/Paragraph";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton, WhatsappShareButton } from "react-share";
import { formatDate } from "../../database/globalFunctions";

function BookDetails() {
    const [allbooks, isLoading] = useGet(apiUrl + "/user/book");

    const { bookId } = useParams();

    const [data, isLoadingAllBooks, error, getData] = useGet(apiUrl + "/user/book/" + bookId);

    const { wishlistItems } = useSelector((store) => store.WishlistSlice);

    const isInWishlist = wishlistItems.some((e) => e.id === data?.id);

    const dispatch = useDispatch();

    useEffect(() => {
        getData();
        setSeeMore(true);
    }, [bookId]);

    const [seeMore, setSeeMore] = useState(true);

    useEffect(() => {
        data && setSelectedPrice(data?.discount_price);
    }, [data]);

    const [selectedPrice, setSelectedPrice] = useState(null);

    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
    const showVideoModal = () => {
        setIsVideoModalOpen(true);
    };

    const handleVideoCancel = () => {
        setIsVideoModalOpen(false);
        document.querySelector(".book-details-video video").pause();
    };

    data && console.log(data);

    const [isChapterModalOpen, setIsChapterModalOpen] = useState(false);
    const currentYear = new Date().getFullYear();

    const shareOptions = (
        <div className="book-details-share-icons">
            <FacebookShareButton url={`https://editorialdumas.com/book/${data?.id}`}>
                <FaFacebook fontSize={25} style={{ color: "#0866FF" }} />
            </FacebookShareButton>

            <LinkedinShareButton url={`https://editorialdumas.com/book/${data?.id}`}>
                <FaLinkedin fontSize={25} style={{ color: "#0A66C2" }} />
            </LinkedinShareButton>
            <WhatsappShareButton url={`https://editorialdumas.com/book/${data?.id}`}>
                <FaWhatsapp fontSize={25} style={{ color: "#26C943" }} />
            </WhatsappShareButton>

            <TwitterShareButton url={`https://editorialdumas.com/book/${data?.id}`}>
                <BsTwitterX fontSize={20} style={{ color: "#000" }} />
            </TwitterShareButton>
            <Paragraph
                style={{ fontSize: "23px", margin: 0 }}
                copyable={{
                    text: `https://editorialdumas.com/book/${data?.id}`,
                    tooltips: ["Copiar enlace", "Copiada"],
                }}
            ></Paragraph>
        </div>
    );


    const calculateAverageRating = (reviews) => {
        if (reviews?.length === 0) return 0;
        const totalRating = reviews?.reduce((sum, review) => sum + parseFloat(review.rating), 0);
        return (totalRating / reviews?.length).toFixed(1);
    };

    return (
        <Base>
            <Helmet>
                <meta name="title" content={data?.meta_title} />
                <meta name="description" content={data?.meta_description} />
                <meta name="keywords" content={data?.meta_keywords} />
            </Helmet>

            <div className="page-content">
                <section className="content-inner-1">
                    {data && (
                        <div className="container">
                            <div className="row book-grid-row book-details-wraper style-4 m-b60">
                                <div className="col">
                                    <div className="row">
                                        <div className="col-md-3 text-center">
                                            <img className="book-cover-img" style={{ maxWidth: "100%" }} src={data?.images.filter((img) => img.is_video === null)[0].url} alt="book" />
                                            {data?.images?.filter((img) => img.is_video === "2")[0]?.url && (
                                                <div className="read-book-btn" onClick={() => showVideoModal()}>
                                                    <IoPlayCircleOutline fontSize={25} color="#1A1668" /> Ver video
                                                </div>
                                            )}

                                            {data?.images?.filter((img) => img.is_video === "3")[0]?.url && (
                                                <div className="read-book-btn" style={{ marginBottom: "30px" }} onClick={() => setIsChapterModalOpen(true)}>
                                                    <LiaReadme fontSize={25} color="#1A1668" /> Leer primeras páginas
                                                </div>
                                            )}
                                        </div>
                                        <div className="col-md-5">
                                            <h3 className="title">{data?.title}</h3>
                                            <h4 style={{ fontWeight: "400" }}>{data?.author_name}</h4>
                                            <div className="d-lg-flex d-sm-inline-flex d-flex align-items-center">
                                                <h4 className="mr-2 mb-0">{calculateAverageRating(data?.reviews)}</h4>
                                                <Rate allowHalf value={calculateAverageRating(data?.reviews)} style={{ color: "#EAA451", marginRight: "10px" }} disabled />
                                                <p style={{ color: "#1A1668" }} className="m-b0">
                                                    ({data?.reviews?.length}) opiniones
                                                </p>
                                            </div>
                                            <div className="details-book-category">{data?.category?.title}</div>
                                            <div
                                                className={`book-description ${seeMore && data?.long_description?.length > 500 && "see-more"}`}
                                                dangerouslySetInnerHTML={{ __html: data?.long_description }}
                                            ></div>
                                            {data?.long_description?.length > 500 && (
                                                <p className="see-more-btn" onClick={() => setSeeMore(!seeMore)}>
                                                    Ver {seeMore ? "más" : "menos"}
                                                </p>
                                            )}
                                        </div>
                                        <div className="col-md-4">
                                            <div className="book-details-payment-wrap">
                                                <div className="offer-box">
                                                    {data?.discount_amount && <del>{data?.discount_amount}€</del>}
                                                    {data?.discount_percentage && <div className="offer-info">- {data?.discount_percentage}% de dto. exclusivo web</div>}
                                                </div>

                                                <div className="d-flex align-items-center justify-content-between">
                                                    <h2>{selectedPrice}€</h2>
                                                    <h5>Envio gratis</h5>
                                                </div>
                                                <a className="btn btn-secondary btn-sm btnhover2 w-100">
                                                    <i className="fas fa-money-check-alt" style={{ marginRight: "10px" }}></i> <span>Compra este libro ahora</span>
                                                </a>

                                                <div className="book-format-options">
                                                    <div onClick={() => setSelectedPrice(data?.discount_price)} className={`format-option ${selectedPrice == data?.discount_price && "active"}`}>
                                                        <p>Tapa blanda</p>
                                                        <span>{data?.discount_price}€</span>
                                                    </div>
                                                    <div onClick={() => setSelectedPrice(data?.strike_price)} className={`format-option ${selectedPrice == data?.strike_price && "active"}`}>
                                                        <p>eBook</p>
                                                        <span>{data?.strike_price}€</span>
                                                    </div>
                                                </div>

                                                <div className="carry-options">
                                                    <TbTruckDelivery fontSize={35} color="#1A1668" />
                                                    <b style={{ color: "#1A1668" }}>Entrega aproximada en</b>
                                                    <span>3 días</span>
                                                    <Tooltip title="Recibirá su producto dentro de los 3 días hábiles">
                                                        <IoInformationCircle fontSize={20} color="#1A1668" />
                                                    </Tooltip>
                                                </div>

                                                <div className="bottom-actions">
                                                    {!isInWishlist && (
                                                        <div onClick={() => dispatch(addToWishlist(data))}>
                                                            <GoHeart fontSize={20} color="#1A1668" />
                                                            Guardar
                                                        </div>
                                                    )}
                                                    {isInWishlist && (
                                                        <div onClick={() => dispatch(removeFromWishlist(data))}>
                                                            <GoHeartFill fontSize={20} color="#1A1668" /> Guardado
                                                        </div>
                                                    )}

                                                    <div>
                                                        <Popover content={shareOptions} title="Compartir en:" style={{ width: "fit-content" }}>
                                                            <IoIosShareAlt fontSize={20} color="#1A1668" /> COMPARTIR
                                                        </Popover>
                                                    </div>
                                                </div>
                                                <a onClick={() => dispatch(addToCart(data))} style={{ marginTop: "10px" }} className="btn btn-primary btn-sm btnhover2 w-100">
                                                    <i className="fas fa-shopping-cart" style={{ marginRight: "10px" }}></i> <span>Añadir</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="book-details-author pb-5">
                                <div>
                                    <Divider>
                                        <h4 className="m-0">Ficha técnica</h4>
                                    </Divider>
                                    <div className="row justify-content-around py-3">
                                        <div className="col-md-6" style={{ borderRight: "1px solid #8080804f" }}>
                                            <div style={{ maxWidth: "400px", margin: "auto" }}>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <div className="info">Titulo del libro:</div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="value">{data?.title}</div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <div className="info">Autoría:</div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="value">{data?.author_name}</div>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-6">
                                                        <div className="info">Nº de páginas:</div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="value">{data?.no_of_pages || "--"}</div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <div className="info">Editorial:</div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="value">Editorial Dumas</div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <div className="info">Idioma:</div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="value">Español</div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <div className="info">Encuadernación:</div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="value">Editorial Dumas</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div style={{ maxWidth: "400px", margin: "auto" }}>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <div className="info">ISBN:</div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="value">{data?.ISBN || "--"}</div>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-6">
                                                        <div className="info">Año de edición:</div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="value">{currentYear}</div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <div className="info">Plaza de edición:</div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="value">Editorial Dumas</div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <div className="info">Ilustrador:</div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="value">Editorial Dumas</div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <div className="info">Fecha de lanzamiento:</div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="value">{formatDate(data?.created_at)}</div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <div className="info">Alto:</div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="value">{data?.alto || "--"}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <Divider>
                                        <h4 className="m-0">Escrito por...</h4>
                                    </Divider>
                                    <div className="row py-3" style={{ background: "#F3F4F6" }}>
                                        <div className="col-md-8">
                                            <div className="row">
                                                {data?.user?.images?.url && (
                                                    <div className="col-md-3">
                                                        <img src={data?.user?.images?.url} alt="" />
                                                    </div>
                                                )}
                                                <div className="col-md-9">
                                                    <h4>{data?.author_name}</h4>
                                                    <p className="author-des">{data?.user?.description}</p>
                                                    <Link className="author-link" to={`/author/${data?.user?.id}`}>
                                                        Ver ficha del author <FaAngleRight fontSize={20} />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="author-subs">
                                                <div>
                                                    <p>Recibe las novedades de la editorial en tu email</p>
                                                    <a href="#newsletter-section">
                                                        <button className="btn btn-primary btn-sm">Suscríbete al boletín</button>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <ReviewsSection bookId={data?.id} allReviews={data?.reviews} reFetch={getData && getData} />
                            <HomeBookSale allBooks={allbooks && allbooks} isLoading={isLoadingAllBooks} sectionTitle="Descubrir más" />
                        </div>
                    )}

                    {isLoading && (
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8">
                                    <Skeleton active rows={10} />
                                </div>
                                <div className="col-md-4">
                                    <Skeleton active rows={10} />
                                </div>
                            </div>
                            <Skeleton active rows={50} />
                            <Skeleton active rows={50} />
                            <Skeleton active rows={50} />
                            <Skeleton active rows={50} />
                        </div>
                    )}
                </section>
            </div>

            <div id="newsletter-section">
                <NewsLatter />
            </div>

            <Modal className="book-details-video" footer={null} centered open={isVideoModalOpen} onCancel={handleVideoCancel} width={800}>
                <ReactPlayer playing={true} width="100%" controls={true} url={data?.images?.filter((img) => img.is_video === "2")[0]?.url} />
            </Modal>

            <Modal className="book-details-chapter" footer={null} centered open={isChapterModalOpen} onCancel={() => setIsChapterModalOpen(false)} width="90%">
                <iframe src={data?.images?.filter((img) => img.is_video === "3")[0]?.url + "#toolbar=0&navpanes=0"} type="application/pdf" style={{ height: "90vh" }} width="100%"></iframe>
            </Modal>
        </Base>
    );
}

export default BookDetails;
