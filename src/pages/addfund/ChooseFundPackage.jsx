import { useEffect, useState } from "react";

import { Radio } from "antd";
import toast from "react-hot-toast";
import { IoMdCheckbox } from "react-icons/io";
import useGet from "../../hooks/useGet";
import "./addfund.css";

function ChooseFundPackage({ currentStep, setCurrentStep }) {
    const [packageData, setPackageData] = useState(null);

    const [data] = useGet("/user/project/create");

    useEffect(() => {
        if (data) {
            setPackageData(data.options);
        }
    }, [data]);

    const [selectedPackage, setSelectedPackage] = useState(null);

    const handleChange = (e) => {
        setSelectedPackage(e.target.value);
    };

    const handleStep = () => {
        if (selectedPackage) {
            setCurrentStep(1);
        } else {
            toast.error("No package selected");
        }
    };

    return (
        <div>
            <Radio.Group className="w-100" onChange={handleChange}>
                <div className="row">
                    {packageData?.map((item, index) => {
                        return (
                            <div key={index} className="col-md-3">
                                <div className="package-card">
                                    <div className="header">
                                        <p className="title">Basic</p>
                                        <p className="price">699€</p>
                                    </div>
                                    <p className="desc">Etiam ac convallis enim, eget euismod dolor.</p>
                                    <ul className="lists">
                                        <li className="list">
                                            <IoMdCheckbox />

                                            <p>Aenean quis</p>
                                        </li>
                                        <li className="list">
                                            <IoMdCheckbox />
                                            <p>Morbi semper</p>
                                        </li>
                                    </ul>

                                    <Radio value={item}>Select</Radio>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Radio.Group>
            <div className="d-flex justify-content-end">
                <button onClick={handleStep} className="btn btn-primary btnhover mt-3">
                    Next
                </button>
            </div>
        </div>
    );
}

export default ChooseFundPackage;
