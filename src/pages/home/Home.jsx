import { BiSolidLike } from "react-icons/bi";
import { BsFillLightningFill } from "react-icons/bs";
import { FaStar, FaStore } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa6";
import { IoShieldCheckmark } from "react-icons/io5";
import { LiaMedalSolid } from "react-icons/lia";
import HomeBookSale from "../../components/home/HomeBookSale";
import HomeFeatured from "../../components/home/HomeFeatured";
import HomeHero from "../../components/home/HomeHero";
import HomeRecom from "../../components/home/HomeRecom";
import HomeSpecialOffer from "../../components/home/HomeSpecialOffer";
import HomeTestimonial from "../../components/home/HomeTestimonial";
import Base from "../../layouts/Base";
import HomeAllProjects from "../../components/home/HomeAllProjects";
import useGet from "../../hooks/useGet";

const apiUrl = import.meta.env.VITE_REACT_APP_DEFAULT_API_ROUTE;

function Home() {


    const [allbooks, isLoading] = useGet(apiUrl + "/user/book");


    return (
        <Base>
            <div className="page-content bg-white">





                {/* Book Sale */}
                <HomeBookSale allBooks={allbooks && allbooks} isLoading={isLoading} sectionTitle="Novedades"/>
                <HomeBookSale allBooks={allbooks && allbooks} isLoading={isLoading} sectionTitle="Libros en edición"/>
                {/* <HomeRecom /> */}
                {/* <HomeBookSale sectionTitle="Lo más vendido"/>
                <HomeBookSale sectionTitle="Próximos lanzamientos"/> */}
                <HomeAllProjects sectionTitle="Libros en campaña"/>

                {/* Testimonial2 */}
                {/* <HomeTestimonial /> */}

                {/* Special Offer*/}
                {/* <HomeSpecialOffer /> */}

                {/* Special Offer End */}


    



                {/* Newsletter */}
                {/* <section
                    className="py-5 newsletter-wrapper style-2"
                    style={{
                        backgroundImage: 'url("images/background/bg1.jpg")',
                        backgroundSize: "cover",
                    }}
                >
                    <div className="container">
                        <div className="subscride-inner">
                            <div className="row style-1 justify-content-xl-between justify-content-lg-center align-items-center text-xl-start text-center">
                                <div className="col-xl-7 col-lg-12">
                                    <div className="section-head mb-0">
                                        <h2 className="title text-white my-lg-3 mt-0">Subscribe our newsletter for newest books updates</h2>
                                    </div>
                                </div>
                                <div className="col-xl-5 col-lg-6">
                                    <form className="dzSubscribe style-1" action="script/mailchamp.php" method="post">
                                        <div className="dzSubscribeMsg" />
                                        <div className="form-group">
                                            <div className="input-group mb-0">
                                                <input name="dzEmail" required="required" type="email" className="form-control bg-transparent text-white" placeholder="Your Email Address" />
                                                <div className="input-group-addon">
                                                    <button name="submit" value="Submit" type="submit" className="btn btn-primary btnhover">
                                                        <span>SUBSCRIBE</span>
                                                        <i className="fa-solid fa-paper-plane" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
            </div>
        </Base>
    );
}

export default Home;
