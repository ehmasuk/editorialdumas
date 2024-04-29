import { Collapse } from "antd";
import "../pages/publish/publish.css";



function FaqSection({faqContents}) {
    return (
        <div className="custom-faq-section">
            <h3 className="text-center mb-4">Preguntas frecuentes</h3>
            <Collapse className="publish-faq" bordered={false} size="large" items={faqContents} defaultActiveKey={["1"]} />
        </div>
    );
}

export default FaqSection;
