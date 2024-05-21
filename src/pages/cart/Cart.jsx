import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart } from "../../features/CartSlice";
import Base from "../../layouts/Base";

function Cart() {
    const dispatch = useDispatch();

    const { cartItems, totalPrice } = useSelector((store) => store.CartSlice);

    const checkoutProducts = cartItems.reduce((acc, item, index, arr) => {
        if (arr.length !== index + 1) {
            acc = acc + item.id + ",";
        } else {
            acc = acc + item.id;
        }

        return acc;
    }, "");

    return (
        <Base>
            <div>
                <section className="content-inner shop-account">
                    {/* Product */}
                    <div className="container">
                        <div className="row mb-5">
                            <div className="col-lg-8">
                                <div className="table-responsive">
                                    {cartItems.length > 0 ? (
                                        <table className="table check-tbl">
                                            <thead>
                                                <tr>
                                                    <th>Libro</th>
                                                    <th>Nombre del libro</th>
                                                    <th>Precio</th>
                                                    <th className="text-end">Cerca</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {cartItems.length > 0 &&
                                                    cartItems.map((item, index) => {
                                                        return (
                                                            <tr key={index}>
                                                                <td className="product-item-img">
                                                                    <Link to={"/book/" + item.id}>
                                                                        <img src={item?.images.filter((img) => img.is_video === null)[0].url} alt />
                                                                    </Link>
                                                                </td>
                                                                <td className="product-item-name">
                                                                    <Link to={"/book/" + item.id}>{item.title}</Link>
                                                                </td>
                                                                <td className="product-item-price">{item?.discount_price}€</td>
                                                                <td className="product-item-close">
                                                                    <a role="button" onClick={() => dispatch(removeFromCart(item))} className="ti-close">
                                                                        ×
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                        );
                                                    })}
                                            </tbody>
                                        </table>
                                    ) : (
                                        <h5>Tu carrito esta vacío</h5>
                                    )}
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="widget">
                                    <h4 className="widget-title">Subtotal del carrito</h4>
                                    <table className="table-bordered check-tbl m-b25">
                                        <tbody>
                                            <tr>
                                                <td>Libros totales</td>
                                                <td>{cartItems.length}</td>
                                            </tr>
                                            <tr>
                                                <td>Precio total</td>
                                                <td>{totalPrice}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="form-group m-b25">
                                        {cartItems.length > 0 && (
                                            <a href={`/checkout/?${checkoutProducts}`} className="btn btn-primary btnhover" type="button">
                                                Pasar por la caja
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Product END */}
                </section>
            </div>
        </Base>
    );
}

export default Cart;
