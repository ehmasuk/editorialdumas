// import Swiper core and required modules
import { Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Rate } from "antd";
import { useRef } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import useGet from "../../hooks/useGet";
const apiUrl = import.meta.env.VITE_REACT_APP_DEFAULT_API_ROUTE;

function HomeBookSale({ sectionTitle }) {
    const [booksData, isLoading] = useGet(apiUrl + "/user/book");

    const swiperRef = useRef();

    return (
        <section className="content-inner-1">
            <div className="container">
                <div className="section-head book-align">
                    <h2 className="title mb-0">{sectionTitle}</h2>
                    <div className="pagination-align style-1">
                        <div className="swiper-button-prev hol" onClick={() => swiperRef.current?.slidePrev()}>
                            <i className="fa-solid fa-angle-left" />
                        </div>
                        <div className="swiper-pagination-two" />
                        <div className="swiper-button-next" onClick={() => swiperRef.current?.slideNext()}>
                            <i className="fa-solid fa-angle-right" />
                        </div>
                    </div>
                </div>
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={50}
                    slidesPerView={5}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        480: { slidesPerView: 2, spaceBetween: 20 },
                        768: { slidesPerView: 3, spaceBetween: 20 },
                        1024: { slidesPerView: 5, spaceBetween: 20 },
                    }}
                    loop={true}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                >
                    {booksData &&
                        booksData?.map((item, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div key={index} className="swiper-slide">
                                        <div
                                            className="books-card style-3"
                                            data-wow-delay="0.2s"
                                        >
                                            <div className="dz-media">
                                                <Link to={`/book/${item?.id}`}>
                                                    <img style={{ height: "320px", objectFit: "contain" }} src={item?.images.filter((img) => img.is_video === null)[0].url} alt="book" />
                                                </Link>
                                            </div>
                                            <div className="dz-content">
                                                <h5 className="title" style={{ minHeight: "45px" }}>
                                                    <Link to={`/book/${item?.id}`}>{item?.title}</Link>
                                                </h5>
                                                <ul className="dz-tags">
                                                    <li>
                                                        <a href="#">de {item?.author_name}</a>
                                                    </li>
                                                </ul>
                                                <div className="book-footer">
                                                    <div className="rate">
                                                        <Rate disabled allowHalf defaultValue={5} style={{ color: "#FFA808", fontSize: "14px" }} />
                                                    </div>
                                                    <div className="price">
                                                        <span className="price-num">{item?.discount_price}€</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                </Swiper>
            </div>
        </section>
    );
}

export default HomeBookSale;
