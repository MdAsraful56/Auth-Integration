/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react";
import PropTypes from 'prop-types'; // ES6
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../Firebase/firebase.init";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const name = 'Ashraful Islam';

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    };
    
    const authInfo = {
        name,
        // other data
        createUser,
        signInUser 
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