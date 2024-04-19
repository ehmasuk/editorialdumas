import { Toaster } from "react-hot-toast";
import Routing from "./Routing";
import ScrollTop from "./components/ScrollTop";

function App() {
    return (
        <main>
            <Toaster
                position="bottom-center"
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
