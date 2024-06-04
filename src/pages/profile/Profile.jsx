import { Button, Skeleton, Tooltip } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { GoQuestion } from "react-icons/go";
import { useDispatch } from "react-redux";
import TipTap from "../../components/editor/TipTap";
import { hideLoader, showLoader } from "../../features/CombineSlice";
import { getUserData } from "../../features/UserInfoSlice";
import ProfileLayout from "./ProfileLayout";
import { Link } from "react-router-dom";
import { BsDownload } from "react-icons/bs";
import { RiDownload2Fill } from "react-icons/ri";
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
            setUserData(res.data.user);
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong, please try again later");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const [isNotUpdateAble, setIsNotUpdateAble] = useState(true);

    const [updatedData, setUpdatedData] = useState(null);

    const handleChange = (e) => {
        const name = e.target.name;

        setUpdatedData({ ...updatedData, [name]: e.target.value });
        setIsNotUpdateAble(false);
        console.log(updatedData);
    };

    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(showLoader());
        const formData = new FormData();

        file && formData.append("image_url", file);
        formData.append("id", userId);

        updatedData &&
            Object.entries(updatedData).forEach(([key, value]) => {
                formData.append(key, value);
            });

        try {
            const res = await axios.post(`${apiUrl}/user/updateinfo`, formData);
            console.log(res);
            toast.success("Información de perfil actualizada");
            dispatch(getUserData(userId));
        } catch (error) {
            console.log(error);
            toast.error("Algo salió mal, inténtelo de nuevo más tarde");
        } finally {
            dispatch(hideLoader());
        }

        for (var pair of formData.entries()) {
            console.log(pair[0] + ", " + pair[1]);
        }
    };

    useEffect(() => {
        if (file) {
            setIsNotUpdateAble(false);
        }
    }, [file]);

    const handleBiography = (biographytext) => {
        setUpdatedData({ ...updatedData, description: biographytext });
        setIsNotUpdateAble(false);
    };

    return (
        <ProfileLayout>
            <div className="shop-bx shop-profile p-0">
                <div className="shop-bx-title clearfix">
                    <h5 className="text-uppercase">Tu perfil</h5>
                </div>
                {userData && (
                    <form onSubmit={handleSubmit}>
                        <div className="row m-b30">
                            <div className="col-lg-6 col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="formcontrolinput1" className="form-label">
                                        Tu nombre
                                    </label>
                                    <input type="text" name="name" onChange={handleChange} className="form-control" placeholder="Ingresa tu nombre" required defaultValue={userData.name} />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="formcontrolinput1" className="form-label">
                                        Tu foto de perfil:{" "}
                                        <Tooltip title="Elige una imagen de perfil que pueda fortalecer tu marca">
                                            <GoQuestion fontSize={16} style={{ marginTop: "-2px" }} />
                                        </Tooltip>
                                    </label>
                                    <input type="file" accept=".png,.jpg,.jpeg" name="image_url" onChange={(e) => setFile(e.target.files[0])} className="form-control" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="formcontrolinput2" className="form-label">
                                        Título profesional:
                                    </label>
                                    <input type="profession" name="profession" onChange={handleChange} className="form-control" placeholder="Tu profesión" defaultValue={userData.profession} />
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlTextarea" className="form-label">
                                        Descripción:{" "}
                                        <Tooltip title="Descarga un modelo que puedes utilizar">
                                            <a download href="https://editorialdumas.com/download/profileTutorial/el_libro_Crowdfunding-exitosoc%C3%B3mo-hacerlo.docx">
                                            <Button type="primary" icon={<RiDownload2Fill fontSize={16} style={{ marginTop: "-4px" }} />} size="small" />
                                            </a>
                                        </Tooltip>
                                    </label>


                                    <TipTap defaultValue={userData.description} getEditorData={handleBiography} />
                                </div>
                            </div>
                        </div>
                        <div className="shop-bx-title clearfix">
                            <h5 className="text-uppercase">Información de contacto</h5>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="formcontrolinput5" className="form-label">
                                        Número de contacto
                                    </label>
                                    <input name="phone_no" onChange={handleChange} type="number" className="form-control" placeholder="Tu número de contacto" defaultValue={userData.phone_no} />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="formcontrolinput7" className="form-label">
                                        País:
                                    </label>
                                    <input name="country" onChange={handleChange} type="text" className="form-control" defaultValue={userData.country} placeholder="Tu país" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">Código postal:</label>
                                    <input name="post_code" onChange={handleChange} type="text" className="form-control" defaultValue={userData.post_code} placeholder="Tu código postal:" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">Ciudad:</label>
                                    <input name="city" onChange={handleChange} type="text" className="form-control" defaultValue={userData.city} placeholder="Tu ciudad:" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="mb-4">
                                    <label className="form-label">Dirección completa:</label>
                                    <input type="text" name="address" onChange={handleChange} className="form-control" defaultValue={userData.address} placeholder="Tu dirección completa:" />
                                </div>
                            </div>
                        </div>
                        <button disabled={isNotUpdateAble} className="btn btn-primary btnhover">
                            Guardar configuración
                        </button>
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
