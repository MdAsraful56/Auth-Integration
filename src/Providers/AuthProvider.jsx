/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react";
import PropTypes from 'prop-types'; // ES6

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const name = 'Ashraful Islam';

    const authInfo = {
        name,
        // other data
        
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default AuthProvider;