import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import backWire from "../../assets/images/waveelement.png";

import { Rate } from "antd";
import media2 from "../../assets/images/banner-media.png";
import media1 from "../../assets/images/banner-media2.png";

import { booksData } from "../../database/booksData";

function HomeHero() {
    return (
        <div className="main-slider style-1">
            <Swiper
                modules={[EffectFade, Autoplay]}
                slidesPerView={1}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                speed={1500}
                loop={true}
                effect="fade"
            >
                <SwiperSlide>
                    <div className="bg-blue" style={{ backgroundImage: `url('${backWire}')` }}>
                        <div className="container">
                            <div className="banner-content">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="swiper-content">
                                            <div className="content-info">
                                                <h6 className="sub-title">BEST MANAGEMENT </h6>
                                                <h1 className="title mb-0">Think and Grow Rich</h1>
                                                <ul className="dz-tags">
                                                    <li>
                                                        <a href="#">Napoleon Hill</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Business &amp; Strategy</a>
                                                    </li>
                                                </ul>
                                                <p className="text mb-0">
                                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using
                                                    Lorem Ipsum is that it has a more-or-less normal.
                                                </p>
                                                <div className="price">
                                                    <span className="price-num">€17.2</span>
                                                    <del>€15.25</del>
                                                    <span className="badge badge-danger">15% OFF</span>
                                                </div>
                                                <div className="content-btn">
                                                    <a className="btn btn-primary btnhover" href="books-grid-view.html">
                                                        Buy Now
                                                    </a>
                                                    <a className="btn border btnhover ms-4 text-white" href="books-detail.html">
                                                        See Details
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="partner">
                                                <p>Our partner</p>
                                                <div className="brand-logo">
                                                    <img style={{ maxWidth: "100px" }} src="https://img.logoipsum.com/288.svg" alt="client" />
                                                    <img style={{ maxWidth: "100px" }} className="mid-logo" src="https://img.logoipsum.com/288.svg" alt="client" />
                                                    <img style={{ maxWidth: "100px" }} src="https://img.logoipsum.com/288.svg" alt="client" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="banner-media">
                                            <img src={media1} alt="banner-media" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-blue" style={{ backgroundImage: `url('${backWire}')` }}>
                        <div className="container">
                            <div className="banner-content">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="swiper-content">
                                            <div className="content-info">
                                                <h6 className="sub-title">BEST SELLER</h6>
                                                <h1 className="title mb-0">Pushing Clouds</h1>
                                                <ul className="dz-tags">
                                                    <li>
                                                        <a href="#">Napoleon Hill</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Business &amp; Strategy</a>
                                                    </li>
                                                </ul>
                                                <p className="text mb-0">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                    quis nostrud exercitation ullamco laboris
                                                </p>
                                                <div className="price">
                                                    <span className="price-num">€9.5</span>
                                                    <del>€12.0</del>
                                                    <span className="badge badge-danger">20% OFF</span>
                                                </div>
                                                <div className="content-btn">
                                                    <a className="btn btn-primary btnhover" href="books-grid-view.html">
                                                        Buy Now
                                                    </a>
                                                    <a className="btn border btnhover ms-4 text-white" href="books-detail.html">
                                                        See Details
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="partner">
                                                <p>Our partner</p>
                                                <div className="brand-logo">
                                                    <img style={{ maxWidth: "100px" }} src="https://img.logoipsum.com/288.svg" alt="client" />
                                                    <img style={{ maxWidth: "100px" }} className="mid-logo" src="https://img.logoipsum.com/288.svg" alt="client" />
                                                    <img style={{ maxWidth: "100px" }} src="https://img.logoipsum.com/288.svg" alt="client" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="banner-media">
                                            <img src={media2} alt="banner-media1" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className="swiper main-swiper-thumb">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={10}
                    slidesPerView={2}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        480: { slidesPerView: 2, spaceBetween: 10 },
                        768: { slidesPerView: 2, spaceBetween: 10 },
                        1024: { slidesPerView: 2, spaceBetween: 10 },
                    }}
                    loop={true}
                >
                    {booksData.map((book, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="books-card">
                                    <div className="dz-media">
                                        <img src={book.img} style={{ height: "120px", objectFit: "contain" }} alt="book" />
                                    </div>
                                    <div className="dz-content">
                                        <h5 className="title mb-0">{book.title.length > 25 ? book.title.slice(0, 25) + "..." : book.title}</h5>
                                        <div className="dz-meta">
                                            <ul>
                                                <li>de {book.authorName}</li>
                                            </ul>
                                        </div>
                                        <div className="book-footer">
                                            <div className="price">
                                                <span className="price-num">€{book.price}</span>
                                            </div>
                                            <Rate disabled allowHalf defaultValue={book.rating} style={{ color: "#FFA808", fontSize: "14px", marginRight: "20px" }} />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    );
}

export default HomeHero;
