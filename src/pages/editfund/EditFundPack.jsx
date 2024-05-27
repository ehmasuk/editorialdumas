import { InputNumber } from "antd";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { PiTrashLight } from "react-icons/pi";

import { IoLogoEuro } from "react-icons/io";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import axios from "axios";
import { hideLoader, showLoader } from "../../features/CombineSlice";
import TipTap from "../../components/editor/TipTap";
const apiUrl = import.meta.env.VITE_REACT_APP_DEFAULT_API_ROUTE;






function EditFundPack({prevContent, dataFromGet,setCurrentStep}) {




    const [defaultpacksData,setDefaultValues] = useState(null)


 

    useEffect(() => {
        if(prevContent){
            const data = prevContent?.packs?.reduce((acc,pack)=>{

                acc = [...acc,{pack_title: pack.title,pack_description: pack.pack_description,pack_amount: pack.pack_amount,}]
    
                return acc
            },[])
            setPacksData(data);
        }
        
    }, [prevContent]);

    const [packsData, setPacksData] = useState(null);

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
        console.log(packsData);
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


        console.log(packsData);

    };

    const handlePackDelete = (index) => {
        console.log(index);
        
        
        const afterDelete = packsData.filter((_,idx)=>{
            return idx !== index
        })

        setPacksData(afterDelete);

    };





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
            book_chapter: dataFromGet.book_chapter,
            target_date: dataFromGet.target_date,
            sell_book: dataFromGet.sell_book,
            pack_title: [],
            pack_description: [],
            pack_amount: []
        });


        try{
            const res = await axios.post(`${apiUrl}/user/project`, convertedData);
            // console.log(res);
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
                    <h5>Agregue sus paquetes información, puede crear varios paquetes. <br /> Le sugerimos que cree al menos tres paquetes</h5>
                        <hr />
                        <div className="mt-5">
                            <div className="packs">
                                {packsData && packsData?.map((item, index) => {
                                    return (
                                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} key={index} className="single-pack">
                                            <h5 style={{ float: "right" }}>
                                                Pack {index + 1}
                                                {index > 0 && <PiTrashLight onClick={() => handlePackDelete(index)} color="red" fontSize={18} cursor="pointer" />}
                                            </h5>
                                            <div className="mb-4">
                                                <label className="bolden">Monto del paquete</label>
                                                <p className="tiny">Ingrese el monto de su paquete, mínimo de 4 euros</p>
                                                <InputNumber
                                                value={item.pack_amount}
                                                    onChange={(data) => handlePriceChange(data, index)}
                                                    addonBefore={<IoLogoEuro />}
                                                    size="large"
                                                    min={4}
                                                    formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label className="bolden">Título de paquete</label>
                                                <p className="tiny">Ingrese un título de paquete atractivo</p>
                                                <input name="pack_title" value={item.pack_title} onChange={(e) => handleChange(e, index)} className="form-control" type="test" />
                                            </div>

                                            <div className="mb-4">
                                                <label className="bolden">Descripción del paquete</label>
                                                <p className="tiny">Máximo 300 charachter permitido por paquete, sugerimos resaltar puntos importantes del paquete</p>
                                                <TipTap maxCharacter={300} defaultValue={item.pack_description} getEditorData={(data) => handlePackDes(data, index)} />
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                            
                                <div onClick={handleAddPacks} className="btn btn-primary btnhover mt-3">Agregar nuevo paquete</div>
                            
                        </div>
                        <div className="d-flex justify-content-end">
                            <button className="btn btn-primary btnhover mt-3">Próxima</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}



export default EditFundPack