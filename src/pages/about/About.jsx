import Base from "../../layouts/Base";

import "./about.css";

function About() {
    return (
        <Base>
            <div className="dz-bnr-inr overlay-secondary-dark dz-bnr-inr-sm" style={{ backgroundImage: "url(images/background/bg3.jpg)" }}>
                <div className="container">
                    <div className="dz-bnr-inr-entry">
                        <h1 style={{ maxWidth: "840px", margin: "auto" }}>Quiénes somos</h1>
                    </div>
                </div>
            </div>
            <div className="single-description-wrap">
                <div className="single-description">
                    <div className="container">
                        <p className="descriptions">
                            <b>La Editorial DUMAS</b> está especializada en la publicación de libros en español a nivel internacional. Es un proyecto impulsado por la escuela de escritura Ray
                            Bolívar Sosa. Su función principal es dar voz a los autores y facilitar su inserción en el mercado editorial.
                        </p>
                    </div>
                </div>
                <div className="single-description">
                    <div className="container">
                        <h3>Objetivos de la editorial</h3>
                        <p className="descriptions">
                            Potenciar la publicación de obras, el desarrollo, el alcance y las ventas de autores talentosos que aún no han accedido al mercado editorial y que cuentan con ideas
                            originales y confían en su talento.
                        </p>
                    </div>
                </div>
                <div className="single-description">
                    <div className="container">
                        <h4>¿Cómo te ayudamos?</h4>
                        <p className="descriptions">Te ayudamos a conectar con tus lectores más entusiastas. Si ellos creen en tu obra, entonces el resto del mundo también lo hará.</p>
                    </div>
                </div>
                <div className="single-description">
                    <div className="container">
                        <h4>¿Cómo es el proceso de recepción de manuscritos?</h4>
                        <p className="descriptions">
                            Crea una cuenta en la editorial y envíanos tu obra en formato Word, con letra Times New Roman tamaño 12 y a doble espacio. En un plazo de 10 a 14 días recibirás nuestra
                            respuesta.
                        </p>
                    </div>
                </div>
                <div className="single-description">
                    <div className="container">
                        <h4>Importante</h4>
                        <p className="descriptions">Los documentos que no cumplan con estas especificaciones no serán considerados.</p>
                    </div>
                </div>
                <div className="single-description">
                    <div className="container">
                        <h4>¿Cuáles son los criterios de evaluación?</h4>
                        <p className="descriptions">
                            Calidad, calidad y más calidad. Envía tu obra o la idea de tu obra bien redactada y sin errores. Si la idea es novedosa, nos pondremos en contacto contigo
                        </p>
                    </div>
                </div>
                <div className="single-description">
                    <div className="container">
                        <h4>¿Si me aceptan para publicar, qué pasa después?</h4>
                        <p className="descriptions">
                            Te ayudamos a recaudar fondos a través de una campaña de crowdfunding. Te acompañaremos durante todo el proceso, desde la creación de la campaña hasta su finalización, con
                            apoyo constante y seguimiento especializado para ayudarte a alcanzar tus objetivos.
                        </p>
                    </div>
                </div>
                <div className="single-description">
                    <div className="container">
                        <h4>¿Mi libro estará en las librerías?</h4>
                        <p className="descriptions">
                            Sí, tu libro estará disponible en distribución bajo demanda en 4200 librerías de España y Portugal, además de en formato ebook en más de 80 librerías y, por supuesto, en
                            Amazon, Casa del Libro, El Corte Inglés, Fnac y Google Play.
                        </p>
                    </div>
                </div>
                <div className="single-description">
                    <div className="container">
                        <h4>¿La editorial se encarga de todo el proceso?</h4>
                        <p className="descriptions">
                            Sí, nos encargamos de todo el proceso, desde el diseño de la portada, la maquetación, la edición, la creación del booktrailer y el lanzamiento de la obra, para que tú solo
                            te preocupes de escribir.
                        </p>
                    </div>
                </div>
            </div>
        </Base>
    );
}

export default About;
