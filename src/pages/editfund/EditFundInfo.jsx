import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import TipTap from "../../components/editor/TipTap";
import ProgressLoader from "../../components/progressLoader/ProgressLoader";

const apiUrl = import.meta.env.VITE_REACT_APP_DEFAULT_API_ROUTE;

function EditFundInfo({ prevContent, dataFromGet, setDataFromGet, setCurrentStep }) {
    const [des, setDes] = useState(null);

    const userId = JSON.parse(localStorage.getItem("isLogedin")).user.id;

    const dispatch = useDispatch();

    const handleBookDes = (data) => {
        // setDes(data);
        setAllData({ ...allData, book_description: data });
    };

    const [preValues, setDefaultValues] = useState(null);

    useEffect(() => {
        setDefaultValues(prevContent);

        prevContent &&
            dataFromGet &&
            setAllData({
                title: prevContent?.title,
                user_id: userId,
                book_description: prevContent?.book_description,
                book_id: prevContent?.id,
                project_id: dataFromGet?.project_id,
                project_name: dataFromGet?.project_name,
            });
    }, [prevContent, dataFromGet]);

    // preValues && console.log(preValues);


    const [progressPercentage, setProgressPercentage] = useState(0);
    const [isLoading, setIsLoading] = useState(null);





    const postData = async (formData) => {
        const config = {
            onUploadProgress: (progressEvent) => {
                setProgressPercentage(Math.floor(progressEvent.progress * 100));
                if (progressEvent.progress == 1) {
                    setIsLoading(false);
                    setCurrentStep(2);
                }
            },
        };

        setIsLoading(true);
        try {
            const res = await axios.post(`${apiUrl}/user/project`, formData, config);
            console.log(res);
            setDataFromGet(res.data);
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong, please try again later");
        }
    };

    const [allData, setAllData] = useState(null);

    const handleChange = (e) => {
        if (e.target.name == "title") {
            setAllData({ ...allData, title: e.target.value });
        }
        if (e.target.name == "video_url") {
            setAllData({ ...allData, video_url: e.target.files[0] });
        }
        if (e.target.name == "image_url") {
            setAllData({ ...allData, image_url: e.target.files[0] });
        }
        console.log(allData);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData();

        Object.entries(allData).forEach(([key, value]) => {
            formData.set(key, value);
        });

        if (allData.image_url) {
            formData.set("image_url", allData.image_url);
        }
        if (allData.video_url) {
            formData.set("video_url", allData.video_url);
        }

        formData.set("user_id", userId);
        formData.set("book_id", dataFromGet.id);
        formData.set("project_id", dataFromGet.project_id);
        formData.set("project_name", dataFromGet.project_name);

        postData(formData);

        for (var pair of formData.entries()) {
            console.log(pair[0] + ", " + pair[1]);
        }
    };

    return (
        <div className="addfund">
            {isLoading && <ProgressLoader percentage={progressPercentage} />}

            {preValues && (
                <div className="container">
                    <div className="fund-form">
                        <h4 className="mb-3">Basic informations funds</h4>
                        <div className="mb-5">
                            <p className="basic">At this point we ask you to complete the information about your book. The more detailed it is, the easier it will be for our team to evaluate it.</p>
                            <p className="basic">
                                Dont worry if your project is in a very early stage, remember that your project will have to complete a crowdfunding campaign before being published.
                            </p>
                        </div>
                        <form onSubmit={handleFormSubmit}>
                            <div className="mt-5">
                                <div className="mb-4">
                                    <label className="bolden">Title of the book</label>
                                    <p className="tiny">This title is provisional, you can change it later if you want.</p>
                                    <input defaultValue={preValues.title} name="title" onChange={handleChange} type="text" className="form-control" />
                                </div>
                                <div className="mb-4">
                                    <label className="bolden">Book description</label>
                                    <p className="tiny">Give a brief description of the book you are going to send us</p>

                                    <TipTap defaultValue={preValues.book_description} getEditorData={handleBookDes} />
                                </div>
                                <div className="mb-4">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <label className="bolden">Book image</label>
                                            <p className="tiny">This title is provisional, you can change it later if you want.</p>
                                            <input onChange={handleChange} accept=".png, .jpg" name="image_url" type="file" className="form-control" />
                                        </div>

                                        <div className="col-md-4">
                                            <img className="img-fluid" style={{ maxHeight: "115px" }} src={preValues.images[0].url} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <label className="bolden">Book video</label>
                                            <p className="tiny">This title is provisional, you can change it later if you want.</p>
                                            <input onChange={handleChange} accept=".mp4" name="video_url" type="file" className="form-control" />
                                        </div>
                                        <div className="col-md-6">
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-end">
                                <button className="btn btn-primary btnhover mt-3">Next</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default EditFundInfo;
