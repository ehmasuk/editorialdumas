// import Swiper core and required modules
import { Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import axios from "axios";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { Skeleton } from "antd";
const apiUrl = import.meta.env.VITE_REACT_APP_DEFAULT_API_ROUTE;
function HomeAllProjects({ sectionTitle }) {
    const [allProjects, setAllProjects] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

    const getData = async () => {
        setIsLoading(true);
        try {
            const res = await axios.get(`${apiUrl}/user/crowfund_projects`);
            console.log(res.data);
            setAllProjects(res.data);
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong, please try again later");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const swiperRef = useRef();

    const calculateCompletion = (currentAmount, targetAmount) => {
        var completionPercentage = (currentAmount / targetAmount) * 100;
        return Math.ceil(completionPercentage);
    };

    const totalAmountGathered = (donations) => {
        var result;
        if (donations) {
            result = donations.reduce((acc, item) => {
                acc = acc + Number(item.donation_amount);
                return acc;
            }, 0);
        } else {
            result = 0;
        }
        return result;
    };

    return (
        <section className="content-inner-1">
            <div className="container">
                <div className="section-head book-align">
                    <div className="d-flex align-items-center">
                        <h2 className="title mb-0">{sectionTitle}</h2>
                        <Link to="/allprojects">
                            <div onClick={()=>window.scrollTo(0,0)} style={{ borderRadius: "50px", marginLeft: "15px", padding: "5px 10px", fontSize: "12px" }} className="btn btn-outline-secondary btn-sm rounded-full">
                                Ver todo
                            </div>
                        </Link>
                    </div>
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
                    {allProjects?.map((project, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <Link to={`/project/${project?.id}`}>
                                    <div key={index} className="swiper-slide">
                                        <div className="books-card style-3 wow fadeInUp" data-wow-delay="0.2s">
                                            <div className="dz-media">
                                                <img style={{ height: "350px", objectFit: "contain",background:'#EEF4FF' }} src={project?.images.filter((img) => img.is_video === null)[0].url} alt="book" />
                                            </div>
                                            <div className="dz-content">
                                                <h5 className="title" style={{ minHeight: "45px" }}>
                                                    <a href="#">{project?.title}</a>
                                                </h5>
                                                <ul className="dz-tags">
                                                    <li>
                                                        <a href="#">de {project?.user?.name}</a>
                                                    </li>
                                                </ul>
                                                <div className="book-footer" style={{ color: "#1a1668", fontWeight: "600" }}>
                                                    <div className="value">Recaudó: {totalAmountGathered(project?.donations)}€</div>
                                                    <div className="value">Meta: {`${project?.project_id}€`}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>

                {isLoading && (
                        <div className="row">
                            <div className="col-md-3 ">
                                <Skeleton active />
                            </div>
                            <div className="col-md-3 ">
                                <Skeleton active />
                            </div>
                            <div className="col-md-3 ">
                                <Skeleton active />
                            </div>
                            <div className="col-md-3 ">
                                <Skeleton active />
                            </div>
                        </div>
                    )}
            </div>
        </section>
    );
}

export default HomeAllProjects;
