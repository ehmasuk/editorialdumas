import axios from "axios";
import { useEffect, useState } from "react";

const apiUrl = import.meta.env.VITE_REACT_APP_DEFAULT_API_ROUTE;

function useGet(url) {
    const [data, setData] = useState(null);
    const [isLoadind, setIsLoadind] = useState(false);
    const [error, setError] = useState(null);

    const getData = async () => {
        setIsLoadind(true);
        try {
            const res = await axios.get(apiUrl + url);
            setData(res.data);
        } catch (error) {
            setError(error.message);
            console.log(error);
        } finally {
            setIsLoadind(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return [data, error, isLoadind];
}

export default useGet;
