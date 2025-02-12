import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = (props) => {
    const {user,isLoading} = useContext(AuthContext);
    const {children} = props || {}
    const {pathname} = useLocation();
    if (isLoading) {
        return <p className="text-center text-purple-500 text-2xl mt-24">Loading...</p>
    }
    if (user) {
        return children;
    }
    return (
        <Navigate state={pathname} to='/login'></Navigate>
    );
};

export default PrivateRoute;