import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../features/CartSlice";

function BookCard({ book }) {


    const dispatch = useDispatch()

    return (
        <div className="col-md-3">
            <div className="books-card style-3" style={{ padding: "0 20px", background: "#fff" }}>
                <div className="dz-media">
                    <Link to={`/book/${book?.id}`}>
                        <img style={{ height: "320px", objectFit: "contain" }} src={book?.images.filter((img) => img.is_video === null)[0].url} alt="book" />
                    </Link>
                </div>
                <div className="dz-content">
                    <h5 className="title" style={{ minHeight: "45px" }}>
                        <Link to={`/book/${book?.id}`}>{book?.title}</Link>
                    </h5>
                    <ul className="dz-tags">
                        <li>
                            <Link to={`/book/${book?.id}`}>de {book?.author_name}</Link>
                        </li>
                    </ul>
                    {/* <div className="book-footer">
                        <div className="price" style={{ fontSize: "16px" }}>
                            <span className="price-num">{book?.discount_price}€</span>
                        </div>
                        <button onClick={()=>dispatch(addToCart(book))} className="btn btn-sm btn-secondary">Add to cart</button>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default BookCard;
