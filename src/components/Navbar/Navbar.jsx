import { useContext } from "react";
import { Link, NavLink } from "react-router"
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {

    const {User, signOutUser} = useContext(AuthContext);

    console.log(User);

    const handleSignOut = () => {
        signOutUser()
        .then(() => {
            console.log('Sign Out Successfully');
        })
        .catch((error) => {
            console.log('Sign Out Error', error.message);
        })
    }


    const nav = <>
        <NavLink className='md:mr-5 font-semibold text-base' to='/' >Home</NavLink>
        <NavLink className='md:ml-5 font-semibold text-base' to='/registration' >Registration</NavLink>
        <NavLink className='md:ml-5 font-semibold text-base' to='/login' >Login</NavLink>
    </>

    return (

    <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
        <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                {" "}
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
            </svg>
            </div>
            <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
                {
                    nav
                }
            </ul>
        </div>
        <a className="btn btn-ghost text-xl">Auth Integration</a>
        </div>
        <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
            {
                nav
            }
        </ul>
        </div>
        <div className="navbar-end">
        <li className="btn">
            {
                User ? 
                <div className="flex items-center gap-3">
                    <span>{User.email}</span>
                    <a onClick={handleSignOut} className="btn">Sign Out</a>
                </div>
                : 
                <Link to='/login' >Login</Link>
            }
        </li>
        </div>
    </div>
    );
};

export default Navbar;
