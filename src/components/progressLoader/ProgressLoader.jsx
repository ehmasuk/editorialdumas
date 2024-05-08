import { Progress } from "antd";
import "./progressLoader.css";

function ProgressLoader({ percentage }) {
    return (
        <div className="loader-wraper">
            <div className="percent-wrap">
                <Progress strokeColor="#ff8a00" percent={percentage} />
            </div>
        </div>
    );
}

export default ProgressLoader;
