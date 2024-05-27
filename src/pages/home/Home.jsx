import HomeAllProjects from "../../components/home/HomeAllProjects";
import HomeBookSale from "../../components/home/HomeBookSale";
import useGet from "../../hooks/useGet";
import Base from "../../layouts/Base";


const apiUrl = import.meta.env.VITE_REACT_APP_DEFAULT_API_ROUTE;

function Home() {
    const [allbooks, isLoading] = useGet(apiUrl + "/user/book");

    return (
        <Base>
            <div className="page-content bg-white">
                <HomeBookSale allBooks={allbooks && allbooks} isLoading={isLoading} sectionTitle="Novedades" />
                <HomeBookSale allBooks={allbooks && allbooks} isLoading={isLoading} sectionTitle="Libros en edición" />
                <HomeAllProjects sectionTitle="Libros en campaña" />

            </div>
        </Base>
    );
}

export default Home;
