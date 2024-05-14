import { BackTop, Tooltip } from "antd";
import { useState } from "react";

function ScrollTop() {
    const [showScroll, setShowScroll] = useState(false);

    window.addEventListener("scroll", () => {
        if (scrollY > "1000") {
            setShowScroll(true);
        } else {
            setShowScroll(false);
        }
    });

    return (
        <BackTop>
            <Tooltip placement="left" title="Volver arriba">
                <button className={`scroltop ${showScroll && "d-block"}`} type="button">
                    <i className="fas fa-arrow-up"></i>
                </button>
            </Tooltip>
        </BackTop>
    );
}

export default ScrollTop;
