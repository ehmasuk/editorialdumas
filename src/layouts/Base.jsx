import Footer from "./footer/Footer";
import Header from "./header/Header";

function Base({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}

export default Base;
