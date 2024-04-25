import { InputNumber } from "antd";
import { motion } from "framer-motion";
import { useState } from "react";
import { PiTrashLight } from "react-icons/pi";

import { IoLogoEuro } from "react-icons/io";
import TipTap from "../../components/editor/TipTap";

const defaultpacksData = [
    {
        title: "",
        description: "",
        price: "",
    },
];

function CreateFundPack() {
    const [packsData, setPacksData] = useState(defaultpacksData);

    const handleAddPacks = () => {
        const newPack = { title: "", description: "", price: "" };
        setPacksData([...packsData, newPack]);
    };

    const handlePackDes = (data, index) => {
        console.log(data, index);
    };

    const handleChange = (e, index) => {
        console.log(e.target.value, index);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handlePriceChange = (data, index) => {
        console.log(data, index);
    };

    const handlePackDelete = (index) => {
        console.log(index);
    };

    return (
        <div className="addfund">
            <div className="container">
                <div className="fund-form">
                    <form onSubmit={handleSubmit}>
                        <h4 className="mb-3">Pack informations</h4>
                        <div className="mt-5">
                            <div className="packs">
                                {packsData.map((item, index) => {
                                    return (
                                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} key={index} className="single-pack">
                                            <h5 style={{ float: "right" }}>
                                                Pack {index + 1}
                                                {index > 0 && <PiTrashLight onClick={() => handlePackDelete(index)} color="red" fontSize={18} cursor="pointer" />}
                                            </h5>
                                            <div className="mb-4">
                                                <label className="bolden">Pack amount</label>
                                                <p className="tiny">This title is provisional, you can change it later if you want.</p>
                                                <InputNumber
                                                    onChange={(data) => handlePriceChange(data, index)}
                                                    addonBefore={<IoLogoEuro />}
                                                    size="large"
                                                    min={10}
                                                    formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label className="bolden">Pack title</label>
                                                <p className="tiny">This title is provisional, you can change it later if you want.</p>
                                                <input name="title" onChange={(e) => handleChange(e, index)} className="form-control" type="test" />
                                            </div>
                                            <div className="mb-4">
                                                <label className="bolden">Pack description</label>
                                                <p className="tiny">This title is provisional, you can change it later if you want.</p>
                                                <TipTap getEditorData={(data) => handlePackDes(data, index)} />
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                            <div className="d-flex justify-content-end">
                                <div onClick={handleAddPacks} className="btn btn-primary btnhover mt-3">
                                    Add new pack
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateFundPack;
