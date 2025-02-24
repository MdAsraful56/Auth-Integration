import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Providers/AuthProvider";


const Registration = () => {

    const [showPassword, setShowPassword] = useState(false);


    const { createUser } = useContext(AuthContext);

    const handleRegistration = (e) => {
        e.preventDefault();
        const username = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        console.log(username, email, password);

        // user registration
        createUser(email, password)
        .then((result) => {
            console.log(result.user);
        })
        .catch((error) => {
            console.log( 'ERROR', error.massage);
        })
    };


    return (
        <div className=" ">
            <form onSubmit={handleRegistration} className="flex flex-col justify-center items-center h-screen gap-5">
                <h1 className="text-3xl">Registration</h1>
                <label className="input validator">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></g></svg>
                    <input type="input" required placeholder="Username" pattern="[A-Za-z][A-Za-z0-9\-]*" title="Only letters, numbers or dash" />
                </label>
                <label className="input validator">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
                    <input type="email" placeholder="example@site.com" required/>
                </label>
                {/* <div className="validator-hint hidden">Enter valid email address</div> */}
                <label className="input validator relative">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle></g></svg>
                    <input type={showPassword ? 'text' : 'password'} required placeholder="Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must be more than 8 characters, including number, lowercase letter, uppercase letter" />
                    <button onClick={() => {setShowPassword(!showPassword)}} className="btn btn-xs absolute right-1 top-2" type="button">
                        {
                            showPassword ?  <FaEye /> : <FaEyeSlash />
                        }
                    </button>
                </label>
                {/* <div className="validator-hint hidden">Password must contain at least 8 characters, including uppercase, lowercase letters and number</div> */}
                <button type="submit" className="btn w-52 btn-info text-lg text-black ">Registration</button>
                <div>
                    <a >You have an account ? </a><Link to='/login'> Login</Link>
                </div>
            </form>
        </div>
    );
};

export default Registration;