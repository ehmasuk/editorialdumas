import { Result } from "antd";
import { useEffect } from "react";
import Base from "../../layouts/Base";
import { useNavigate } from "react-router-dom";

function SendProposalThank() {
    const navigate = useNavigate();
    setTimeout(() => {
        navigate("/");
    }, 5000);
    return (
        <Base>
            <Result status="success" title="Exitoso" subTitle="Gracias por su propuesta" />;
        </Base>
    );
}

export default SendProposalThank;
