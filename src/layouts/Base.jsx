import { useSelector } from "react-redux";
import Loader from "../components/loader/Loader";
import Footer from "./footer/Footer";
import Header from "./header/Header";

function Base({ children }) {
    const { loaderIsOpen } = useSelector((store) => store.CombineSlice);

    return (
        <>
            <Header />
            {loaderIsOpen && <Loader />}
            {children}
            <Footer />
        </>
    );
}

export default Base;
