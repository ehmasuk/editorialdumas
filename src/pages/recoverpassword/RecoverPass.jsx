
import axios from "axios";
import Base from "../../layouts/Base";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { hideLoader, showLoader } from "../../features/CombineSlice";
import toast from "react-hot-toast";


const apiUrl = import.meta.env.VITE_REACT_APP_DEFAULT_API_ROUTE;


function RecoverPass() {


    const dispatch = useDispatch();

    const [userData,setUserData] = useState(null)


    const handleSubmit = async (e)=>{
        e.preventDefault()
        dispatch(showLoader());



        try {
            const res = await axios.post(`${apiUrl}/user/reset_password`,{email:userData});
            console.log(res);
            toast.success('Please check your email, we have sent you an email to reset your password')

        } catch (error) {
            console.log(error);
            toast.error('Something went wrong, please try again later')
        } finally {
            dispatch(hideLoader());
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
                            <input onChange={(e)=>setUserData(e.target.value)} required className="form-control" placeholder="Your Email Id" type="email" />
                        </div>
                        <div className="text-left">
                            <button className="btn btn-primary btnhover">Submit</button>
                        </div>
                    </form>
                    
            </div>
        </Base>
    );
}

export default RecoverPass;
