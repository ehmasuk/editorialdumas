import { Steps } from "antd";
import { useState, useEffect } from "react";
import "./editfund.css";

import EditFundInfo from "./EditFundInfo.jsx";
import EditFundPack from "./EditFundPack.jsx";
import EditFundPackage from "./EditFundPackage.jsx";
import PublishEditFund from "./PublishEditFund.jsx";
import Base from "../../layouts/Base.jsx";
import axios from "axios";
import { useParams } from "react-router-dom";

const apiUrl = import.meta.env.VITE_REACT_APP_DEFAULT_API_ROUTE;

function EditFund() {

    const [dataFromGet,setDataFromGet] = useState(null)


    const {editid} = useParams()


    const [prevContent,setPrevContent] = useState(null)
    const [isLoading, setIsLoading] = useState(null);


    const getData = async () => {
        setIsLoading(true);
        try {
            const res = await axios.get(`${apiUrl}/user/project/${editid}/edit`);
            setPrevContent(res.data);
            console.log(res.data);

        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);







    const [currentStep, setCurrentStep] = useState(0);

    return (
        <Base>
            <div className="container py-3">
                <Steps
                    current={currentStep}
                    items={[
                        {
                            title: "Elige tu paquete",
                        },
                        {
                            title: "Información sobre fondos",
                        },
                        {
                            title: "Crear paquetes",
                        },
                        {
                            title: "Publicar",
                        },
                    ]}
                />
                <div className="fund-wraper">
                    {currentStep === 0 && <EditFundPackage prevContent={prevContent} dataFromGet={dataFromGet} setDataFromGet={setDataFromGet} setCurrentStep={setCurrentStep} />}
                    {currentStep === 1 && <EditFundInfo getData={getData} prevContent={prevContent} dataFromGet={dataFromGet} setDataFromGet={setDataFromGet} setCurrentStep={setCurrentStep} />}
                    {currentStep === 2 && <EditFundPack prevContent={prevContent} dataFromGet={dataFromGet} setDataFromGet={setDataFromGet} setCurrentStep={setCurrentStep} />}
                    {currentStep === 3 && <PublishEditFund />}
                </div>
            </div>
        </Base>
    );
}

export default EditFund;
