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
import Proposal from "./pages/profile/proposal/Proposal";
import MyProposals from "./pages/profile/myproposals/MyProposals";
import About from "./pages/about/About";
import Faq from "./pages/faq/faq";
import RegisterThank from "./pages/thankyoupages/registerThank";
import SendProposalThank from "./pages/thankyoupages/SendProposalThank";
import RecoverPass from "./pages/recoverpassword/RecoverPass";
import RecoverPassLast from "./pages/recoverpassword/RecoverPassLast";
import AllProjects from "./pages/allprojects/AllProjects";
import SingleProject from "./pages/singleproject/SingleProject";
import EditFund from "./pages/editfund/editfund";
import AllAuthors from "./pages/allauthors/AllAuthors";
import AuthorProfile from "./pages/authorprofile/AuthorProfile";
import BookDetails from "./pages/bookdetails/BookDetails";
import AllBooks from "./pages/allbooks/AllBooks";
import Cart from "./pages/cart/Cart";

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
                    path="/profile/proposal"
                    element={
                        <PrivateRoute isLogedin={isLogedin}>
                            <Proposal />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/profile/myproposals"
                    element={
                        <PrivateRoute isLogedin={isLogedin}>
                            <MyProposals />
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
                <Route
                    path="/editproject"
                    element={
                        <PrivateRoute isLogedin={isLogedin}>
                            <EditFund />
                        </PrivateRoute>
                    }
                />

                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/allprojects" element={<AllProjects />} />
                <Route path="/project/:projectid" element={<SingleProject />} />
                <Route path="/authors" element={<AllAuthors />} />
                <Route path="/author/:authorId" element={<AuthorProfile />} />
                <Route path="/books" element={<AllBooks />} />
                <Route path="/book/:bookId" element={<BookDetails />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/wishlist" element={<Wishlist />} />




                <Route path="*" element={<Error404 />} />
                <Route path="/recoverpass" element={<RecoverPass />} />
                <Route path="/recoverpasslast" element={<RecoverPassLast />} />






                {/* thank you pages */}
                <Route path="/thankyou/register" element={<RegisterThank />} />
                <Route path="/thankyou/sendporposal" element={<SendProposalThank />} />







            </Routes>
        </BrowserRouter>
    );
}

export default Routing;
