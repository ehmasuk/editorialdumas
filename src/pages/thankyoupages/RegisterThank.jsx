import { Result } from "antd";
import { useEffect } from "react";
import Base from "../../layouts/Base";

function RegisterThank() {
    useEffect(() => {
        console.log("registerThank");
    }, []);
    return (
        <Base>
            <Result status="success" title="Successfully registered" subTitle="Thank you for register" />;
        </Base>
    );
}

export default RegisterThank;
