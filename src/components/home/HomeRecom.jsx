// import Swiper core and required modules
import { Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import { Link } from "react-router-dom";
import "swiper/css";
import useGet from "../../hooks/useGet";
import { Skeleton } from "antd";

const apiUrl = import.meta.env.VITE_REACT_APP_DEFAULT_API_ROUTE;

function HomeRecom() {
    const [booksData, isLoading] = useGet(apiUrl + "/user/book");

    return (
        <section className="content-inner-1 bg-grey reccomend ">
            <div className="container">
                <div className="section-head text-center">
                    <h2 className="title">Libros en edición</h2>
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
                >
                    {booksData &&
                        booksData?.map((item, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className="books-card style-1 wow fadeInUp" data-wow-delay="0.1s">
                                        <div className="dz-media">
                                            <Link to={`/book/${item?.id}`}>
                                                <img style={{ height: "300px", objectFit: "contain" }} src={item?.images.filter((img) => img.is_video === null)[0].url} alt="book" />
                                            </Link>
                                        </div>
                                        <div className="dz-content text-left">
                                            <Link to={`/book/${item?.id}`}>
                                                <h4 className="title" style={{ fontSize: "16px", textAlign: "left" }}>
                                                    {item?.title}
                                                </h4>
                                            </Link>
                                            {/* <span className="price" style={{ textAlign: "left" }}>
                                                €{item?.discount_price}
                                            </span> */}
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}

                        {
                            !booksData && <Skeleton active/>
                        }
                </Swiper>
            </div>
        </section>
    );
}

export default HomeRecom;
