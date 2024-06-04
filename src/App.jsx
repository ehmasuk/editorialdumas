import { useEffect } from "react";
import ConfettiExplosion from "react-confetti-explosion";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import Routing from "./Routing";
import ScrollTop from "./components/ScrollTop";
import MetaPixel from "./externaltags/MetaPixel";
import { getUserData, resetUserInfo } from "./features/UserInfoSlice";

function App() {
    const dispatch = useDispatch();

    const { isLogedin } = useSelector((store) => store.AuthCheckerSlice);
    const { confettiIsOpen } = useSelector((store) => store.CombineSlice);

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
            <MetaPixel />
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
            <div style={{ position: "absolute", left: "50%", top: "100px" }}>{confettiIsOpen && <ConfettiExplosion duration={5000} particleSize={10} zIndex={9999} />}</div>

            <Routing />

            <ScrollTop />
        </main>
    );
}

export default App;
