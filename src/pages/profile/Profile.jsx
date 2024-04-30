import { Skeleton } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import ProfileLayout from "./ProfileLayout";
import { hideLoader, showLoader } from "../../features/CombineSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { getUserData } from "../../features/UserInfoSlice";
const apiUrl = import.meta.env.VITE_REACT_APP_DEFAULT_API_ROUTE;

function Profile() {
    const userId = JSON.parse(localStorage.getItem("isLogedin")).user.id;

    const [userData, setUserData] = useState(null);

    const [isLoading, setIsLoading] = useState(true);

    const [file, setFile] = useState(null);


    const getData = async () => {
        setIsLoading(true);
        try {
            const res = await axios.get(`${apiUrl}/user/info/${userId}`);
            setUserData(res.data.user)
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong, please try again later')
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    // const [isNotUpdateAble,setIsNotUpdateAble] = useState(true)

    const navigate = useNavigate()


    const [updatedData,setUpdatedData] = useState(null)

    const handleChange = (e)=>{
        const name = e.target.name;
        setUpdatedData({...updatedData,[name]:e.target.value});
        // setIsNotUpdateAble(false)
        console.log(updatedData);

    }

    const dispatch = useDispatch();

    const handleSubmit = async (e)=>{
        e.preventDefault()
        dispatch(showLoader());
        const formData = new FormData();

        file && formData.append("image_url", file);
        formData.append("id", userId);

        updatedData && Object.entries(updatedData).forEach(([key, value]) => {
            formData.append(key, value);
        });


        try {
            const res = await axios.post(`${apiUrl}/user/updateinfo`,formData);
            console.log(res);
            toast.success('Profile information updated')
            dispatch(getUserData(userId));


        } catch (error) {
            console.log(error);
            toast.error('Something went wrong, please try again later')
        } finally {
            dispatch(hideLoader());
        }

        for (var pair of formData.entries()) {
            console.log(pair[0]+ ', ' + pair[1]); 
        }


    }




    return (
        <ProfileLayout>
            <div className="shop-bx shop-profile">
                <div className="shop-bx-title clearfix">
                    <h5 className="text-uppercase">Basic Information</h5>
                </div>
                {userData && (
                    <form onSubmit={handleSubmit}>
                        <div className="row m-b30">
                            <div className="col-lg-6 col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="formcontrolinput1" className="form-label">
                                        Your Name:
                                    </label>
                                    <input type="text" name="name" onChange={handleChange} className="form-control" placeholder="Enter your name" defaultValue={userData.name} />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="formcontrolinput1" className="form-label">
                                        Profile image:
                                    </label>
                                    <input type="file" name="image_url" onChange={(e)=>setFile(e.target.files[0])} className="form-control" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="formcontrolinput2" className="form-label">
                                        Professional title:
                                    </label>
                                    <input type="profession" name="profession" onChange={handleChange} className="form-control" placeholder="Enter your profession" defaultValue={userData.profession} />
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlTextarea" className="form-label">
                                        Description:
                                    </label>
                                    <textarea
                                    name="description" onChange={handleChange}
                                        className="form-control"
                                        id="exampleFormControlTextarea"
                                        rows={5}
                                        defaultValue={userData.description}
                                        placeholder="Enter your bio"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="shop-bx-title clearfix">
                            <h5 className="text-uppercase">Contact Information</h5>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="formcontrolinput5" className="form-label">
                                        Contact Number:
                                    </label>
                                    <input name="phone_no" onChange={handleChange} type="number" className="form-control" placeholder="Enter mobile no" defaultValue={userData.phone_no} />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="formcontrolinput7" className="form-label">
                                        Country:
                                    </label>
                                    <input name="country" onChange={handleChange} type="text" className="form-control" defaultValue={userData.country} placeholder="Enter Country Name" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="formcontrolinput8" className="form-label">
                                        Postcode:
                                    </label>
                                    <input name="post_code" onChange={handleChange} type="text" className="form-control" defaultValue={userData.post_code} placeholder="Enter post code" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="formcontrolinput9" className="form-label">
                                        City:
                                    </label>
                                    <input name="city" onChange={handleChange} type="text" className="form-control" defaultValue={userData.city} placeholder="Enter city name" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="mb-4">
                                    <label htmlFor="formcontrolinput10" className="form-label">
                                        Full Address:
                                    </label>
                                    <input type="text" name="address" onChange={handleChange} className="form-control" defaultValue={userData.address} placeholder="Enter your address" />
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-primary btnhover">Save Setting</button>
                    </form>
                )}

                {isLoading && (
                    <div className="row">
                        <div className="col-md-6 mb-5">
                            <Skeleton active />
                        </div>
                        <div className="col-md-6 mb-5">
                            <Skeleton active />
                        </div>
                        <div className="col-md-6 mb-5">
                            <Skeleton active />
                        </div>
                        <div className="col-md-6 mb-5">
                            <Skeleton active />
                        </div>
                        <div className="col-md-6 mb-5">
                            <Skeleton active />
                        </div>
                    </div>
                )}
            </div>
        </ProfileLayout>
    );
}

export default Profile;
