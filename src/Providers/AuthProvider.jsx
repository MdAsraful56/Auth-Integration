/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; // ES6
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
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

    const signOutUser = () => {
        return signOut(auth);
    }


    // onAuthStateChanged(auth, currentUser => {
    //     if (currentUser) {
    //         console.log('User Logged In', currentUser);
    //         setUser(currentUser);
    //     } else {
    //         console.log('User Logged Out');
    //         setUser(null);
    //     }
    // });

    useEffect( () =>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('User Logged In', currentUser);
            setUser(currentUser);
        });

        return () =>{ unSubscribe() };

    }, []);


    
    const authInfo = {
        name,
        // other data
        User,
        createUser,
        signInUser,
        signOutUser 
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