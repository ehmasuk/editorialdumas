import { Result } from "antd";
import { useNavigate } from "react-router-dom";

function PublishFund() {

    const navigate = useNavigate()

    setTimeout(()=>{
        navigate('/profile/myfunds')
    },3000)


    return (
        <div style={{minHeight:'70vh'}}>
            <Result status="success" title="We are all done, your project have been published!" />
        </div>
    );
}

export default PublishFund;
