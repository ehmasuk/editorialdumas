import { Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { useRef } from "react";
import "swiper/css";
import "swiper/css/effect-fade";

import { booksData } from "../../database/booksData";

function HomeSpecialOffer() {
    const swiperRef = useRef();

    return (
        <section className="content-inner-1" style={{ height: "fit-content" }}>
            <div className="container">
                <div className="section-head book-align">
                    <h2 className="title mb-0">Special Offers</h2>
                    <div className="pagination-align style-1">
                        <div className="book-button-prev swiper-button-prev" onClick={() => swiperRef.current?.slidePrev()}>
                            <i className="fa-solid fa-angle-left" />
                        </div>
                        <div className="book-button-next swiper-button-next" onClick={() => swiperRef.current?.slideNext()}>
                            <i className="fa-solid fa-angle-right" />
                        </div>
                    </div>
                </div>

                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={50}
                    slidesPerView={3}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        480: { slidesPerView: 1, spaceBetween: 20 },
                        768: { slidesPerView: 2, spaceBetween: 20 },
                        1024: { slidesPerView: 3, spaceBetween: 20 },
                    }}
                    loop={true}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                >
                    {booksData.map((item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div>
                                    <div className="dz-card style-2 wow fadeInUp" data-wow-delay="0.1s">
                                        <div className="dz-media">
                                            <a href="books-detail.html">
                                                <img src="https://picsum.photos/500/300?random=67" alt="book" />
                                            </a>
                                        </div>
                                        <div className="dz-info">
                                            <h4 className="dz-title">
                                                <a href="books-detail.html">{item.title}</a>
                                            </h4>
                                            <div className="dz-meta">
                                                <ul className="dz-tags">
                                                    <li>
                                                        <a href="books-detail.html">BIOGRAPHY</a>
                                                    </li>
                                                    <li>
                                                        <a href="books-detail.html">THRILLER</a>
                                                    </li>
                                                    <li>
                                                        <a href="books-detail.html">HORROR</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                            <div className="bookcard-footer">
                                                <a href="shop-cart.html" className="btn btn-primary m-t15 btnhover2">
                                                    <i className="flaticon-shopping-cart-1 m-r10" /> Add to cart
                                                </a>
                                                <div className="price-details">
                                                    €{item.price} <del>€25</del>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}

                    <div className="pagination-align style-2">
                        <div onClick={() => swiperRef.current?.slidePrev()} className="swiper-button-prev">
                            <i className="fa-solid fa-angle-left" />
                        </div>
                        <div className="swiper-pagination-three" />
                        <div onClick={() => swiperRef.current?.slideNext()} className="swiper-button-next">
                            <i className="fa-solid fa-angle-right" />
                        </div>
                    </div>
                </Swiper>
            </div>
        </section>
    );
}

export default HomeSpecialOffer;
