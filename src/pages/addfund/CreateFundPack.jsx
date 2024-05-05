import { InputNumber } from "antd";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { PiTrashLight } from "react-icons/pi";

import { IoLogoEuro } from "react-icons/io";
import TipTap from "../../components/editor/TipTap";
import { hideLoader, showLoader } from "../../features/CombineSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import axios from "axios";
const apiUrl = import.meta.env.VITE_REACT_APP_DEFAULT_API_ROUTE;
const defaultpacksData = [
    {
        pack_title: "",
        pack_description: "",
        pack_amount: "",
    }
];



function CreateFundPack({dataFromGet,setCurrentStep}) {
    const [packsData, setPacksData] = useState(defaultpacksData);

    const handleAddPacks = () => {
        const newPack = { pack_title: "", pack_description: "", pack_amount: "" };
        setPacksData([...packsData, newPack]);
    };

    const handlePackDes = (data, index) => {
        setPacksData(prev=>{
            return prev.map((pack,idx)=>{
                if(idx === index){
                    return {...pack,pack_description: data}
                }else{
                    return pack
                }
            })
        })
    };

    const handleChange = (e, index) => {

        

            setPacksData(prev=>{
                return prev.map((pack,idx)=>{
                    if(idx === index){
                        return {...pack,[e.target.name]: e.target.value}
                    }else{
                        return pack
                    }
                })
            })
        

    };

    const dispatch = useDispatch()


    const handlePriceChange = (data, index) => {
        setPacksData(prev=>{
            return prev.map((pack,idx)=>{
                if(idx === index){
                    return {...pack,pack_amount: data}
                }else{
                    return pack
                }
            })
        })
    };

    const handlePackDelete = (index) => {
        console.log(index);
        
        
        const afterDelete = packsData.filter((_,idx)=>{
            return idx !== index
        })

        setPacksData(afterDelete);

    };




    useEffect(()=>{
        console.log(packsData);
    },[packsData])

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(showLoader());


        const convertedData = packsData.reduce((acc, curr) => {
            acc.pack_title.push(curr.pack_title);
            acc.pack_description.push(curr.pack_description);
            acc.pack_amount.push(curr.pack_amount);
            return acc;
        }, {
            user_id: dataFromGet.user_id,
            book_id: dataFromGet.id,
            project_id: dataFromGet.project_id,
            project_name: dataFromGet.project_name,
            title: dataFromGet.title,
            book_description: dataFromGet.book_description,
            target_date: dataFromGet.target_date,
            pack_title: [],
            pack_description: [],
            pack_amount: []
        });


        try{
            const res = await axios.post(`${apiUrl}/user/project`, convertedData);
            console.log(res);
            setCurrentStep(3)
        }catch (error) {
            console.log(error);
            toast.error("Something went wrong, please try again later");
        } finally {
            dispatch(hideLoader());
        }


        console.log(convertedData);
    };


    return (
        <div className="addfund">
            <div className="container">
                <div className="fund-form">
                    <form onSubmit={handleSubmit}>
                        <h4>Pack informations</h4>
                        <hr />
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
                                                value={item.pack_amount}
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
                                                <input name="pack_title" value={item.pack_title} onChange={(e) => handleChange(e, index)} className="form-control" type="test" />
                                            </div>
                                            {/* <div className="mb-4">
                                                <label className="bolden">Pack image</label>
                                                <p className="tiny">This title is provisional, you can change it later if you want.</p>
                                                <input name="packimage_url" onChange={(e) => handleChange(e, index)} className="form-control" type="file" />
                                            </div> */}
                                            <div className="mb-4">
                                                <label className="bolden">Pack description</label>
                                                <p className="tiny">This title is provisional, you can change it later if you want.</p>
                                                <TipTap getEditorData={(data) => handlePackDes(data, index)} />
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                            
                                <div onClick={handleAddPacks} className="btn btn-primary btnhover mt-3">Add new pack</div>
                            
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

export default CreateFundPack;
