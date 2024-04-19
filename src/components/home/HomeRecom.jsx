// import Swiper core and required modules
import { Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

import { booksData } from "../../database/booksData";

function HomeRecom() {
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
                    {booksData.map((item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="books-card style-1 wow fadeInUp" data-wow-delay="0.1s">
                                    <div className="dz-media">
                                        <img style={{height: '300px',objectFit: 'contain',width : '100%'}} src={item.img} alt="book" />
                                    </div>
                                    <div className="dz-content text-left">
                                        <h4 className="title" style={{fontSize: '16px',textAlign:'left'}}>{item.title}</h4>
                                        <span className="price" style={{textAlign:'left'}}>€{item.price}</span>
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

export default HomeRecom;
