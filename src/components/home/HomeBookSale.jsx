// import Swiper core and required modules
import { Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { FaStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { booksData } from "../../database/booksData";
import { Rate } from "antd";
import { useRef } from "react";
import toast from "react-hot-toast";

function HomeBookSale({sectionTitle}) {


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
                    {booksData.map((item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div key={index} className="swiper-slide" >
                                    <div onClick={()=>toast('Estamos trabajando en ello, gracias por su interés',{icon: '📣',})} className="books-card style-3 wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="dz-media">
                                            <img style={{ height: "320px", objectFit: "cover", width: "100%" }} src={item.img} alt="book" />
                                        </div>
                                        <div className="dz-content">
                                            <h5 className="title" style={{minHeight:'45px'}}>
                                                <a href="#">{item.title}</a>
                                            </h5>
                                            <ul className="dz-tags">
                                                <li>
                                                    <a href="#">de {item.authorName}</a>
                                                </li>
                                            </ul>
                                            <div className="book-footer">
                                                <div className="rate">
                                                <Rate disabled allowHalf defaultValue={item.rating} style={{ color: "#FFA808", fontSize: "14px" }} />
                                                </div>
                                                <div className="price">
                                                    <span className="price-num">{item.price}€</span>
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
