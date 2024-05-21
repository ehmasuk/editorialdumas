import { Rate, Skeleton, Tooltip } from "antd";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../features/CartSlice";
import useGet from "../../hooks/useGet";
import Base from "../../layouts/Base";
const apiUrl = import.meta.env.VITE_REACT_APP_DEFAULT_API_ROUTE;

import { formatDate } from "../../database/globalFunctions";
import { addToWishlist } from "../../features/WishlistSlice";
import HomeBookSale from "../../components/home/HomeBookSale";
import ReviewsSection from "../../components/reviewsSection/ReviewsSection";


function BookDetails() {

    const [allbooks, isLoading] = useGet(apiUrl + "/user/book");


    const { bookId } = useParams();

    const [data, isLoadingAllBooks] = useGet(apiUrl + "/user/book/" + bookId);

    const { wishlistItems } = useSelector((store) => store.WishlistSlice);

    const isInWishlist = wishlistItems.some((e) => e.id === data?.id);

    const dispatch = useDispatch();

    return (
        <Base>
            <div className="page-content bg-grey">
                <section className="content-inner-1">
                    {data && (
                        <div className="container">
                            <div className="row book-grid-row style-4 m-b60">
                                <div className="col">
                                    <div className="dz-box">
                                        <div className="dz-media">
                                            <img style={{ maxWidth: "400px" }} src={data?.images.filter((img) => img.is_video === null)[0].url} alt="book" />
                                        </div>
                                        <div className="dz-content" style={{ width: "100%" }}>
                                            <div className="dz-header">
                                                <h3 className="title">{data?.title}</h3>

                                                <div className="shop-item-rating">
                                                    <div className="d-lg-flex d-sm-inline-flex d-flex align-items-center">
                                                        <Rate allowHalf defaultValue={5} style={{ color: "#EAA451", marginRight: "10px" }} disabled />
                                                        <h5 className="m-b0">5.0</h5>
                                                    </div>
                                                    <div className="social-area">
                                                        <ul className="dz-social-icon style-3">
                                                            <li>
                                                                <a href="https://www.facebook.com/profile.php?id=61558777782572" rel="link noreferrer" target="_blank">
                                                                    <i className="fa-brands fa-facebook-f" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="https://twitter.com/editorialdumas" target="_blank" rel="noreferrer">
                                                                    <i className="fa-brands fa-twitter" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="https://www.instagram.com/editorialdumas/" target="_blank" rel="noreferrer">
                                                                    <i className="fa-brands fa-instagram" />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="dz-body">
                                                <div className="book-detail">
                                                    <ul className="book-info">
                                                        <li>
                                                            <div className="writer-info">
                                                                {/* <img src={data?.user?.images?.url} alt="book" /> */}
                                                                <div>
                                                                    <span>Escribe en</span>
                                                                    {data?.author_name}
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <span>Categoría</span>
                                                            {data?.category?.title}
                                                        </li>
                                                        <li>
                                                            <span>Publicado en editorial</span>
                                                            {formatDate(data?.created_at)}
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div style={{ width: "100%", textAlign: "justify" }} dangerouslySetInnerHTML={{ __html: data?.long_description }}></div>
                                                <div className="book-footer">
                                                    <div className="price">
                                                        <h5>{data?.discount_price}€</h5>
                                                        {data?.strike_price && <p className="p-lr10">{data?.strike_price}</p>}
                                                    </div>
                                                    <div className="product-num">
                                                        <Tooltip title="Añadir a la lista de deseos">
                                                            <div onClick={() => dispatch(addToWishlist(data))} style={{ marginRight: "10px" }} className="bookmark-btn style-1 d-none d-sm-block">
                                                                <label className="form-check-label" htmlFor="flexCheckDefault1">
                                                                    <i className="fas fa-heart" style={{ color: isInWishlist && "red" }} />
                                                                </label>
                                                            </div>
                                                        </Tooltip>

                                                        <a onClick={() => dispatch(addToCart(data))} style={{ marginRight: "10px" }} className="btn btn-primary btnhover2">
                                                            <i className="fas fa-shopping-cart"></i> <span>Añadir a la cesta</span>
                                                        </a>
                                                        <a href="#" className="btn btn-secondary btnhover2">
                                                            <BiSolidPurchaseTag fontSize={20} /> <span>Comprar ahora</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="product-description tabs-site-button">
                                        <ul className="nav nav-tabs">
                                            <li>
                                                <a data-bs-toggle="tab" href="#graphic-design-1" className="active">
                                                    Detalles el producto
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="tab-content">
                                            <div id="graphic-design-1" className="tab-pane show active">
                                                <table className="table border book-overview">
                                                    <tbody>
                                                        <tr>
                                                            <th>Titulo del libro</th>
                                                            <td>{data?.title}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Autora</th>
                                                            <td>{data?.author_name}</td>
                                                        </tr>
                                                        {/* <tr>
                                                        <th>ISBN</th>
                                                        <td>121341381648 (ISBN13: 121341381648)</td>
                                                    </tr> */}
                                                        <tr>
                                                            <th>Lenguaje edianiton</th>
                                                            <td>Española</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Formato de libro</th>
                                                            <td>pdf</td>
                                                        </tr>
                                                        {/* <tr>
                                                        <th>Date Published</th>
                                                        <td>August 10th 2019</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Publisher</th>
                                                        <td>Wepress Inc.</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Topic</th>
                                                        <td>360</td>
                                                    </tr> */}
                                                        {/* <tr className="tags">
                                                        <th>Tags</th>
                                                        <td>
                                                            <a href="#" className="badge">
                                                                Drama
                                                            </a>
                                                        </td>
                                                    </tr> */}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="col-xl-4 mt-5 mt-xl-0">
                                <div className="widget">
                                    <h4 className="widget-title">Related Books</h4>
                                    <div className="row">
                                        <div className="col-xl-12 col-lg-6">
                                            <div className="dz-shop-card style-5">
                                                <div className="dz-media">
                                                    <img src="images/books/grid/book15.jpg" alt />
                                                </div>
                                                <div className="dz-content">
                                                    <h5 className="subtitle">Terrible Madness</h5>
                                                    <ul className="dz-tags">
                                                        <li>THRILLE,</li>
                                                        <li>DRAMA,</li>
                                                        <li>HORROR</li>
                                                    </ul>
                                                    <div className="price">
                                                        <span className="price-num">$45.4</span>
                                                        <del>$98.4</del>
                                                    </div>
                                                    <a href="shop-cart.html" className="btn btn-outline-primary btn-sm btnhover2">
                                                        <i className="flaticon-shopping-cart-1 me-2" /> Add to cart
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-12 col-lg-6">
                                            <div className="dz-shop-card style-5">
                                                <div className="dz-media">
                                                    <img src="images/books/grid/book3.jpg" alt />
                                                </div>
                                                <div className="dz-content">
                                                    <h5 className="subtitle">Battle Drive</h5>
                                                    <ul className="dz-tags">
                                                        <li>THRILLE,</li>
                                                        <li>DRAMA,</li>
                                                        <li>HORROR</li>
                                                    </ul>
                                                    <div className="price">
                                                        <span className="price-num">$45.4</span>
                                                        <del>$98.4</del>
                                                    </div>
                                                    <a href="shop-cart.html" className="btn btn-outline-primary btn-sm btnhover2">
                                                        <i className="flaticon-shopping-cart-1 me-2" /> Add to cart
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-12 col-lg-6">
                                            <div className="dz-shop-card style-5">
                                                <div className="dz-media">
                                                    <img src="images/books/grid/book5.jpg" alt />
                                                </div>
                                                <div className="dz-content">
                                                    <h5 className="subtitle">Terrible Madness</h5>
                                                    <ul className="dz-tags">
                                                        <li>THRILLE,</li>
                                                        <li>DRAMA,</li>
                                                        <li>HORROR</li>
                                                    </ul>
                                                    <div className="price">
                                                        <span className="price-num">$45.4</span>
                                                        <del>$98.4</del>
                                                    </div>
                                                    <a href="#" className="btn btn-outline-primary btn-sm btnhover2">
                                                        <i className="fas fa-shopping-cart me-2" /> Add to cart
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            </div>


                            <ReviewsSection />
                            <HomeBookSale allBooks={allbooks && allbooks} isLoading={isLoadingAllBooks} sectionTitle="Descubrir más"/>



                        </div>
                    )}

                    {isLoading && (
                        <div className="container">
                            <Skeleton active rows={10} />
                        </div>
                    )}
                </section>
            </div>
        </Base>
    );
}

export default BookDetails;
