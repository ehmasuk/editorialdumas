import { Steps } from "antd";
import { useState } from "react";
import Base from "../../layouts/Base";
import AddFundInfo from "./AddFundInfo";
import ChooseFundPackage from "./ChooseFundPackage";
import CreateFundPack from "./CreateFundPack";
import "./addfund.css";

function AddFund() {
    const [currentStep, setCurrentStep] = useState(0);

    return (
        <Base>
            <div className="container py-3">
                <Steps
                    current={currentStep}
                    items={[
                        {
                            title: "Choose your package",
                        },
                        {
                            title: "Fund informations",
                        },
                        {
                            title: "Create packs",
                        },
                        {
                            title: "Publish your fund",
                        },
                    ]}
                />
                <div className="fund-wraper">
                    {currentStep === 0 && <ChooseFundPackage currentStep={currentStep} setCurrentStep={setCurrentStep} />}
                    {currentStep === 1 && <AddFundInfo currentStep={currentStep} setCurrentStep={setCurrentStep} />}
                    {currentStep === 2 && <CreateFundPack currentStep={currentStep} setCurrentStep={setCurrentStep} />}
                </div>
            </div>
        </Base>
    );
}

export default AddFund;
