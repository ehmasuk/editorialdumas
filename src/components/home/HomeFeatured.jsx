// import Swiper core and required modules
import { Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import { useRef } from "react";

import { booksData } from "../../database/booksData";



function HomeFeatured() {
    const swiperRef = useRef();

    return (
        <section className="content-inner-1 bg-grey reccomend" style={{ height: "fit-content" }}>
            <div className="container">
                <div className="section-head text-center">
                    <div className="circle style-1" />
                    <h2 className="title">Featured Product</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris{" "}
                    </p>
                </div>
            </div>
            <div className="container">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                >
                    {booksData.map((item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div key={index} className="swiper-slide">
                                    <div className="books-card style-2">
                                        <div className="dz-media">
                                            <img src={item.img} alt="book" />
                                        </div>
                                        <div className="dz-content">
                                            <h6 className="sub-title">BEST SELLER</h6>
                                            <h2 className="title">{item.title}</h2>
                                            <ul className="dz-tags">
                                                <li>Napoleon Hill</li>
                                            </ul>
                                            <p className="text">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                quis nostrud exercitation ullamco laboris{" "}
                                            </p>
                                            <div className="price">
                                                <span className="price-num">€{item.price}</span>
                                                <del>€12.0</del>
                                                <span className="badge">20% OFF</span>
                                            </div>
                                            <div className="bookcard-footer">
                                                <a href="shop-cart.html" className="btn btn-primary btnhover m-t15 m-r10">
                                                    Buy Now
                                                </a>
                                                <a href="books-detail.html" className="btn btn-outline-secondary btnhover m-t15">
                                                    See Details
                                                </a>
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

export default HomeFeatured;
