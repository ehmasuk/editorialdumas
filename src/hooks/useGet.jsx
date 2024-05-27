import axios from "axios";
import { useEffect, useState } from "react";

function useGet(url) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoadind] = useState(false);
    const [error, setError] = useState(null);

    const getData = async () => {
        setIsLoadind(true);
        try {
            const res = await axios.get(url);
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

    return [data, isLoading, error, getData];
}

export default useGet;
