import { useEffect, useState } from "react";

function useValidation(obj) {
    const validateFields = (obj) => {
        const validationResults = {};
        let allFieldsValid = true;
        for (const [key, value] of Object.entries(obj)) {
            if (typeof value === "string") {
                validationResults[key] = value.trim() !== "";
            } else {
                validationResults[key] = value !== null && value !== undefined && value !== 0;
            }

            if (!validationResults[key]) {
                allFieldsValid = false;
            }
        }

        validationResults.isValid = allFieldsValid;
        return validationResults
    };
    const [validation, setValidation] = useState(validateFields(obj));
    const [showErrors, setShowErrors] = useState(false);
    useEffect(() => {
        setValidation(validateFields(obj));
        setShowErrors(false)
    },[obj])

    return [validation,showErrors,setShowErrors];
}

export default useValidation;
