import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../features/CartSlice";
import { removeFromWishlist } from "../../features/WishlistSlice";
import Base from "../../layouts/Base";

function Wishlist() {
    const dispatch = useDispatch();

    const { wishlistItems } = useSelector((store) => store.WishlistSlice);



    return (
        <Base>
            <div className="page-content">
                <div className="content-inner-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                {wishlistItems.length > 0 ? (
                                    <div className="table-responsive">
                                        <table className="table check-tbl">
                                            <thead>
                                                <tr>
                                                    <th>Libro</th>
                                                    <th>Nombre del libro</th>
                                                    <th>Precio</th>
                                                    <th>Añadir</th>
                                                    <th>Cerca</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {wishlistItems.length > 0 &&
                                                    wishlistItems.map((item, index) => {
                                                        return (
                                                            <tr key={index}>
                                                                <td className="product-item-img">
                                                                    <Link to={"/book/" + item.id}>
                                                                        <img src={item?.images.filter((img) => img.is_video === null)[0].url} alt="" />
                                                                    </Link>
                                                                </td>
                                                                <td className="product-item-name">
                                                                    <Link to={"/book/" + item.id}>{item.title}</Link>
                                                                </td>
                                                                <td className="product-item-price">{item?.discount_price}€</td>
                                                                <td className="product-item-totle">
                                                                    <a onClick={() => dispatch(addToCart(item))} className="btn btn-primary btnhover">
                                                                        Añadir
                                                                    </a>
                                                                </td>
                                                                <td className="product-item-close">
                                                                    <a role="button" onClick={() => dispatch(removeFromWishlist(item))} className="ti-close">
                                                                        ×
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                        );
                                                    })}
                                            </tbody>
                                        </table>
                                    </div>
                                ) : (
                                    <h5>Tu lista de deseos Esta vacía</h5>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Base>
    );
}

export default Wishlist;
