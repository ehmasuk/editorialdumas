import { Result } from "antd";
import { useNavigate } from "react-router-dom";

function PublishEditFund() {

    const navigate = useNavigate()

    setTimeout(()=>{
        navigate('/profile/myfunds')
    },3000)


    return (
        <div style={{minHeight:'70vh'}}>
            <Result status="success" title="¡Tu proyecto se actualizó exitosamente!" />
        </div>
    );
}


export default PublishEditFund