import { Result } from "antd";
import { useNavigate } from "react-router-dom";
import Base from "../../layouts/Base";

function RegisterThank() {
    const navigate = useNavigate();

    setTimeout(() => {
        navigate("/");
    }, 5000);

    return (
        <Base>
            <Result status="success" title="Registrado exitosamente" subTitle="Gracias por registrarse" />;
        </Base>
    );
}

export default RegisterThank;
