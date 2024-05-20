import { Skeleton } from "antd";
import { useParams } from "react-router-dom";
import useGet from "../../hooks/useGet";
import Base from "../../layouts/Base";
const apiUrl = import.meta.env.VITE_REACT_APP_DEFAULT_API_ROUTE;
function BookDetails() {
    const { bookId } = useParams();

    const [data, isLoading] = useGet(apiUrl + "/user/book/" + bookId);


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
                                                    <h5>{data?.category?.title}</h5>
                                                    {/* <div className="d-lg-flex d-sm-inline-flex d-flex align-items-center">
                                                    <ul className="dz-rating">
                                                        <li>
                                                            <i className="flaticon-star text-yellow" />
                                                        </li>
                                                        <li>
                                                            <i className="flaticon-star text-yellow" />
                                                        </li>
                                                        <li>
                                                            <i className="flaticon-star text-yellow" />
                                                        </li>
                                                        <li>
                                                            <i className="flaticon-star text-yellow" />
                                                        </li>
                                                        <li>
                                                            <i className="flaticon-star text-muted" />
                                                        </li>
                                                    </ul>
                                                    <h6 className="m-b0">4.0</h6>
                                                </div> */}
                                                    {/* <div className="social-area">
                                                    <ul className="dz-social-icon style-3">
                                                        <li>
                                                            <a href="https://www.facebook.com/dexignzone" target="_blank" rel="noreferrer">
                                                                <i className="fa-brands fa-facebook-f" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="https://twitter.com/dexignzones" target="_blank" rel="noreferrer">
                                                                <i className="fa-brands fa-twitter" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="https://www.whatsapp.com/" target="_blank" rel="noreferrer">
                                                                <i className="fa-brands fa-whatsapp" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="https://www.google.com/intl/en-GB/gmail/about/" target="_blank" rel="noreferrer">
                                                                <i className="fa-solid fa-envelope" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div> */}
                                                </div>
                                            </div>
                                            <div className="dz-body">
                                                <div className="book-detail">
                                                    <ul className="book-info">
                                                        <li>
                                                            <div className="writer-info">
                                                                {/* <img src="images/profile2.jpg" alt="book" /> */}
                                                                <div>
                                                                    <span>Escribe en</span>
                                                                    {data?.author_name}
                                                                </div>
                                                            </div>
                                                        </li>
                                                        {/* <li>
                                                        <span>Publisher</span>Printarea Studios
                                                    </li>
                                                    <li>
                                                        <span>Year</span>2019
                                                    </li> */}
                                                    </ul>
                                                </div>
                                                <div style={{ width: "100%" }} dangerouslySetInnerHTML={{ __html: data?.long_description }}></div>
                                                <div className="book-footer">
                                                    <div className="price">
                                                        <h5>{data?.discount_price}€</h5>
                                                        {data?.strike_price && <p className="p-lr10">{data?.strike_price}</p>}
                                                    </div>
                                                    <div className="product-num">
                                                        <a href="shop-cart.html" className="btn btn-primary btnhover2">
                                                            <i className="fas fa-shopping-cart"></i> <span>Add to cart</span>
                                                        </a>
                                                        <div className="bookmark-btn style-1 d-none d-sm-block">
                                                            <input className="form-check-input" type="checkbox" id="flexCheckDefault1" />
                                                            <label className="form-check-label" htmlFor="flexCheckDefault1">
                                                                <i className="fas fa-heart" />
                                                            </label>
                                                        </div>
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
                                                            <th>Book Title</th>
                                                            <td>{data?.title}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Author</th>
                                                            <td>{data?.author_name}</td>
                                                        </tr>
                                                        {/* <tr>
                                                        <th>ISBN</th>
                                                        <td>121341381648 (ISBN13: 121341381648)</td>
                                                    </tr> */}
                                                        <tr>
                                                            <th>Ediiton Language</th>
                                                            <td>Spanish</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Book Format</th>
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
