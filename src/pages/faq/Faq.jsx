import { Link } from "react-router-dom";
import FaqSection from "../../components/FaqSection";
import Base from "../../layouts/Base";
import { useSelector } from "react-redux";



function Faq() {

    const { isLogedin } = useSelector((store) => store.AuthCheckerSlice);


    const faqContents = [
        {
            key: "1",
            label: "¿Cómo se evalúa mi proyecto?",
            children: (
                <p>
                    Nuestro equipo realiza un análisis colectivo de todos los proyectos recibidos. No operamos a través de un misterioso comité editorial; en su lugar, contamos con un foro interno
                    denominado La Colmena. Aquí, los especialistas de nuestro equipo evalúan cada proyecto desde su perspectiva profesional y aportan sus opiniones. Es crucial que completes el formulario
                    de manera exhaustiva, ya que esto nos ayuda a comprender mejor tu proyecto.
                </p>
            ),
        },
        {
            key: "2",
            label: "¿Quién revisa mi manuscrito?",
            children: (
                <p>
                    Todos los proyectos que recibimos son examinados por nuestro equipo. En esta etapa inicial, revisamos el manuscrito o la idea, así como tu perfil y tu comunidad. No nos adentramos en
                    la lectura completa del manuscrito en esta fase; preferimos conocerte, escucharte y que compartas la visión e ilusión detrás del proyecto. La revisión detallada del manuscrito comienza
                    una vez que finalizas la campaña de crowdfunding y contamos con los recursos necesarios para que nuestros profesionales editoriales comiencen su trabajo.
                </p>
            ),
        },
        {
            key: "3",
            label: "¿Qué aspectos valoramos en un proyecto?",
            children: (
                <p>
                    Nuestra misión es ayudarte a convertir tu proyecto en un libro. Dado nuestro método de financiación, consideramos al autor y su comunidad, así como el potencial de la idea y la calidad
                    del contenido. ==== <Link to={isLogedin ? '/profile/myproposals' : '/register'}>Completar el formulario</Link> de manera precisa es crucial, ya que nos permite comprender mejor tu proyecto, conocer tus motivaciones y evaluar su viabilidad dentro de nuestro
                    enfoque de financiamiento.
                </p>
            ),
        },
        {
            key: "4",
            label: "¿Cuánto tiempo se tarda en recibir una respuesta?",
            children: (
                <p>
                    Todos los proyectos recibidos son revisados por nuestro equipo. Esto implica tomarnos el tiempo necesario para analizar la información proporcionada, revisar el manuscrito o la idea, y
                    examinar tu perfil y tu comunidad. A pesar del volumen de proyectos, nos comprometemos a comunicarnos contigo en menos de una semana. Una vez más, <Link to={isLogedin ? '/profile/myproposals' : '/register'}>completar el formulario</Link> de manera
                    detallada es esencial para una comprensión completa de tu proyecto.
                </p>
            ),
        },
        {
            key: "5",
            label: "¿Cuál es nuestro papel en el proceso?",
            children: (
                <p>
                    Nuestra principal función es acompañarte en todas las etapas de tu proyecto editorial. Te asignamos un profesional especializado que responde a tus consultas, te brinda orientación
                    para tener éxito en tu campaña de crowdfunding, te guía a través del proceso de edición y te ayuda a llegar a una audiencia más amplia una vez que el libro está publicado. Además, te
                    proporcionamos acceso a nuestra plataforma especializada y a tu panel de autor personalizado.
                </p>
            ),
        },
        {
            key: "6",
            label: "¿Cuál es la diferencia entre editorial Dumas y otras editoriales y plataformas de crowdfunding?",
            children: (
                <p>
                    Nos destacamos como una plataforma editorial especializada que combina el crowdfunding con la publicación del libro. A través de nuestro enfoque, ayudamos a financiar y luego publicar
                    tu libro. Somos únicos en este sentido, ya que proporcionamos un servicio integral desde la financiación hasta la publicación.
                </p>
            ),
        },
        {
            key: "7",
            label: "¿Cuál es la diferencia entre la editorial Dumas y otras editoriales?",
            children: (
                <p>
                    Somos una plataforma editorial especializada que se distingue de las editoriales tradicionales y las plataformas de crowdfunding convencionales. Nuestro enfoque único combina lo mejor
                    de ambos mundos para ayudarte a convertir tu proyecto en un libro. Nuestra principal diferencia radica en nuestra capacidad para ayudar a los autores a financiar sus proyectos con el
                    apoyo de su comunidad.
                </p>
            ),
        },
        {
            key: "8",
            label: "¿Qué tipo de libros publicamos?",
            children: (
                <p>
                    Publicamos una amplia variedad de géneros editoriales, desde poesía hasta ficción de todo tipo, ensayos, reportajes, fotografía, cuentos ilustrados y divulgación, entre otros. No hay
                    límites impuestos a tu creatividad.
                </p>
            ),
        },
        {
            key: "9",
            label: "¿Cuál es el perfil de nuestros autores?",
            children: (
                <p>
                    Nuestra comunidad de autores abarca desde figuras reconocidas hasta autores noveles. Contamos con una diversidad de perfiles que incluyen proyectos personales, profesionales
                    especializados, deportistas destacados, personas mayores con historias que contar y líderes en causas sociales, entre otros.
                </p>
            ),
        },
        {
            key: "10",
            label: "¿Es necesario tener el manuscrito terminado?",
            children: (
                <p>
                    No es necesario. Nuestro objetivo es ayudarte a convertir tu proyecto en un libro, por lo que es posible que solo tengas una idea o unas primeras páginas. Compartiremos nuestra opinión
                    y experiencia contigo para apoyarte en la creación del mejor libro posible. Por eso es crucial que completes el formulario, ya que nos proporciona una comprensión más profunda de tu
                    proyecto.
                </p>
            ),
        },
        {
            key: "11",
            label: "¿Publicamos en otros idiomas además de castellano?",
            children: <p>Actualmente, solo publicamos en castellano.</p>,
        },
        {
            key: "12",
            label: "¿Cuánto tiempo tengo para escribir el libro si solo tengo la idea?",
            children: (
                <p>
                    Una vez finalizada la campaña de crowdfunding, tienes entre 90 y 180 días para entregar el manuscrito a nuestro equipo editorial. Sin embargo, somos flexibles y adaptamos el proceso
                    según las necesidades del proyecto. Por ejemplo, podemos trabajar con entregas parciales de capítulos o textos. Es importante respetar el plazo dado que los mecenas esperan recibir el
                    libro.
                </p>
            ),
        },
        {
            key: "13",
            label: "Si ya tengo un libro publicado, ¿puedo trabajar con nosotros?",
            children: (
                <p>
                    Si no has firmado un contrato de exclusividad con otra editorial, podemos colaborar para convertir tu proyecto en un libro. Muchos de nuestros autores han publicado previamente en
                    plataformas como Amazon o han coeditado con otras editoriales, y podemos vender sus títulos en nuestra tienda online.
                </p>
            ),
        },
        {
            key: "14",
            label: "¿Somos una editorial de autopublicación?",
            children: (
                <p>
                    No, nuestra misión es ayudarte a financiar y publicar tu proyecto editorial con el apoyo de tu comunidad. A diferencia de las editoriales de autopublicación, gestionamos todos los
                    aspectos del proyecto, desde el trabajo de marketing y edición hasta la impresión y distribución, utilizando las aportaciones económicas de los mecenas.
                </p>
            ),
        },
        {
            key: "15",
            label: "¿Hay algún costo asociado con la publicación?",
            children: (
                <p>
                    No, la financiación para la edición de tu proyecto se obtiene a través de una campaña de crowdfunding con el respaldo económico de tu comunidad. Algunos autores eligen contribuir
                    financieramente al proyecto para garantizar una campaña exitosa o para tener ejemplares adicionales para su uso personal.
                </p>
            ),
        },
        {
            key: "16",
            label: "¿Se gana dinero con la campaña de crowdfunding?",
            children: (
                <p>
                    Los fondos recaudados durante la campaña de crowdfunding se destinan exclusivamente a financiar los costos de desarrollo del proyecto, desde la precampaña hasta la publicación del
                    libro.
                </p>
            ),
        },
        {
            key: "17",
            label: "¿Se gana dinero con las ventas del libro?",
            children: (
                <p>
                    Después de la publicación del libro, la participación en la promoción y comercialización puede influir en los ingresos. Compartimos el 50% del margen neto de cada unidad vendida, tanto
                    en formato físico como digital, con el autor.
                </p>
            ),
        },
        {
            key: "18",
            label: "¿Qué es el crowdfunding?",
            children: (
                <p>
                    El crowdfunding es un método de financiación colectiva en el que una comunidad apoya económicamente un proyecto a cambio de recibir el producto final, en este caso, el libro. Durante
                    la campaña, el autor comparte su proyecto con amigos, familiares, seguidores y otros interesados, con el objetivo de convertirlos en mecenas.
                </p>
            ),
        },
        {
            key: "19",
            label: "¿Quiénes son los mecenas?",
            children: (
                <p>
                    Los mecenas son aquellas personas o instituciones que apoyan económicamente un proyecto durante la campaña de crowdfunding. A cambio, reciben beneficios como el acceso anticipado al
                    libro, menciones de agradecimiento y la oportunidad de participar en recompensas exclusivas.
                </p>
            ),
        },
        {
            key: "20",
            label: "¿Qué son las recompensas?",
            children: (
                <p>
                    Las recompensas son las opciones de apoyo económico ofrecidas a los mecenas durante la campaña de crowdfunding. Estas pueden incluir el libro físico, pruebas de imprenta, correcciones
                    o incluso la inclusión del nombre del mecenas en los ejemplares.
                </p>
            ),
        },
        {
            key: "21",
            label: "¿Es necesario tener muchos seguidores en redes sociales?",
            children: (
                <p>
                    No es un requisito absoluto. La relevancia de tus seguidores en redes sociales depende del alcance y naturaleza de tu proyecto. Algunos autores logran una campaña exitosa con el apoyo
                    de su círculo cercano, mientras que otros aprovechan su presencia en redes sociales. <Link to={isLogedin ? '/profile/myproposals' : '/register'}>Completar el formulario</Link> de manera precisa nos ayuda a comprender mejor tu comunidad y cómo
                    involucrarla.
                </p>
            ),
        },
        {
            key: "22",
            label: "¿Cómo se consiguen mecenas?",
            children: (
                <p>
                    Nuestro equipo proporciona orientación sobre las estrategias de comunicación más efectivas para atraer mecenas durante la campaña de crowdfunding. Se diseña una estrategia única según
                    la naturaleza y alcance del proyecto, con el objetivo de involucrar a la comunidad del autor.
                </p>
            ),
        },
        {
            key: "23",
            label: "¿Qué es un patrocinador?",
            children: (
                <p>
                    Un patrocinador es un mecenas especial que realiza una contribución significativa al proyecto a cambio de beneficios adicionales, como un número específico de libros y acciones de
                    marketing personalizadas. Estos patrocinadores pueden ser instituciones, empresas o individuos interesados en apoyar el proyecto.
                </p>
            ),
        },
        {
            key: "24",
            label: "¿Realizamos envíos internacionales?",
            children: (
                <p>
                    Sí, realizamos envíos internacionales tanto durante la campaña de crowdfunding como después de la publicación del libro. Los costos de envío son responsabilidad del mecenas o comprador
                    del libro.
                </p>
            ),
        },
        {
            key: "25",
            label: "¿Cómo se determina el objetivo de la campaña?",
            children: (
                <p>
                    El objetivo de la campaña se establece mediante un análisis del proyecto, su comunidad, potencial y costos asociados. Esto incluye el trabajo de marketing, edición, impresión,
                    distribución y otros gastos relacionados con el proyecto.
                </p>
            ),
        },
        {
            key: "26",
            label: "¿Cuánto tiempo dura una campaña de crowdfunding?",
            children: <p>Las campañas de crowdfunding suelen durar 30 días naturales, aunque muchos autores alcanzan su objetivo antes de ese plazo.</p>,
        },
        {
            key: "27",
            label: "¿Qué sucede si no se alcanza el objetivo de la campaña?",
            children: (
                <p>
                    En caso de no alcanzar el objetivo de la campaña, trabajamos contigo para explorar alternativas, como encontrar un patrocinador o ajustar la estrategia de la campaña. Si no se logra el
                    objetivo, se devuelve el dinero a los mecenas de manera automática.
                </p>
            ),
        },
        {
            key: "28",
            label: "¿Cómo es el proceso de edición?",
            children: (
                <p>
                    Una vez finalizada la campaña y asegurados los recursos para el proyecto, comenzamos con el proceso de edición. Nuestro equipo editorial coordina todas las etapas, desde las
                    correcciones hasta la maquetación y las pruebas de imprenta. Mantenemos una comunicación constante contigo y los mecenas para informar sobre el progreso del proyecto.
                </p>
            ),
        },
        {
            key: "29",
            label: "¿Dónde se venderá mi libro?",
            children: (
                <p>
                    Tu libro estará disponible para la venta en nuestra tienda online, así como en librerías locales que estén interesadas en el proyecto. Exploramos diversas opciones de venta en función
                    de tus preferencias y audiencia potencial.
                </p>
            ),
        },
    ];

    return (
        <Base>
            <div className="content-inner-1">
                <FaqSection faqContents={faqContents} />
            </div>
        </Base>
    );
}

export default Faq;
