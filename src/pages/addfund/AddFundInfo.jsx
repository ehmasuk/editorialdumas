import { Button, DatePicker, Progress, Upload } from "antd";
import { useState } from "react";
import { LuUpload } from "react-icons/lu";
import TipTap from "../../components/editor/TipTap";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { hideLoader, showLoader } from "../../features/CombineSlice";
import axios from "axios";
import { useDispatch } from "react-redux";
import { AnimatePresence,motion } from "framer-motion";
import ProgressLoader from "../../components/progressLoader/ProgressLoader";

const apiUrl = import.meta.env.VITE_REACT_APP_DEFAULT_API_ROUTE;

function AddFundInfo({ dataFromGet,setDataFromGet, setCurrentStep }) {

    const [des, setDes] = useState(null);
    const [date, setDate] = useState(null);




    const dispatch = useDispatch();


    const handleBookDes = (data) => {
        setDes(data)
    };

    const handleFinishDate = (data) => {
        setDate(data)
        console.log(data);
    };



    const userId = JSON.parse(localStorage.getItem("isLogedin")).user.id;



    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [progressPercentage,setProgressPercentage] = useState(0);
    const [isLoading,setIsLoading] = useState(null);


    const [imageFile,setImageFile] = useState(null)
    const [videoFile,setVideoFile] = useState(null)

    const handleFormSubmit = (data)=>{
        const formData = new FormData()

        Object.entries(data).forEach(([key, value]) => {
            formData.set(key, value);
        });
        formData.set('user_id', userId);
        formData.set('image_url', data.image_url[0]);
        formData.set('video_url', data.video_url[0]);

        
        if(des && date){
            formData.set('target_date', date);
            formData.set('book_description', des);
            formData.set('book_id', dataFromGet.id);
            formData.set('project_id', dataFromGet.project_id);
            formData.set('project_name', dataFromGet.project_name);
            

            postData(formData)
            for (var pair of formData.entries()) {
                console.log(pair[0] + ", " + pair[1]);
            }
        }else{
            toast.error("Please fillup all informations");
        }

    }

    const postData = async (formData)=>{


        const config = {
            onUploadProgress: (progressEvent) => {
                setProgressPercentage(Math.floor(progressEvent.progress*100))
                if(progressEvent.progress == 1){
                    setIsLoading(false);
                    setCurrentStep(2)
                }
            }
        }


        setIsLoading(true);
        try{
            const res = await axios.post(`${apiUrl}/user/project`, formData,config);
            console.log(res);
            setDataFromGet(res.data)
        }catch (error) {
            console.log(error);
            toast.error("Something went wrong, please try again later");
        }
        
    }



    return (
        <div className="addfund">

            {isLoading && <ProgressLoader percentage={progressPercentage} />}

            <div className="container">
                <div className="fund-form">
                    <h4 className="mb-3">Basic informations funds</h4>
                    <div className="mb-5">
                        <p className="basic">At this point we ask you to complete the information about your book. The more detailed it is, the easier it will be for our team to evaluate it.</p>
                        <p className="basic">Dont worry if your project is in a very early stage, remember that your project will have to complete a crowdfunding campaign before being published.</p>
                    </div>
                    <form onSubmit={handleSubmit(handleFormSubmit)}>
                        <div className="mt-5">
                            <div className="mb-4">
                                <label className="bolden">Title of the book</label>
                                <p className="tiny">This title is provisional, you can change it later if you want.</p>
                                <input
                                    name="title"
                                    {...register("title", {
                                        required: "Este campo es obligatorio",
                                    })}
                                    type="text"
                                    className={`form-control ${errors.title && "is-invalid"}`}
                                />
                                <AnimatePresence>
                                    {errors.title && (
                                        <motion.div
                                            exit={{ y: -10, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            initial={{ y: -30, opacity: 0 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-danger"
                                            role="alert"
                                        >
                                            {errors.title.message}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                            <div className="mb-4">
                                <label className="bolden">Book description</label>
                                <p className="tiny">Give a brief description of the book you are going to send us</p>
                                <TipTap getEditorData={handleBookDes} />
                            </div>
                            <div className="mb-4">
                                <label className="bolden">Book image</label>
                                <p className="tiny">This title is provisional, you can change it later if you want.</p>

                                <input
                                    accept=".png,.jpg,.jpeg"
                                    type="file"
                                    {...register("image_url", {
                                        required: "Este campo es obligatorio",
                                    })}
                                    className={`form-control ${errors.image_url && "is-invalid"}`}
                                />
                                <AnimatePresence>
                                    {errors.image_url && (
                                        <motion.div
                                            exit={{ y: -10, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            initial={{ y: -30, opacity: 0 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-danger"
                                            role="alert"
                                        >
                                            {errors.image_url.message}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                            <div className="mb-4">
                                <label className="bolden">Book video</label>
                                <p className="tiny">This title is provisional, you can change it later if you want.</p>
                                <input
                                accept=".mp4"
                                    type="file"
                                    {...register("video_url", {
                                        required: "Este campo es obligatorio",
                                    })}
                                    className={`form-control ${errors.video_url && "is-invalid"}`}
                                />
                                <AnimatePresence>
                                    {errors.video_url && (
                                        <motion.div
                                            exit={{ y: -10, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            initial={{ y: -30, opacity: 0 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-danger"
                                            role="alert"
                                        >
                                            {errors.video_url.message}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                            <div className="mb-4">
                                <label className="bolden">Finish date</label>
                                <p className="tiny">This title is provisional, you can change it later if you want.</p>
                                <DatePicker needConfirm onChange={handleFinishDate} />
                            </div>
                        </div>
                        <div className="d-flex justify-content-end">
                            <button className="btn btn-primary btnhover mt-3">Next</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddFundInfo;
