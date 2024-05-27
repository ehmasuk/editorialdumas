import { Steps } from "antd";
import { useEffect, useState } from "react";
import Base from "../../layouts/Base";
import AddFundInfo from "./AddFundInfo";
import ChooseFundPackage from "./ChooseFundPackage";
import CreateFundPack from "./CreateFundPack";
import "./addfund.css";
import PublishFund from "./PublishFund";
import SellBooksFund from "./SellBooksFund";

function AddFund() {
    const [currentStep, setCurrentStep] = useState(0);

    const [dataFromGet,setDataFromGet] = useState(null)

    useEffect(() => {
        window.onbeforeunload = () => true;
        return () => {
            window.onbeforeunload = null;
        };
    }, []);


    useEffect(()=>{
        console.log(dataFromGet);
    },[dataFromGet])

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
                            title: "Vende más libros",
                        },
                        {
                            title: "Publicar",
                        },
                    ]}
                />
                <div className="fund-wraper">
                    {currentStep === 0 && <ChooseFundPackage dataFromGet={dataFromGet} setDataFromGet={setDataFromGet} setCurrentStep={setCurrentStep} />}
                    {currentStep === 1 && <AddFundInfo dataFromGet={dataFromGet} setDataFromGet={setDataFromGet} setCurrentStep={setCurrentStep} />}
                    {currentStep === 2 && <CreateFundPack dataFromGet={dataFromGet} setDataFromGet={setDataFromGet} setCurrentStep={setCurrentStep} />}
                    {currentStep === 3 && <SellBooksFund dataFromGet={dataFromGet} setDataFromGet={setDataFromGet} setCurrentStep={setCurrentStep} />}
                    {currentStep === 4 && <PublishFund />}
                </div>
            </div>
        </Base>
    );
}

export default AddFund;
