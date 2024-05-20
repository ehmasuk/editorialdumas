import { Progress } from "antd";
import "./progressLoader.css";

function ProgressLoader({ percentage }) {
    return (
        <div className="loader-wraper">
            <div className="percent-wrap text-center">
                <div className="editorial-loader mb-5">
                    <span>EDITORIAL</span>
                    <span>EDITORIAL</span>
                </div>
                <Progress strokeColor="#ff8a00" percent={percentage} />
            </div>
        </div>
    );
}

export default ProgressLoader;
