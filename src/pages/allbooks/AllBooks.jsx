import Base from "../../layouts/Base";

import { Skeleton } from "antd";
import BookCard from "../../components/bookcard/BookCard";
import useGet from "../../hooks/useGet";
const apiUrl = import.meta.env.VITE_REACT_APP_DEFAULT_API_ROUTE;

function AllBooks() {
    const [data, isLoading] = useGet(apiUrl + "/user/book");



    return (
        <Base>
            <div className="page-content bg-grey">
                <section className="content-inner border-bottom">
                    <div className="container">
                        <div className="d-flex justify-content-between align-items-center">
                            <h4 className="title">Books</h4>
                        </div>
                        <div className="filter-area m-b30">
                            <div className="grid-area">
                                <div className="shop-tab">
                                    <ul className="nav text-center product-filter justify-content-end" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link" href="books-list.html">
                                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M3 5H21C21.2652 5 21.5196 4.89464 21.7071 4.7071C21.8946 4.51957 22 4.26521 22 4C22 3.73478 21.8946 3.48043 21.7071 3.29289C21.5196 3.10536 21.2652 3 21 3H3C2.73478 3 2.48043 3.10536 2.29289 3.29289C2.10536 3.48043 2 3.73478 2 4C2 4.26521 2.10536 4.51957 2.29289 4.7071C2.48043 4.89464 2.73478 5 3 5Z"
                                                        fill="#AAAAAA"
                                                    />
                                                    <path
                                                        d="M3 13H21C21.2652 13 21.5196 12.8947 21.7071 12.7071C21.8946 12.5196 22 12.2652 22 12C22 11.7348 21.8946 11.4804 21.7071 11.2929C21.5196 11.1054 21.2652 11 21 11H3C2.73478 11 2.48043 11.1054 2.29289 11.2929C2.10536 11.4804 2 11.7348 2 12C2 12.2652 2.10536 12.5196 2.29289 12.7071C2.48043 12.8947 2.73478 13 3 13Z"
                                                        fill="#AAAAAA"
                                                    />
                                                    <path
                                                        d="M3 21H21C21.2652 21 21.5196 20.8947 21.7071 20.7071C21.8946 20.5196 22 20.2652 22 20C22 19.7348 21.8946 19.4804 21.7071 19.2929C21.5196 19.1054 21.2652 19 21 19H3C2.73478 19 2.48043 19.1054 2.29289 19.2929C2.10536 19.4804 2 19.7348 2 20C2 20.2652 2.10536 20.5196 2.29289 20.7071C2.48043 20.8947 2.73478 21 3 21Z"
                                                        fill="#AAAAAA"
                                                    />
                                                </svg>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="books-grid-view.html">
                                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M3 11H10C10.2652 11 10.5196 10.8946 10.7071 10.7071C10.8946 10.5196 11 10.2652 11 10V3C11 2.73478 10.8946 2.48043 10.7071 2.29289C10.5196 2.10536 10.2652 2 10 2H3C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V10C2 10.2652 2.10536 10.5196 2.29289 10.7071C2.48043 10.8946 2.73478 11 3 11ZM4 4H9V9H4V4Z"
                                                        fill="#AAAAAA"
                                                    />
                                                    <path
                                                        d="M14 11H21C21.2652 11 21.5196 10.8946 21.7071 10.7071C21.8946 10.5196 22 10.2652 22 10V3C22 2.73478 21.8946 2.48043 21.7071 2.29289C21.5196 2.10536 21.2652 2 21 2H14C13.7348 2 13.4804 2.10536 13.2929 2.29289C13.1054 2.48043 13 2.73478 13 3V10C13 10.2652 13.1054 10.5196 13.2929 10.7071C13.4804 10.8946 13.7348 11 14 11ZM15 4H20V9H15V4Z"
                                                        fill="#AAAAAA"
                                                    />
                                                    <path
                                                        d="M3 22H10C10.2652 22 10.5196 21.8946 10.7071 21.7071C10.8946 21.5196 11 21.2652 11 21V14C11 13.7348 10.8946 13.4804 10.7071 13.2929C10.5196 13.1054 10.2652 13 10 13H3C2.73478 13 2.48043 13.1054 2.29289 13.2929C2.10536 13.4804 2 13.7348 2 14V21C2 21.2652 2.10536 21.5196 2.29289 21.7071C2.48043 21.8946 2.73478 22 3 22ZM4 15H9V20H4V15Z"
                                                        fill="#AAAAAA"
                                                    />
                                                    <path
                                                        d="M14 22H21C21.2652 22 21.5196 21.8946 21.7071 21.7071C21.8946 21.5196 22 21.2652 22 21V14C22 13.7348 21.8946 13.4804 21.7071 13.2929C21.5196 13.1054 21.2652 13 21 13H14C13.7348 13 13.4804 13.1054 13.2929 13.2929C13.1054 13.4804 13 13.7348 13 14V21C13 21.2652 13.1054 21.5196 13.2929 21.7071C13.4804 21.8946 13.7348 22 14 22ZM15 15H20V20H15V15Z"
                                                        fill="#AAAAAA"
                                                    />
                                                </svg>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="books-grid-view-sidebar.html">
                                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M3 22H21C21.2652 22 21.5196 21.8946 21.7071 21.7071C21.8946 21.5196 22 21.2652 22 21V3C22 2.73478 21.8946 2.48043 21.7071 2.29289C21.5196 2.10536 21.2652 2 21 2H3C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V21C2 21.2652 2.10536 21.5196 2.29289 21.7071C2.48043 21.8946 2.73478 22 3 22ZM13 4H20V11H13V4ZM13 13H20V20H13V13ZM4 4H11V20H4V4Z"
                                                        fill="#AAAAAA"
                                                    />
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="category">
                                <div className="filter-category">
                                    <a data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                        <i className="fas fa-list me-2" />
                                        Categories
                                    </a>
                                </div>
                                <div className="form-group">
                                    <i className="fas fa-sort-amount-down me-2 text-secondary" />
                                    <select className="default-select">
                                        <option>Newest</option>
                                        <option>1 Day</option>
                                        <option>1 Week</option>
                                        <option>3 Weeks</option>
                                        <option>1 Month</option>
                                        <option>3 Months</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="acod-content collapse" id="collapseExample">
                            <div className="widget widget_services">
                                <div className="form-check search-content">
                                    <input className="form-check-input" type="checkbox" defaultValue id="productCheckBox1" />
                                    <label className="form-check-label" htmlFor="productCheckBox1">
                                        Architecture
                                    </label>
                                </div>
                                <div className="form-check search-content">
                                    <input className="form-check-input" type="checkbox" defaultValue id="productCheckBox2" />
                                    <label className="form-check-label" htmlFor="productCheckBox2">
                                        Art
                                    </label>
                                </div>
                                <div className="form-check search-content">
                                    <input className="form-check-input" type="checkbox" defaultValue id="productCheckBox3" />
                                    <label className="form-check-label" htmlFor="productCheckBox3">
                                        Action
                                    </label>
                                </div>
                                <div className="form-check search-content">
                                    <input className="form-check-input" type="checkbox" defaultValue id="productCheckBox4" />
                                    <label className="form-check-label" htmlFor="productCheckBox4">
                                        Biography &amp; Autobiography
                                    </label>
                                </div>
                                <div className="form-check search-content">
                                    <input className="form-check-input" type="checkbox" defaultValue id="productCheckBox5" />
                                    <label className="form-check-label" htmlFor="productCheckBox5">
                                        Body, Mind &amp; Spirit
                                    </label>
                                </div>
                                <div className="form-check search-content">
                                    <input className="form-check-input" type="checkbox" defaultValue id="productCheckBox6" />
                                    <label className="form-check-label" htmlFor="productCheckBox6">
                                        Business &amp; Economics
                                    </label>
                                </div>
                                <div className="form-check search-content">
                                    <input className="form-check-input" type="checkbox" defaultValue id="productCheckBox7" />
                                    <label className="form-check-label" htmlFor="productCheckBox7">
                                        Children Fiction
                                    </label>
                                </div>
                                <div className="form-check search-content">
                                    <input className="form-check-input" type="checkbox" defaultValue id="productCheckBox8" />
                                    <label className="form-check-label" htmlFor="productCheckBox8">
                                        Children Non-Fiction
                                    </label>
                                </div>
                                <div className="form-check search-content">
                                    <input className="form-check-input" type="checkbox" defaultValue id="productCheckBox9" />
                                    <label className="form-check-label" htmlFor="productCheckBox9">
                                        Comics &amp; Graphic Novels
                                    </label>
                                </div>
                                <div className="form-check search-content">
                                    <input className="form-check-input" type="checkbox" defaultValue id="productCheckBox10" />
                                    <label className="form-check-label" htmlFor="productCheckBox10">
                                        Cooking
                                    </label>
                                </div>
                                <div className="form-check search-content">
                                    <input className="form-check-input" type="checkbox" defaultValue id="productCheckBox11" />
                                    <label className="form-check-label" htmlFor="productCheckBox11">
                                        Crafts &amp; Hobbies
                                    </label>
                                </div>
                                <div className="form-check search-content">
                                    <input className="form-check-input" type="checkbox" defaultValue id="productCheckBox12" />
                                    <label className="form-check-label" htmlFor="productCheckBox12">
                                        Design
                                    </label>
                                </div>
                                <div className="form-check search-content">
                                    <input className="form-check-input" type="checkbox" defaultValue id="productCheckBox13" />
                                    <label className="form-check-label" htmlFor="productCheckBox13">
                                        Drama
                                    </label>
                                </div>
                                <div className="form-check search-content">
                                    <input className="form-check-input" type="checkbox" defaultValue id="productCheckBox14" />
                                    <label className="form-check-label" htmlFor="productCheckBox14">
                                        Education
                                    </label>
                                </div>
                                <div className="form-check search-content">
                                    <input className="form-check-input" type="checkbox" defaultValue id="productCheckBox15" />
                                    <label className="form-check-label" htmlFor="productCheckBox15">
                                        Family &amp; Relationships
                                    </label>
                                </div>
                                <div className="form-check search-content">
                                    <input className="form-check-input" type="checkbox" defaultValue id="productCheckBox16" />
                                    <label className="form-check-label" htmlFor="productCheckBox16">
                                        Fiction
                                    </label>
                                </div>
                                <div className="form-check search-content">
                                    <input className="form-check-input" type="checkbox" defaultValue id="productCheckBox17" />
                                    <label className="form-check-label" htmlFor="productCheckBox17">
                                        Foreign Language Study
                                    </label>
                                </div>
                                <div className="form-check search-content">
                                    <input className="form-check-input" type="checkbox" defaultValue id="productCheckBox18" />
                                    <label className="form-check-label" htmlFor="productCheckBox18">
                                        Games
                                    </label>
                                </div>
                                <div className="form-check search-content">
                                    <input className="form-check-input" type="checkbox" defaultValue id="productCheckBox19" />
                                    <label className="form-check-label" htmlFor="productCheckBox19">
                                        Gardening
                                    </label>
                                </div>
                                <div className="form-check search-content">
                                    <input className="form-check-input" type="checkbox" defaultValue id="productCheckBox20" />
                                    <label className="form-check-label" htmlFor="productCheckBox20">
                                        Health &amp; Fitness
                                    </label>
                                </div>
                                <div className="form-check search-content">
                                    <input className="form-check-input" type="checkbox" defaultValue id="productCheckBox21" />
                                    <label className="form-check-label" htmlFor="productCheckBox21">
                                        History
                                    </label>
                                </div>
                                <div className="form-check search-content">
                                    <input className="form-check-input" type="checkbox" defaultValue id="productCheckBox22" />
                                    <label className="form-check-label" htmlFor="productCheckBox22">
                                        House &amp; Home
                                    </label>
                                </div>
                                <div className="form-check search-content">
                                    <input className="form-check-input" type="checkbox" defaultValue id="productCheckBox23" />
                                    <label className="form-check-label" htmlFor="productCheckBox23">
                                        Humor
                                    </label>
                                </div>
                                <div className="form-check search-content">
                                    <input className="form-check-input" type="checkbox" defaultValue id="productCheckBox24" />
                                    <label className="form-check-label" htmlFor="productCheckBox24">
                                        Literary Collections
                                    </label>
                                </div>
                                <div className="form-check search-content">
                                    <input className="form-check-input" type="checkbox" defaultValue id="productCheckBox25" />
                                    <label className="form-check-label" htmlFor="productCheckBox25">
                                        Mathematics
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {data &&
                                data.map((book, index) => {
                                    return <BookCard book={book} key={index} />;
                                })}

                            {isLoading && (
                                <div className="row">
                                    <div className="col-md-12 mb-5">
                                        <Skeleton active />
                                    </div>
                                    <div className="col-md-12 mb-5">
                                        <Skeleton active />
                                    </div>
                                    <div className="col-md-12 mb-5">
                                        <Skeleton active />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </div>
        </Base>
    );
}

export default AllBooks;
