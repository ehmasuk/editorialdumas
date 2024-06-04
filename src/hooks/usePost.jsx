import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { hideLoader, showLoader } from "../features/CombineSlice";
const apiUrl = import.meta.env.VITE_REACT_APP_DEFAULT_API_ROUTE;

function usePost(url, onSuccess) {
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(null);
    const [resData, setResData] = useState(null);
    const [error, setError] = useState(null);

    const postData = async (data) => {
        dispatch(showLoader());
        setIsLoading(true);
        try {
            const res = await axios.post(apiUrl + url, data);
            setResData(res.data);
            onSuccess && onSuccess();
        } catch (error) {
            toast.error("Algo salió mal, inténtelo de nuevo más tarde");
            console.log(error);
            setError(error);
        } finally {
            dispatch(hideLoader());
            setIsLoading(false);
        }
    };

    return [postData, resData, isLoading, error];
}

export default usePost;
