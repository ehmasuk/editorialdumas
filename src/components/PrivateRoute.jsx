import { Navigate } from "react-router-dom";

function PrivateRoute({ isLogedin, children }) {
    if (isLogedin) {
        return children;
    } else {
        return <Navigate to="/login" replace />;
    }
}

export default PrivateRoute;
