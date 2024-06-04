import { Carousel } from "antd";
import { FiDownload } from "react-icons/fi";
import ProfileLayout from "../ProfileLayout";

function ProfileTutorials() {
    return (
        <ProfileLayout>
            <Carousel slidesToShow={2} dots={{ className: "profile-tutorial-dots" }} infinite={true} autoplay>
                <div className="card p-2">
                    <h5>Crowdfunding exitoso ¿cómo hacerlo?</h5>
                    <video src="https://lms-aws-personalize.s3.eu-west-3.amazonaws.com/Crodfundin_3000libros_.mp4" controls className="card-img" muted autoPlay />
                    <div className="d-flex">
                        <a
                            href="https://editorialdumas.com/download/profileTutorial/el_libro_Crowdfunding-exitosoc%C3%B3mo-hacerlo.docx"
                            download
                            className="d-flex p-2 align-items-center text-dark"
                            role="button"
                        >
                            <FiDownload color="blue" fontSize={20} className="mr-1" />
                            Descargar documento 1
                        </a>
                        <a
                            href="https://editorialdumas.com/download/profileTutorial/SobrelaautoraCrowdfunding-exitosoc%C3%B3mo-hacerlo.docx"
                            download
                            className="d-flex p-2 align-items-center text-dark"
                            role="button"
                        >
                            <FiDownload color="blue" fontSize={20} className="mr-1" />
                            Descargar documento 2
                        </a>
                    </div>
                </div>
                <div className="card p-2">
                    <h5>Video y propuesta</h5>
                    <video src="https://lms-aws-personalize.s3.eu-west-3.amazonaws.com/El+v%C3%ADdeo+y+la+propuesta.mp4" controls className="card-img" muted autoPlay />
                    <div className="d-flex">
                        <a href="https://editorialdumas.com/download/profileTutorial/Video-y-propuesta.docx" download className="d-flex p-2 align-items-center text-dark" role="button">
                            <FiDownload color="blue" fontSize={20} className="mr-1" />
                            Descargar documento 1
                        </a>
                        <a href="https://editorialdumas.com/download/profileTutorial/Consejos_resumen.docx" download className="d-flex p-2 align-items-center text-dark" role="button">
                            <FiDownload color="blue" fontSize={20} className="mr-1" />
                            Descargar documento 2
                        </a>
                    </div>
                </div>

                <div className="card p-2">
                    <h5>Comunicaciones, engagement y metas</h5>
                    <video src="https://lms-aws-personalize.s3.eu-west-3.amazonaws.com/Comunicacionesengagemen.mp4" controls className="card-img" muted autoPlay />
                    <div className="d-flex">
                        <a
                            href="https://editorialdumas.com/download/profileTutorial/Comunicaciones-engagement-y-metasI.docx"
                            download
                            className="d-flex p-2 align-items-center text-dark"
                            role="button"
                        >
                            <FiDownload color="blue" fontSize={20} className="mr-1" />
                            Descargar documento 1
                        </a>
                        <a
                            href="https://editorialdumas.com/download/profileTutorial/MetasComunicaciones%2C-engagement-y-metasII.docx"
                            download
                            className="d-flex p-2 align-items-center text-dark"
                            role="button"
                        >
                            <FiDownload color="blue" fontSize={20} className="mr-1" />
                            Descargar documento 2
                        </a>
                    </div>
                </div>
                <div className="card p-2">
                    <h5>Recompensas</h5>
                    <video src="https://lms-aws-personalize.s3.eu-west-3.amazonaws.com/recompensas.mp4" controls className="card-img" muted autoPlay />
                    <div className="d-flex">
                        <a href="https://editorialdumas.com/download/profileTutorial/Recompensas.docx" download className="d-flex p-2 align-items-center text-dark" role="button">
                            <FiDownload color="blue" fontSize={20} className="mr-1" />
                            Descargar documento
                        </a>
                    </div>
                </div>
            </Carousel>
        </ProfileLayout>
    );
}

export default ProfileTutorials;
