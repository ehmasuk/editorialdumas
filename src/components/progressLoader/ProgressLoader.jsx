import { Progress } from "antd";
import "./progressLoader.css";

function ProgressLoader({ percentage }) {
    return (
        <div className="loader-wraper">
            <div className="percent-wrap">
                <Progress strokeColor="#fff" percent={percentage} />
            </div>
        </div>
    );
}

export default ProgressLoader;
