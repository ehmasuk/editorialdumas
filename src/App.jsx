import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import Routing from "./Routing";
import ScrollTop from "./components/ScrollTop";
import { getUserData, resetUserInfo } from "./features/UserInfoSlice";
import MetaPixel from "./externaltags/MetaPixel";


function App() {
    const dispatch = useDispatch();



    const { isLogedin } = useSelector((store) => store.AuthCheckerSlice);

    useEffect(() => {
        if (isLogedin) {
            const userId = JSON.parse(localStorage.getItem("isLogedin")).user.id;
            dispatch(getUserData(userId));
        } else {
            dispatch(resetUserInfo());
        }
    }, [isLogedin]);



    return (
        <main>
            <MetaPixel/>
            <Toaster
                position="top-center"
                toastOptions={{
                    duration: 5000,
                    style: {
                        border: "1px solid #fff",
                        background: "#060340",
                        color: "#fff",
                    },
                }}
            />
            <Routing />

            <ScrollTop />
        </main>
    );
}

export default App;
