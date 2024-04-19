import { Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import { Rate } from "antd";
import "swiper/css";
import "swiper/css/effect-fade";




function HomeTestimonial() {
    return (
        <section className="content-inner-2 testimonial-wrapper" style={{ height: "fit-content" }}>
            <div className="container">
                <div className="testimonial">
                    <div className="section-head book-align">
                        <div>
                            <h2 className="title mb-0">Testimonials</h2>
                            <p className="m-b0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        </div>
                        <div className="pagination-align style-1">
                            <div className="testimonial-button-prev swiper-button-prev">
                                <i className="fa-solid fa-angle-left" />
                            </div>
                            <div className="testimonial-button-next swiper-button-next">
                                <i className="fa-solid fa-angle-right" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="testimonial-swiper">
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
                    >
                        <SwiperSlide>
                            <div className="testimonial-1 overflow-hidden">
                                <div className="testimonial-info">
                                    <Rate disabled defaultValue={4} allowHalf />
                                    <div className="testimonial-text">
                                        <p>Very impresive store. Your book made studying for the ABC certification exams a breeze. Thank you very much</p>
                                    </div>
                                    <div className="testimonial-detail">
                                        <div className="testimonial-pic">
                                            <img src="https://i.pravatar.cc/150?img=3" alt="book" />
                                        </div>
                                        <div className="info-right">
                                            <h6 className="testimonial-name">Jason Huang</h6>
                                            <span className="testimonial-position">Book Lovers</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial-1 overflow-hidden">
                                <div className="testimonial-info">
                                    <Rate disabled defaultValue={4} allowHalf />
                                    <div className="testimonial-text">
                                        <p>Very impresive store. Your book made studying for the ABC certification exams a breeze. Thank you very much</p>
                                    </div>
                                    <div className="testimonial-detail">
                                        <div className="testimonial-pic">
                                            <img src="https://i.pravatar.cc/150?img=38" alt="book" />
                                        </div>
                                        <div className="info-right">
                                            <h6 className="testimonial-name">Jason Huang</h6>
                                            <span className="testimonial-position">Book Lovers</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial-1 overflow-hidden">
                                <div className="testimonial-info">
                                    <Rate disabled defaultValue={4} allowHalf />
                                    <div className="testimonial-text">
                                        <p>Very impresive store. Your book made studying for the ABC certification exams a breeze. Thank you very much</p>
                                    </div>
                                    <div className="testimonial-detail">
                                        <div className="testimonial-pic">
                                            <img src="https://i.pravatar.cc/150?img=35" alt="book" />
                                        </div>
                                        <div className="info-right">
                                            <h6 className="testimonial-name">Jason Huang</h6>
                                            <span className="testimonial-position">Book Lovers</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial-1 overflow-hidden">
                                <div className="testimonial-info">
                                    <Rate disabled defaultValue={4} allowHalf />
                                    <div className="testimonial-text">
                                        <p>Very impresive store. Your book made studying for the ABC certification exams a breeze. Thank you very much</p>
                                    </div>
                                    <div className="testimonial-detail">
                                        <div className="testimonial-pic">
                                            <img src="https://i.pravatar.cc/150?img=2" alt="book" />
                                        </div>
                                        <div className="info-right">
                                            <h6 className="testimonial-name">Jason Huang</h6>
                                            <span className="testimonial-position">Book Lovers</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default HomeTestimonial;
