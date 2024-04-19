import Base from "../../layouts/Base";

function Wishlist() {
    return (
        <Base>
            <div className="page-content">
                <div className="dz-bnr-inr overlay-secondary-dark dz-bnr-inr-sm" style={{ backgroundImage: "url(images/background/bg3.jpg)" }}>
                    <div className="container">
                        <div className="dz-bnr-inr-entry">
                            <h1>Wishlist</h1>
                            <nav aria-label="breadcrumb" className="breadcrumb-row">
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <a href="index.html"> Home</a>
                                    </li>
                                    <li className="breadcrumb-item">Wishlist</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="content-inner-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="table-responsive">
                                    <table className="table check-tbl">
                                        <thead>
                                            <tr>
                                                <th>Product</th>
                                                <th>Product name</th>
                                                <th>Unit Price</th>
                                                <th>Quantity</th>
                                                <th>Add to cart </th>
                                                <th>Close</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="product-item-img">
                                                    <img src="images/books/grid/book3.jpg" alt="" />
                                                </td>
                                                <td className="product-item-name">Prduct Item 1</td>
                                                <td className="product-item-price">$28.00</td>
                                                <td className="product-item-quantity">
                                                    <div className="quantity btn-quantity style-1 me-3">
                                                        <input id="demo_vertical2" type="text" defaultValue={1} name="demo_vertical2" />
                                                    </div>
                                                </td>
                                                <td className="product-item-totle">
                                                    <a href="shop-cart.html" className="btn btn-primary btnhover">
                                                        Add To Cart
                                                    </a>
                                                </td>
                                                <td className="product-item-close">
                                                    <a role="button" className="ti-close">
                                                        ×
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Base>
    );
}

export default Wishlist;
