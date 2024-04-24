import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authCheck } from "../../features/AuthCheckerSlice";
import Base from "../../layouts/Base";

const apiUrl = import.meta.env.VITE_REACT_APP_DEFAULT_API_ROUTE



function Register() {

    const { register, handleSubmit, reset } = useForm();

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [regisLoading, setRegisLoading] = useState(false);

    const registerSucessAfterWorks = (res) => {
        localStorage.setItem("isLogedin", JSON.stringify(res));
        dispatch(authCheck());
        navigate("/profile");
    };

    const handleRegister = async (data) => {
        setRegisLoading(true);
        try {
            const res = await axios.post(`${apiUrl}/user/register`, data);
            console.log(res);
            reset();
            registerSucessAfterWorks(res);
        } catch (error) {
            toast.error(error.response.data.message);
            console.log(error.response.data.message);
            localStorage.removeItem("isLogedin");
        } finally {
            setRegisLoading(false);
        }
    };

    return (
        <Base>
            <div className="page-content">
                <section className="content-inner shop-account">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-6 mb-4">
                                <div className="login-area">
                                    <form onSubmit={handleSubmit(handleRegister)}>
                                        <h4 className="text-secondary">Registration</h4>
                                        <p className="font-weight-600">If you dont have an account with us, please Registration.</p>
                                        <div className="mb-4">
                                            <label className="label-title">Username </label>
                                            <input {...register("name")} className="form-control" placeholder="Your Username" type="text" />
                                        </div>
                                        <div className="mb-4">
                                            <label className="label-title">Email address </label>
                                            <input {...register("email")} className="form-control" placeholder="Your Email address" type="email" />
                                        </div>
                                        <div className="mb-4">
                                            <label className="label-title">Password </label>
                                            <input {...register("password")} className="form-control " placeholder="Type Password" type="password" />
                                        </div>
                                        <div className="mb-4">
                                            <label className="label-title">Confirm Password </label>
                                            <input {...register("password_confirmation")} className="form-control " placeholder="Type Password" type="password" />
                                        </div>
                                        <div className="mb-5">
                                            <small>
                                                Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described
                                                in our <a href="privacy-policy.html">privacy policy</a>.
                                            </small>
                                        </div>
                                        <div className="text-left">
                                            <button disabled={regisLoading} className="btn btn-primary btnhover w-100 me-2">
                                                <span>Register</span>
                                                {regisLoading && <i className="fas fa-spinner fa-spin m-l10"></i>}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Base>
    );
}

export default Register;
