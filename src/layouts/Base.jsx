import { useSelector } from "react-redux";
import Loader from "../components/loader/Loader";
import LoginPopup from "../components/popups/login/LoginPopup";
import Footer from "./footer/Footer";
import Header from "./header/Header";

function Base({ children }) {
    const { loaderIsOpen } = useSelector((store) => store.CombineSlice);
    const { loginPopupIsOpen } = useSelector((store) => store.LoginPopupSlice);
    return (
        <>
            <Header />
            {loginPopupIsOpen && <LoginPopup />}
            {loaderIsOpen && <Loader />}
            {children}
            <Footer />
        </>
    );
}

export default Base;
