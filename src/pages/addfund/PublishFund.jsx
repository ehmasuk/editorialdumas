import { Result } from "antd";
import { useNavigate } from "react-router-dom";

function PublishFund() {

    const navigate = useNavigate()

    setTimeout(()=>{
        navigate('/profile/myfunds')
    },3000)


    return (
        <div style={{minHeight:'70vh'}}>
            <Result status="success" title="Gracias. El proyecto ha sido enviado al project manager. ¡Buena suerte!" />
        </div>
    );
}

export default PublishFund;
