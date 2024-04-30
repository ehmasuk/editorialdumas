import { useNavigate, useSearchParams } from "react-router-dom";
import Base from "../../layouts/Base";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authCheck } from "../../features/AuthCheckerSlice";
import toast from "react-hot-toast";
const apiUrl = import.meta.env.VITE_REACT_APP_DEFAULT_API_ROUTE;


function RecoverPassLast() {

    const [searchParams] = useSearchParams();

    const navigate = useNavigate()

    const dispatch = useDispatch();

    const token = searchParams.get('token')

    console.log(token);
    
    const [userEmail,setUserEmail] = useState(null)

    const getData = async () => {
        try {
            const res = await axios.get(`${apiUrl}/user/reset_password/${token}`);
            setUserEmail(res.data.email)
            console.log(userEmail);
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };


    useEffect(() => {
        getData();
    }, []);


    const [userData,setUserData] = useState(null)

    const handleChange = (e)=>{
        const name = e.target.name
        setUserData({...userData,[name]:e.target.value,email:userEmail})
        console.log(userData);
    }

    const handleSubmit = async (e)=>{
        e.preventDefault()
        
        try {
            const res = await axios.post(`${apiUrl}/user/password_change`, userData);
            localStorage.setItem("isLogedin", JSON.stringify(res.data));
            dispatch(authCheck());
            navigate("/profile")
            toast.success("Your password changed successfull");
        } catch (error) {
            console.log(error);
        }

        console.log(userData);

    }



    return (
        <Base>
            <div className="container content-inner-1">
                
                    <form onSubmit={handleSubmit} style={{maxWidth:'700px',margin:'auto'}}>
                        <h4 className="text-secondary">FORGET PASSWORD ?</h4>
                        <p className="font-weight-600">Recover your password.</p>
                        <div className="mb-3">
                            <label className="label-title">E-MAIL</label>
                            <input value={userEmail && userEmail} className="form-control" placeholder="Your Email" type="email" />
                        </div>
                        <div className="mb-3">
                            <label className="label-title">Password *</label>
                            <input onChange={handleChange} name="password" required className="form-control" placeholder="Your password" type="password" />
                        </div>
                        <div className="mb-3">
                            <label className="label-title">Confirm password</label>
                            <input onChange={handleChange} name="password_confirmation" required className="form-control" placeholder="Confirm password" type="password" />
                        </div>
                        <div className="text-left">
                            <button className="btn btn-primary btnhover">Submit</button>
                        </div>
                    </form>
                    
            </div>
        </Base>
    );
}

export default RecoverPassLast;
