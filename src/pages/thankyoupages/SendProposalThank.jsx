import { Result } from "antd";
import { useEffect } from "react";
import Base from "../../layouts/Base";

function SendProposalThank() {
    useEffect(() => {
        console.log("SendProposalThank");
    }, []);
    return (
        <Base>
            <Result status="success" title="Successfull" subTitle="Thank you for your proposal" />;
        </Base>
    );
}

export default SendProposalThank;
