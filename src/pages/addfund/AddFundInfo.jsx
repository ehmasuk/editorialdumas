import { Button, DatePicker, Upload } from "antd";
import { useState } from "react";
import { LuUpload } from "react-icons/lu";
import TipTap from "../../components/editor/TipTap";

const defaultData = {
    title: "",
    book_description: "",
    book_image: "",
    book_video: "",
    author_image: "",
    author_description: "",
    finish_date: "",
};

function AddFundInfo({ currentStep, setCurrentStep }) {
    const [bookData, setBookData] = useState(defaultData);

    const [isValid, setIsValid] = useState(false);

    const handleBookImageUpload = (data) => {
        setBookData({ ...bookData, book_image: data.file });
    };
    const handleAuthorImageUpload = (data) => {
        setBookData({ ...bookData, author_image: data.file });
    };

    const handleBookDes = (data) => {
        setBookData({ ...bookData, book_description: data });
    };

    const handleAuthorDes = (data) => {
        setBookData({ ...bookData, author_description: data });
    };
    const handleFinishDate = (data) => {
        setBookData({ ...bookData, finish_date: data });
    };

    const handleChnage = (e) => {
        setBookData({ ...bookData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(bookData);
    };

    const handleStep = () => {
        setCurrentStep(2);
    };

    const handleVideoUpload = (data) => {
        setBookData({ ...bookData, book_video: data.file });
    };

    return (
        <div className="addfund">
            <div className="container">
                <div className="fund-form">
                    <h4 className="mb-3">Basic informations funds</h4>
                    <div className="mb-5">
                        <p className="basic">At this point we ask you to complete the information about your book. The more detailed it is, the easier it will be for our team to evaluate it.</p>
                        <p className="basic">Dont worry if your project is in a very early stage, remember that your project will have to complete a crowdfunding campaign before being published.</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="mt-5">
                            <div className="mb-4">
                                <label className="bolden">Title of the book</label>
                                <p className="tiny">This title is provisional, you can change it later if you want.</p>
                                <input name="title" onChange={handleChnage} className="form-control" type="text" />
                            </div>
                            <div className="mb-4">
                                <label className="bolden">Book description</label>
                                <p className="tiny">Give a brief description of the book you are going to send us</p>
                                <TipTap getEditorData={handleBookDes} />
                            </div>
                            <div className="mb-4">
                                <label className="bolden">Book image</label>
                                <p className="tiny">This title is provisional, you can change it later if you want.</p>
                                <div style={{ maxWidth: "300px" }}>
                                    <Upload onChange={handleBookImageUpload} beforeUpload={() => false} listType="picture" accept=".png, .jpg, .jpeg" maxCount={1}>
                                        <Button icon={<LuUpload />}>Click to Upload</Button>
                                    </Upload>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="bolden">Book video</label>
                                <p className="tiny">This title is provisional, you can change it later if you want.</p>
                                <div style={{ maxWidth: "300px" }}>
                                    <Upload listType="picture" onChange={handleVideoUpload} beforeUpload={() => false} accept=".mp4" maxCount={1}>
                                        <Button icon={<LuUpload />}>Click to Upload</Button>
                                    </Upload>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="bolden">Finish date</label>
                                <p className="tiny">This title is provisional, you can change it later if you want.</p>
                                <DatePicker onChange={handleFinishDate} />
                            </div>
                            <div className="mb-4">
                                <label className="bolden">Author description</label>
                                <p className="tiny">This title is provisional, you can change it later if you want.</p>
                                <TipTap getEditorData={handleAuthorDes} />
                            </div>
                            <div className="mb-4">
                                <label className="bolden">Author image</label>
                                <p className="tiny">This title is provisional, you can change it later if you want.</p>
                                <div style={{ maxWidth: "300px" }}>
                                    <Upload onChange={handleAuthorImageUpload} beforeUpload={() => false} listType="picture" accept=".png, .jpg, .jpeg" maxCount={1}>
                                        <Button icon={<LuUpload />}>Click to Upload</Button>
                                    </Upload>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-end">
                            <button onClick={handleStep} className="btn btn-primary btnhover mt-3">
                                Next
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddFundInfo;
