/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";
import PropTypes from 'prop-types'; // ES6
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../Firebase/firebase.init";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [User, setUser] = useState(null);

    const name = 'Ashraful Islam';

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    };


    onAuthStateChanged(auth, currentUser => {
        if (currentUser) {
            console.log('User Logged In', currentUser);
            setUser(currentUser);
        } else {
            console.log('User Logged Out');
            setUser(null);
        }
    });


    
    const authInfo = {
        name,
        // other data
        User,
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