import axios from "axios";
import { useEffect, useState } from "react";

function useGet(url,onSuccess,onError) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const getData = async () => {
        setIsLoading(true);
        try {
            const res = await axios.get(url);
            setData(res.data);
            onSuccess && onSuccess()
        } catch (error) {
            setError(error.message);
            console.log(error);
            onError && onError()
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return [data, isLoading, error, getData];
}

export default useGet;
