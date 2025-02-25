import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import PropTypes from 'prop-types'; // ES6
import { Navigate } from "react-router";


const PrivateRoute = ({ children }) => {

    const { User, Loading } = useContext(AuthContext);


    if (Loading) {
        return <span className="loading loading-dots loading-xl"></span>
    }
    if (User) {
        return children;
    }



    return (
        <div>
            <Navigate to='/login' />
        </div>
    );
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired
}



export default PrivateRoute;