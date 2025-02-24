// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDMzmh3C4hDUNm586x0QZ0yeLmAGNPsrz0",
    authDomain: "auth-integration-fd647.firebaseapp.com",
    projectId: "auth-integration-fd647",
    storageBucket: "auth-integration-fd647.firebasestorage.app",
    messagingSenderId: "35722193855",
    appId: "1:35722193855:web:3d3760052320478e334f0a",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;