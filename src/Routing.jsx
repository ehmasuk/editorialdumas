import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Contact from "./pages/contact/Contact";
import Error404 from "./pages/error/Error404";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import PublishBook from "./pages/publish/PublishBook";
import Register from "./pages/register/Register";
import Wishlist from "./pages/wishlist/Wishlist";
import MyFunds from "./pages/profile/myfunds/MyFunds";
import AddFund from "./pages/addfund/AddFund";

function Routing() {
    const { isLogedin } = useSelector((store) => store.AuthCheckerSlice);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/publish" element={<PublishBook />} />
                <Route
                    path="/profile/myfunds"
                    element={
                        <PrivateRoute isLogedin={isLogedin}>
                            <MyFunds />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/addfund"
                    element={
                        <PrivateRoute isLogedin={isLogedin}>
                            <AddFund />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/login"
                    element={
                        <PrivateRoute isLogedin={!isLogedin}>
                            <Login />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/register"
                    element={
                        <PrivateRoute isLogedin={!isLogedin}>
                            <Register />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/profile"
                    element={
                        <PrivateRoute isLogedin={isLogedin}>
                            <Profile />
                        </PrivateRoute>
                    }
                />

                <Route path="/contact" element={<Contact />} />
                <Route path="/wishlist" element={<Wishlist />} />

                <Route path="*" element={<Error404 />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routing;
